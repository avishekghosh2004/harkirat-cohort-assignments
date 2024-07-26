const fs = require("fs");
let a = 0;
function expensiveOperation() {
  for (let i = 0; i < 10; i++) {
    a += 1;
  }
  console.log("expensive operation completed");
}

fs.readFile("1-counter.md", "utf-8", function (err, data) {
  if (err) {
    console.log("Error", err);
  }
  console.log(data);
});

console.log("Starting the expensive operation");

expensiveOperation(100000);

console.log("Ending the expensive operation");
