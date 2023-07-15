var http = require('http');
var fs = require('fs');
// var formidable = require('formidable');
var datathbencanh = 'Nguyễn Hoàng Lâm - 2006';
http.createServer(function (req, res) {
  if(req.url ==='/bai21'){
    readFileAndResponse(res,'./bai2.htm')
  }else if (req.url == '/bai22') {
    fs.writeFile('thongtin.txt', 'Nguyễn Đức Bình - Ph22567 - 0333252262', function (err) {
      if (err) throw err;
      console.log('Saved!');
      res.write('Ghi thanh cong');
      res.end();
    });

  }else if (req.url == '/bai31') {
    fs.appendFile('thongtin.txt', datathbencanh, function (err) {
      if (err) throw err;
      console.log('Saved!');
      res.write('Thêm thành công');
      res.end();
    });

  }
//   else if (req.url == '/bai32') {
//     fs.appendFile('thongtin.txt', datathbencanh, function (err) {
//       if (err) throw err;
//       console.log('Saved!');
//       res.write('Thêm thành công');
//       res.end();
//     });

//   }
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