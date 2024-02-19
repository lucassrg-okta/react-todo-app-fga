const PORT = process.env.PORT ?? 8000
require('dotenv').config() 
const express = require('express')

const cors = require('cors')
// const { v4: uuidv4 } = require('uuid')
const app = express()

const FGA = require('./FGA');

app.use(cors())
app.use(express.json())


//retrieve a list of permissions for role
app.post('/api/isallowed', async (req, res) => {
    console.log("server /isallowed", req);

    const { subject, relation, object } = req.body;
    
    console.log("subject: ",subject);
    console.log("relation: ",relation);
    console.log("object: ",object);

    const fga = new FGA();
    const isAllowed = await fga.isAllowed(subject,relation, object);
    console.log(`[SERVER]subject: ${subject} | relation: ${relation} | object: ${object} => isAllowed: ${isAllowed}`);
    
    
    
    res.send(isAllowed);
    
});

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));


process.on('SIGINT', () => {
    // taskMgmt.closeDbConnection();
    process.exit();
});
