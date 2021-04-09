const fs = require("fs");
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const path = require("path");

// console.log(path.extname("asd.html"))

app.listen(8080, function () {
  console.log("running in webserver");
});

app.get("/", function (req, res) {
  fs.readdir("../../Guvi Practice/node-express", { withFileTypes: true }, function (err, files) {
    if (err) throw err;
    let data = [];
    files.forEach((element) => {
      if (element.isDirectory()) {
        data.push({
          name: element.name,
          isFolder: true,
          icon:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/OneDrive_Folder_Icon.svg/512px-OneDrive_Folder_Icon.svg.png",
        });
      } else {
        data.push({
          name: element.name,
          isFolder: false,
          // ext:path.extname(element.name)
          icon:
            "https://cdn3.iconfinder.com/data/icons/brands-applications/512/File-512.png",
        });
      }
    });
    res.json(data);
  });
});

let datestamp = new Date();
let date = datestamp.getDate();
let month = datestamp.getMonth();
let year = datestamp.getFullYear();
let hr = datestamp.getHours();
let min = datestamp.getMinutes();
let timeStr = `${hr}:${min}`;
let dateStr = `${date}.${month}.${year}`;

app.get("/create", function (req, res) {
  fs.writeFile(`${timeStr}.txt`,dateStr, function (err) {
    if (err) throw err;
    console.log("file created by node");
  });
});
