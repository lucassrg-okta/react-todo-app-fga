const sqlite3 = require("sqlite3").verbose();
const filepath = './todos.db';

function createDbConnection() {
  const db = new sqlite3.Database(filepath, (error) => {
    if (error) {
      return console.error(error.message);
    }
    createTable(db);
    console.log('TODO Table Created');
  });
  console.log("Connection with SQLite has been established");
  return db;
}

function createTable(db) {
  db.exec(`
  CREATE TABLE todos( 
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    title TEXT NOT NULL, 
    priority TEXT NOT NULL, 
    create_date TEXT NOT NULL, 
    status TEXT NOT NULL, 
    owner TEXT NOT NULL
    );
`);
}


function closeDbConnection(db) {
    db.close();
}


try {
    const db  = createDbConnection();
    closeDbConnection(db);
    
} catch (error) {
    console.error(err.message)
}
