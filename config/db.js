const mysql = require('mysql');
const util = require('util');          // Need this Node module for Util.promisify()

const options = {
    host: 'localhost',
    port: '3306',
    user: 'dbuser',
    password: 'password',
    database: 'mydb',
    connectionLimit: 10           // Connection pool size
};

let pool = mysql.createPool(options);

pool.getConnection = util.promisify(pool.getConnection);
pool.query = util.promisify(pool.query);
pool.end = util.promisify(pool.end);

module.exports = pool;