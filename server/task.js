
const sqlite3 = require('sqlite3').verbose()



class Task {

    constructor(dbPath) {
        // let db = new sqlite3.Database(':memory:', (err) => {
        this.db = new sqlite3.Database(dbPath, (err) => {
            if (err) {
                return console.error(err.message);
            }
            console.log('Connected to the todos.db SQlite database.');
        });

    }



    async createTask(owner, title, priority, create_date, status) {
        return new Promise((resolve, reject) => {
            //reference to the task instance
            const that = this;
            that.db.run(`INSERT INTO todos(owner, title, create_date, status, priority) VALUES (?, ?, datetime(?), ?, ?)`,
            [owner, title, create_date, status, priority], function (error) {
                    if (error) {
                        reject(error);
                        return;
                    }
                    console.log("lastid "+this.lastID);
                    
                    that.db.get(`SELECT * FROM todos where rowid = ?`, this.lastID, (err, row) => {
                        if (err) {
                            reject(err)
                        } else {
                            resolve(row);
                        }
                        });
                });
        });
    }

    async deleteTask(id) {
        return new Promise((resolve, reject) => {
            this.db.run(`DELETE from todos where id = ? `,
                [id], function (error) {
                    if (error) {
                        reject(error)
                    } else {
                        resolve("`Successfully delete task with ID: ${id}`");
                    }
                });
            });

    }

    async updateStatus(id, status) {
        return new Promise((resolve, reject) => {
            this.db.run(`UPDATE todos SET 
            status = ? where id = ?`,
                [status, id], function (error) {
                    if (error) {
                        reject(error);
                        return;
                    }

                    if (this.changes > 0) {
                        this.db.get(`SELECT * FROM todos where id = ?`, [id], (err, row) => {
                            if (err) {
                                reject(err)
                            } else {
                                resolve(row);
                            }
                        });
                    } else {
                        resolve(null); 
                    }
                });
        });
    } 

    async updatePriority(id, priority) {
        return new Promise((resolve, reject) => {
            this.db.run(`UPDATE todos SET 
            priority = ? where id = ?`,
                [priority, id], function (error) {
                    if (error) {
                        reject(error);
                        return
                    }

                    if (this.changes > 0) {
                        this.db.get(`SELECT * FROM todos where id = ?`, [id], (err, row) => {
                            if (err) {
                                reject(err)
                            } else {
                                resolve(row);
                            }
                        });
                    } else {
                        resolve(null); 
                    }
                }.bind(this));
        });
    }

    async listTasks(user, allowed_tasks) {        

        const ids = Task.removeTypeFromName("task:", allowed_tasks);
        const placeholder = ids.map(() => '?').join(',');
        const combined_params = [user, ...ids];

        console.log("user", user);
        console.log("placeholder", placeholder);
        console.log(`combined_params: `, combined_params);

        return new Promise((resolve, reject) => {
            this.db.all(`SELECT * FROM todos WHERE owner=? 
                        AND id IN (${placeholder}) ORDER BY create_date DESC`, combined_params, (error, rows) => {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(rows);
                }
            });
        });
    }

    async closeDbConnection() {
        this.db.close();
    }

    static removeTypeFromName(prefix, listOfObjects) {
        console.log("listOfObjects", listOfObjects);
        return listOfObjects.map(word => 
            word.startsWith(prefix) ? word.substring(prefix.length) : word);

    }
}
module.exports = Task