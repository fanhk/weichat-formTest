var http = require("http");

var server = http.createServer(function (req,res) {
    //console.log(req)
    var str = '';
	req.on('data',function(data){
		console.log('第${i++}次接到数据');
		str+=data;
        var obj = JSON.parse(str.toString());
        console.log(obj['satisify'])
        res.end("success");
    });
    //console.log(str)
});
server.listen(2100);