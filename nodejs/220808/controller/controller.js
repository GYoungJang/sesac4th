const userInfo = require('../models/userInfo')




exports.get_signup = (req, res) => {
    res.render('signup.ejs');
}
    

exports.post_signup = (req, res) => {
    console.log(req.body);
    userInfo.insert(req.body.id, req.body.pw, req.body.name, req.body.gender, req.body.birthday, req.body.age, function(result) {
            res.send({result: result});
        })
}

exports.get_login = (req, res) => {
    res.render('login.ejs');
}
exports.post_login = () => {
    

}
exports.patch_info = () => {

}
exports.delete_info = () => {

}
