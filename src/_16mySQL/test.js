const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'world',
});

connection.connect();

const sql = 'SELECT * FROM websites';

connection.query(sql, (error, results, fields) => {
  if (error) {
    console.log('[SELECT ERROR] - ', error.message);
    return;
  }
  console.log('--------------------------SELECT----------------------------');
  console.log(results);
  console.log(
    '------------------------------------------------------------\n\n'
  );
});

connection.end();
