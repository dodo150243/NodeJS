let http = require('http');
 let dt = require('./myfirstmodule');
let url = require('url');
let fs =  require('fs');

http.createServer(function (req, res) {
   // res.writeHead(200, { 'Content-Type': 'text/html' });
    //res.write('The date and  time are currenly : ' + dt.myDateTime());
    //res.end('Hello');
    // let q = url.parse(req.url, true).query;
    // let txt = q.year + " " + q.month;
    // res.end(txt);

    fs.readFile('index.html', function(err, data){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    })
}).listen(8000);

fs.writeFile('mynewfile3.txt', '5555', function(err){
    if (err) throw err;
    console.log('Saved');
})