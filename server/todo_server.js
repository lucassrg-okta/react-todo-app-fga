const PORT = process.env.PORT ?? 8000
require('dotenv').config() 
const express = require('express')

const cors = require('cors')
// const { v4: uuidv4 } = require('uuid')
const app = express()
const todo_db_path = './todos.db';
const Task = require('./task');

const taskMgmt = new Task(todo_db_path);
const { CredentialsMethod, OpenFgaClient } = require('@openfga/sdk'); 
const authzMiddleware = require('./authz_middleware');

app.use(cors())
app.use(express.json())

const user = "john.doe@atko.email";

const fgaClient = new OpenFgaClient({
    apiScheme: process.env.FGA_API_SCHEME, // optional, defaults to "https"
    apiHost: process.env.FGA_API_HOST, // required, define without the scheme (e.g. api.fga.example instead of https://api.fga.example)
    storeId: process.env.FGA_STORE_ID, // not needed when calling `CreateStore` or `ListStores`
    authorizationModelId: process.env.FGA_AUTHORIZATION_MODEL_ID, // Optional, can be overridden per request
    credentials: {
      method: CredentialsMethod.ClientCredentials,
      config: {
        apiTokenIssuer: process.env.FGA_API_TOKEN_ISSUER,
        apiAudience: process.env.FGA_API_AUDIENCE,
        clientId: process.env.FGA_CLIENT_ID,
        clientSecret: process.env.FGA_CLIENT_SECRET,
      }
    }
  });


//delete a todo

app.delete('/todos/:id',  async (req, res) => {
    const { id } = req.params
    console.log("delete ID", id);
    if (id == undefined || "") {
        //throw error
        res.status(400).json({ message: "Invalid ID"});
    }

    req.subject = `user:${user}`;
    req.object = `task:${id}`;

    console.log("request.body", req.body);
    console.log("request.params", req.params);    
    await authzMiddleware.authorize(req, res);

    await taskMgmt.deleteTask(id);
    res.send("Task successfully deleted");
});

//update priority of a todo
app.put('/todos/priority/:id', async (req, res) => {
    console.log("req.body", req.body);
    const { id, owner, priority } = req.body

    const relationship_tuple = 
    {
        user: "user:john.doe@atko.email",
        relation: "can_update_priority",
        object: `task:${id}`
    }
    const {allowed} = await fgaClient.check(relationship_tuple)

    if (!allowed) {
        res.status(403).json({ message: "Not Authorized"}); 
    }

    res.send(await taskMgmt.updatePriority(id, priority));

    // db.run(`UPDATE todos SET 
    //     owner = ?,        
    //     status = ?, 
    //     priority = ? where id = ?`,
    //     [owner, status, priority, id], function (error) {
    //         if (error) {
    //             console.error(error.message);
    //         }
    //         console.log(`Row(s) updated: ${this.changes}`);
    //         if (this.changes > 0) {
    //             db.get(`SELECT * FROM todos where id = ${id}`, (err, row) => {
    //                 if (err) {
    //                     console.error(err);
    //                 }
    //                 res.send(row);
    //             });
    //         }

    //     });
});

//update priority of a todo
app.put('/todos/status/:id', async (req, res) => {
    console.log("req.body", req.body);
    const { id, status, owner } = req.body

    const relationship_tuple = 
    {
        user: "user:john.doe@atko.email",
        relation: "can_update_status",
        object: `task:${id}`
    }
    const {allowed} = await fgaClient.check(relationship_tuple)

    if (!allowed) {
        res.status(403).json({ message: "Not Authorized"}); 
    }

    res.send(await taskMgmt.updateStatus(id, status));

    // db.run(`UPDATE todos SET 
    //     owner = ?,        
    //     status = ?, 
    //     priority = ? where id = ?`,
    //     [owner, status, priority, id], function (error) {
    //         if (error) {
    //             console.error(error.message);
    //         }
    //         console.log(`Row(s) updated: ${this.changes}`);
    //         if (this.changes > 0) {
    //             db.get(`SELECT * FROM todos where id = ${id}`, (err, row) => {
    //                 if (err) {
    //                     console.error(err);
    //                 }
    //                 res.send(row);
    //             });
    //         }

    //     });
});


//create a new todo
app.post('/todos', async (req, res) => {
    console.log("req.body", req.body);
    const { owner, title, priority, create_date, status } = req.body
    
    // const relationship_tuple = 
    // {
    //     user: "user:john.doe@atko.email",
    //     relation: "can_create",
    //     object: 'task'
    // }

    // const {allowed} = await fgaClient.check(relationship_tuple) 

    // if (!allowed) {
    //     res.status(403).json({ message: "Not Authorized"}); 
    // }

    const new_task = await taskMgmt.createTask(owner, title, priority, create_date, status); 
    console.log("new_task", new_task);

    const write_tuple = 
    {
        user: "user:john.doe@atko.email",
        relation: "owner",
        object: `task:${new_task.id}`
    }
    await fgaClient.write(
        {
            writes: [write_tuple]
        });
});

//retrieve a list of todos for the user
app.get('/todos/:user', async (req, res) => {
    // console.log("calling todos for user", req);
    const { user } = req.params
    console.log("user", user);

    const list_objects = await fgaClient.listObjects({
        user: `user:${user}`,
        relation: "owner",
        type: "task"
        }        
    )
    
    res.send(await taskMgmt.listTasks(user, list_objects.objects));
    
    // db.all(`SELECT * FROM todos where owner=$user`, { $user: user }, (error, rows) => {
    //     if (error) {
    //         console.error(error.message);
    //     }
    //     console.log("rows", rows);
    //     res.send(rows);
    // })
});


app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));


process.on('SIGINT', () => {
    taskMgmt.closeDbConnection();
    process.exit();
});
// try {
//     app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))
// } finally {
//     db.close((err) => {
//         if (err) {
//             return console.error(err.message);
//         }
//         console.log('Close the database connection.');
//     });
// }
