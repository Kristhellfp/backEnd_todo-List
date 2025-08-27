const mysql2 = require('mysql2');

const pool = mysql2.createPool({
  host: 'brbhzzmbnvqrqmv5vybw-mysql.services.clever-cloud.com',
  user: 'ukbngf08x47gdtce',
  password: 'nsAzFR06pvzv5P3ymIK9',
  database: 'brbhzzmbnvqrqmv5vybw',
});

module.exports = pool.promise();