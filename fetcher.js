const fs = require("fs");
const request = require("request");
let arg = process.argv;
let url = arg[2];
let filePath = arg[3];

const fetcher = function (url, filePath) {
  request(url, (error, response, body) => {
    if (error) {
      console.log("error:", error);
      return;
    }
    console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
    fs.writeFile(filePath, body, (err) => {
      if (err) {
        console.error(err);
      }
      console.log(`Downloaded and saved ${body.length} bytes to ${filePath}`);
    });
  });
};

fetcher(url, filePath);
