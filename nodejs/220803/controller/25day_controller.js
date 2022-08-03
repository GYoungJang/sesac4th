const User = require('../model/user'); //모델 모듈 갖고옴.......... //컨트롤러는 뷰, 모델과 상호작용.. 

exports.get_root = (req, res) => {
    res.render('index')
    //res.render('home');
} 
exports.get_home = (req, res) => {
    res.send('home')
    //res.render('home');
} 
exports.get_signup = (req, res) => {
    res.send('signup')
    //res.render('signup');
} 
// exports.get_login = (req, res) => {
//     res.send('login')
//     //res.render('login');
// }

exports.register = (req, res) => {
    res.render('register');
}

exports.post_register = (req, res) => {
    User.post_user(req.body);
    res.send(req.body);
}

exports.login = (req, res) => {
    res.render('login');
}

exports.post_login = async (req, res) => {
    let data = await User.get_user();
    let info = data.toString().split('\n');
    console.log(info);

    //console.log(info[1].split('//'));
    // {'zzb', 'bbb', 'zzz', 13}
    // for (let i = 0; i < info.length; i++){
        
    // }
    
    // if (info[0] !== req.body.id) {
    //     res.send('아이디 다름');
    // }
    // else if (info[1] !== req.body.pw) {
    //     res.send('비밀번호가 다름');
    // }
    // else {
    //     res.send('로그인 성공');
    // }

    //console.log(data);
}

