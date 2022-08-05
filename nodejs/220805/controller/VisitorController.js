const Visitor =  require('../model/Visitor');

exports.get_visitor = (req, res) => {
    Visitor.get_visitors(function (result) {
        console.log('result : ', result);
        console.log('index');
        res.render('index', {data: result}); // index.ejs에 result값을 data 키로 보냄
    });
} 

exports.post_comment = (req, res) => {
    console.log(req.body);
    Visitor.insert(req.body.name, req.body.comment, function(result) {
        res.send({id: result});
        
    });
}
