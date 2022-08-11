const userInfo = require('../models/userInfo')


exports.get_signup = (req, res) => {
    res.render('signup.ejs');
}
    

exports.post_signup = (req, res) => {
    // console.log(req.body);
    userInfo.insert(req.body.id, req.body.pw, req.body.name, req.body.gender, 
        req.body.birthday, req.body.age, function(result) {
            res.send({result: result});
        })
}

exports.get_login = (req, res) => {
    res.render('login.ejs');
}
exports.post_login = (req, res) => {
    //console.log(req.body);
    userInfo.select(req.body.id, req.body.pw, function(result) {
        console.log('result : ',result);
        // console.log('err : ', err);
        console.log('result[0] : ',result[0]);
        // console.log('result[0].id : ',result[0].id);
        if (result[0]) {
            res.send(true);  // 이거 어떻게 되는 건지 질문하기
        }
        else res.send(false);
        //res.send({result: result});
    });
}

exports.post_info = (req, res) => {
    console.log(req.body);
    userInfo.show(req.body.id, function(result) {
        console.log("a : ",result);
        res.render('info.ejs', {data : result});
    })
}

    
exports.patch_info = () => {

}
exports.delete_info = () => {

}
