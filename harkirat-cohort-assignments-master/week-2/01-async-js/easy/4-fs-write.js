const fs = require("fs");
fs.writeFile("1-counter.md", "Hello world!", function (err) {
  if (err) {
    console.log("Error", err);
  }
});

fs.readFile("1-counter.md", "utf-8", function (err, data) {
  if (err) {
    console.log("Error", err);
  }
  console.log(data);
});
