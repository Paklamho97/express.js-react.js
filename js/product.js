const db = require('../config/db');

async function getAll() {
    let sql = `SELECT * FROM products`;

    let results = await db.query(sql);
    return results;
}

module.exports = {
    getAll
}