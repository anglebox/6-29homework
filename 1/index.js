/**
 * Created by Administrator on 2017/6/29.
 */
var http=require('http');
var fs=require('fs');
http.createServer(function (req,res) {
    var url1=url;
    switch (url1){
        case "/index1":
            fs.readFile('index1.html','utf-8',function (err,data) {
                if(err){
                    console.log(err)
                }else{
                    res.writeHead(200,{'content-type':'text/html;charset=utf8'});
                    res.end(data)
                }
            })
            break;
        case "/index2":
            fs.readFile('index2.html','utf-8',function (err,data) {
                if(err){
                    console.log(err)
                }else{
                    res.writeHead(200,{'content-type':'text/html;charset=utf8'});
                    res.end(data)
                }
            })
            break;
        case "/index3":
            fs.readFile('index3.html','utf-8',function (err,data) {
                if(err){
                    console.log(err)
                }else{
                    res.writeHead(200,{'content-type':'text/html;charset=utf8'});
                    res.end(data)
                }
            })
            break;
        case '/index1.css':
            fs.readFile('index.css','utf-8',function (err,data) {
                if(err){
                    console.log(err)
                }else{
                    res.writeHead(200,{'content-type':'text/css;charset=utf8'});
                    res.end(data)
                }
            })
            break;
        case '/index.js':
            fs.readFile('index.js','utf-8',function (err,data) {
                if(err){
                    console.log(err)
                }else{
                    res.writeHead(200,{'content-type':'text/javascript;charset=utf8'});
                    res.end(data)
                }
            })
            break;
        case '/3.png':
            fs.readFile('public/3.png',function (err,data) {
                if(err){
                    console.log(err)
                }else{
                    res.writeHead(200,{'content-type':'text/png;charset=utf8'});
                    res.end(data)
                }
            })
            break;
        default:
            break;
    }
}).listen(3000)