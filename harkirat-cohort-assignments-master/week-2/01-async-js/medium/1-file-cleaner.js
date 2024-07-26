const fs = require("fs/promises");

const readAndWriteData = async function readFile() {
  const data = await fs.readFile("1-file-cleaner.md");

  const writData = await fs.writeFile(
    "1-file-cleaner.md",
    data.toString().replace(/\s+/g, " ")
  );
};

readAndWriteData();
