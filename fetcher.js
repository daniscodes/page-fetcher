const request = require('request');
const fs = require('fs');

if (process.argv.length === 4) {
  const domain = process.argv[2];
  const path = process.argv[3];

  request(domain, function (error, response, body) {
    console.error('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.

    if (!error) {
      fs.writeFile(path, body, (err2) => {
        if (err2) {
          console.log(err2);
          return;
        } else {
          console.log("Downloaded and saved " + body.length + " to " + path)
          console.log(body)
        }
      })
    }
  });
}