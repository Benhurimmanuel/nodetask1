const fs = require("fs");
const express = require("express");
const app = express();

app.listen(8080, function () {
  console.log("running in webserver");
});

app.get("/", function (req, res) {
  fs.readdir("../../", { withFileTypes: true }, function (err, files) {
    if (err) throw err;
    let data = [];
    files.forEach((element) => {
      if (element.isDirectory()) {
        data.push({
          name: element.name,
          isFolder: true,
        });
      } else {
        data.push({
          name: element.name,
          isFolder: false,
        });
      }
    });
    res.json({ data });
  });
});

let datestamp = new Date();
let date = datestamp.getDate();
let month = datestamp.getMonth();
let year = datestamp.getFullYear();
let hr = datestamp.getHours();
let min = datestamp.getMinutes();
let timeStr = `${hr} hrs ${min} minutes`;
let dateStr = `${date}.${month}.${year}`;

app.get("/create", function (req, res) {
  fs.writeFile(`${dateStr}.txt`, timeStr, function (err) {
    if (err) throw err;
    console.log("file created by node");
  });
});
