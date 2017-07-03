var request = require('request');
var fs = require('fs');

var options = {
  url: 'https://sytantris.github.io/http-examples/future.jpg'
};

console.log('Downloading Image...');
request.get(options)
       .on('error', function (err) {
         throw err;
       })
       .on('response', function (response) {
         console.log('Response Status Code: ', response.statusCode);
       })
       .on('end', function () {
        console.log('Download complete.');
       })
       .pipe(fs.createWriteStream('./future.jpg'));