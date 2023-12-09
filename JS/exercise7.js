/**
 * Exercise 7 - No Functions without Comments: Reads a user provided text/source file and returns a list of the functions within that don't have comments immediately preceding them.
 * @param {String} filename - Path and/or filename of the file to be read.
 * @returns {Array} - Non-commented function names.
 */

function exercise7(filename) {
    let fs = require("fs"); // Importing the 'fs' module to work with the file system.
    let fileContent = fs.readFileSync(filename, "utf-8"); // readFileSync function reads and stores text in fileContent variable.
    let fileLines = fileContent.split("\n"); // Splits text into an array of separate lines.
    let functionNames = []; // Empty array to store function names.

    for (let i = 0; i < fileLines.length; i++) {
        // Function is on the first line.
        if (i === 0 && fileLines[i].startsWith("function")) {
            // Splits the function name between the ' ' and '(' and adds it to an array.
            functionNames.push(fileLines[i].split(" ")[1].split("(")[0]);
        }
        // Function isn't on the first line and not preceded with "//" on the previous line.
        if (
            i > 0 &&
            fileLines[i].startsWith("function") &&
            !fileLines[i - 1].startsWith("//")
        ) {
            functionNames.push(fileLines[i].split(" ")[1].split("(")[0]);
        }
    }
    return functionNames;
}
