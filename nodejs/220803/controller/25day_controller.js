const User = require('../model/user_data'); //모델 모듈 갖고옴.......... //컨트롤러는 뷰, 모델과 상호작용.. 

exports.get_signup = (req, res) => {
    res.render('signup')
} 

exports.post_signup = (req, res) => {
    User.post_user(req.body);
    res.render('login');
}

exports.get_login = (req, res) => {
    res.render('login');
}

exports.post_login = async (req, res) => {
    const {id, pw} = req.body;
    console.log(id, pw);
    console.log('--------------');
    console.log(req.body);
    console.log('--------------');
    let login_data = await User.get_user();
    console.log(login_data);
    console.log('--------------');
    let log_data = login_data.split('\n');
    console.log(log_data);
    console.log('--------------');
    
    for (let i = 0; i < log_data.length; i++) {
        let id_pw = log_data[i].split('//',2);
        console.log(id_pw);
        if (id_pw[0] === id && id_pw[1] === pw) {
            res.render('profile');
            //res.send('로그인 성공');
            break;
        }
        if (i === (log_data.length)-1){
            res.send('로그인 실패');
        }
        
    }
}
//let i = 0;
// while (i++ < info.length){
//     let arr = info[i].split('//',2);
//     console.log(arr);
//     if (info[0] === id && info[1] === pw) {
//         res.send('로그인 성공');
//         break;
//     }
//     else {
//         res.send('로그인 실패');
//     }
// }
        
exports.get_root = (req, res) => {
    res.render('index')
    //res.render('home');
} 
exports.get_home = (req, res) => {
    res.send('home')
    //res.render('home');
} 
// exports.get_login = (req, res) => {
    //     res.send('login')
    //     //res.render('login');
// }

// exports.get_signup = (req, res) => {
//     res.render('register');
// }


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


