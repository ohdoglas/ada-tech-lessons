const path = require("node:path");
const fs = require('node:fs');

const filePath = path.join(process.cwd(), 'file.txt');
const fileOutPath = path.join(process.cwd(), '../lessonTwo', 'newFile.txt');
// console.log(filePath);

fs.readFile(filePath, {}, (erro, data) => {
    if (erro) {
        console.log(`Error reading the file path: ${filePath}`);
        return
    } 

    const text = data.toString();
    const lines = text.split('\n');

    const adjustedLines = lines.map((line, index, lineArray) => `${index + 1} - ${line}`);

    fs.writeFile(fileOutPath, adjustedLines.join('\n'), {}, (erro) => {
        if (erro) {
            console.log(`Error reading the file path: ${fileOutPath}`);
            return
        }
    });
    // console.log(data.toString());
});