const fs = require('fs').promises;
const readline = require('readline');

exports.post_user = function (data) {
    //console.log(data);
    // fs.writeFile('./model/signup.txt', `${data.id}//${data.pw}//${data.name}//${data.age}`);
    fs.appendFile('./model/signup.txt', `${data.id}//${data.pw}//${data.name}//${data.age}\n`)
}

exports.get_user = async function () {

    let buffer = await fs.readFile("./model/signup.txt");
    return buffer.toString().split('\n');
}
