// const mysql2 = require('mysql2');
// const mysqlpool = mysql2.createPool({
//     host:'127.0.0.1',
//     user:'root',
//     password:'root',
//     database:'medico',
//     waitForConnections:true
// })

// const dbPromise = mysqlpool.promise();

// module.exports = dbPromise;



const mysql2 = require('mysql2/promise');
const mysqlpool = mysql2.createPool({
host:'127.0.0.1',
user:'root',
password:'root',
database:'medico',
waitForConnections: true
})
module.exports = mysqlpool;// Add database connection setup
// Add connection pooling to database
// Add database connection setup
// Add connection pooling to database
