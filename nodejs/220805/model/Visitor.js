const mysql = require('mysql');

const cnn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: 'Ebxnfl12!',
    database: 'sesac' // 하나의 db만 연결가능..
});

exports.get_visitors = (cb) => {
    cnn.query('SELECT * FROM visitor', (err, rows) => {
        if (err) throw err;
        console.log(rows);
        cb(rows);
    });
}

exports.insert = (name, comment, cb) => {
    let sql = "INSERT INTO visitor(name, comment) VALUES('" + name + "', '" + comment +"')";
    cnn.query( sql, (err, rows) => {
        if (err) throw err;
        console.log(rows);
        cb(rows.insertId);
    })
}



