const models = require('../model/index1');

exports.get_home =  (req, res) => {
  res.render('home.ejs')
}

exports.get_signup =  (req, res) => {
  res.render('signup.ejs')
}

exports.get_login =  (req, res) => {
  res.render('login.ejs')
}

exports.post_signup =  (req, res) => {
  let object = {
        id : req.body.id,
        pw : req.body.pw,
        name: req.body.name,
        gender: req.body.gender,
        birthday: req.body.birthday,
        age: req.body.age,
    }
  models.User.create(object)
  .then((result) => {
    console.log(result);
    //res.render({result: result});
  })
}
exports.post_login =  (req, res) => {
  models.User.findOne({
    where:{id: req.body.id, pw: req.body.pw}
  }).then((result) => {
    console.log(result);
    if (result){
      res.send(true);
    } else {
      res.send(false);
    }
  })
  //res.render('login.ejs')
}
exports.post_userinfo = (req, res) => {
  models.User.findOne({
    where:{id: req.body.id}
  }).then((result) => {
    console.log('a : ', result.dataValues)
    res.render('info.ejs',{data: [result.dataValues]});
  })
}
// exports.post_userinfo = (req, res) => {
//   models.User.findOne({
//     where:{id: req.body.id}
//   }).then((result) => {
//     console.log('a : ', result.dataValues)
//     res.render('info.ejs',{data: [result.dataValues]});
//   })
// }

exports.patch_userinfo = (req, res) => {
  console.log('adsa :', req.body);
  let info = {
    id : req.body.id,
    pw : req.body.pw,
    name : req.body.name,
    gender : req.body.gender,
    birthday : req.body.birthday,
    age : req.body.age
  }
  models.User.update(info, {where: {id: req.body.id}})
    .then((result) => {
        console.log(result);
        res.send('수정성공');
    })
}

exports.get_userinfo = (req, res) => {
  res.render('info.ejs');
}

exports.delete_userinfo = (req, res) => {
  models.User.destroy({where: {id: req.body.id}})
    .then((result) => {
        console.log(result);
        res.send('삭제 성공');
    })
}
