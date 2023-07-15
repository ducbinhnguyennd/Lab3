var http = require('http');
var fs = require('fs');
// var formidable = require('formidable');

http.createServer(function (req, res) {
  if (req.url == '/') {
    //readFileAndResponse(res, 'home.html');

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
    // const abc = require('./home.htm')

  }
   else if (req.url == '/album') {
    readFileAndResponse(res, './json/album.json');
  } else if (req.url == '/taofile') {
    fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
      if (err) throw err;
      console.log('Saved!');
      res.write('Da tao file');
      res.end();
    });

  } else if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload[0].filepath;
      // thay newpath bang duong dan project cua ban


      var newpath = '/Users/BinhPC/SeverAndroid/bai56/' + files.filetoupload[0].originalFilename; 
      //C:\Users\BinhPC\SeverAndroid\bai56
      // doi ten file up len o day

      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();
      });
    });

  } else if(req.url ==='/pageb'){
    readFileAndResponse(res,'./page-c.htm')
  }else if(req.url ==='/bai2'){
    readFileAndResponse(res,'./bai2.htm')
  }
  else {
    res.write('404 - Not found!');
    return res.end();
  }

}).listen(8080);

function readFileAndResponse(res, fileUrl) {
  fs.readFile(fileUrl, function (err, data) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    return res.end();
  });
}