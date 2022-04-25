const Pool = require('pg').Pool

const pool = new Pool({
    user:"postgres",
    password:"kejengemas99",
    host:"localhost",
    port:5432,
    database:"myecommerce3"
})
module.exports = pool