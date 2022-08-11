//const Visitor = require("../model/Visitor");
const models = require('../model');
// models => model/index.js 에서의 db

exports.get_visitors = (req,res) => {
    // model/Visitor.js에서의 model
    models.Visitor.findAll() // sequelize 문법 findAll => SELECT * FROM visitor;
    .then((result) => {
        //console.log('result : ', result);
        // console.log('index');
        // console.log(result[0]);
        // console.log(result[0].id);
        res.render('index', {data: result});
    });


    // Visitor.get_visitors(function( result ){
    //     console.log( "result : ", result );
    //     console.log( "index" );
    //     res.render("index", { data: result });
    // });
}

exports.post_comment = (req,res) => {
    
    //console.log( req.body );

    // Visitor.insert( req.body.name, req.body.comment, function( result ){
    //     res.send({ id: result });
    // } );
    let object = {
        name: req.body.name,
        comment: req.body.comment
    }
    // create() => insert into visitor
    // create({name:'홍', comment: '길동'})
    // => insert into visitor(name, comment) values('홍', '길동');
    models.Visitor.create(object)
    .then((result) => {
        console.log(result);
        res.send({id:result.id});
    });
}

exports.get_visitor = (req,res) => {
    // Visitor.get_visitor( req.query.id, function(result) {
    //     console.log( "result : ", result );
    //     res.send( { result : result[0] } );
    // })

    // select * from visitor where id = req.query.id limit 1 
    models.Visitor.findOne({
        where: {id: req.query.id}
    }).then((result) => {
        console.log(result);
        res.send({result : result});
    })
}

exports.patch_comment = (req,res) => {
    // Visitor.update( req.body, function(result){
    //     console.log( result );
    //     res.send( "수정 성공" );
    // });

    // 수정할 객체와 조건을 보냄
    let newObj = {
        name: req.body.name,
        comment: req.body.comment
    }
    // update visitor set name = req.body.id, comment = req.body.comment where id = req.body.id;
    models.Visitor.update(newObj, {where: {id: req.body.id}})
    .then((result) => {
        console.log(result);
        res.send('수정성공');
    })
}

exports.delete_comment = (req,res) => {
    // Visitor.delete( req.body.id, function(result){
    //     console.log( result );
    //     res.send( "삭제 성공" );
    // });
    models.Visitor.destroy({where: {id: req.body.id}})
    .then((result) => {
        console.log(result);
        res.send('삭제 성공');
    })
}