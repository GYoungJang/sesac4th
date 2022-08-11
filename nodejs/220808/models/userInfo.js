const mysql = require('mysql');
const cnn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: 'Ebxnfl12!',
    database: 'userinfo' // 하나의 db만 연결가능..
});

exports.insert = (id, pw, name, gender, birthday, age, cb) => {
    let sql = `INSERT INTO user(id, pw, name, gender, birthday, age) 
                VALUES('${id}', '${pw}', '${name}', '${gender}', '${birthday}', ${age})`;
    cnn.query( sql, (err, rows) => {
        if (err) throw err;
        console.log('rows :', rows);
        cb(rows);
    });
}

exports.show = (id, cb) => {
    cnn.query(`SELECT * FROM user WHERE id = '${id}';`, (err, rows) => {
        if (err) throw err;
        // console.log('row : ', rows);
        cb(rows);
    });
}
exports.select = (id, pw, cb) => {
    cnn.query(`SELECT * FROM user WHERE id = '${id}' AND pw = '${pw}';`, (err, rows) => {
        if (err) throw err;
        // console.log('row : ', rows);
        cb(rows);
    });
}

exports.edit = (cb) => {
    cnn.query('SELECT * FROM visitor', (err, rows) => {
        if (err) throw err;
        console.log(rows);
        cb(rows);
    });
}
exports.delete = (cb) => {
    cnn.query('SELECT * FROM visitor', (err, rows) => {
        if (err) throw err;
        console.log(rows);
        cb(rows);
    });
}

