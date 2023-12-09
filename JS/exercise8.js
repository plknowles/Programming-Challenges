/**
 * Exercise 8 - Justify any Text: Reads user provided text and justifies the text based on a maximum character length argument.
 * @param {String} filename - Path and/or filename of text file to be read.
 * @param {number} length - Maximum length of characters on a line. Must be a positive integer.
 * @returns {Array} - Array of lines filled as much text as possible without exceeding the character limit.
 */
function exercise8(filename, length) {
    let fs = require("fs"); // Importing the 'fs' module to work with the file system.
    let fileContent = fs.readFileSync(filename, "utf-8"); // readFileSync function reads and stores text in fileContent variable.
    let wordsArray = fileContent.trim().replace(/\s/g, " ").split(/(\s)/); // Removes leading/trailing whitespaces, replaces all whitespaces with spaces using regexp, and splits whitespaces (spaces in this case) while retaining the whitespace using regexp.
    let textArray = [];
    let tempLine = "";

    for (let i = 0; i < wordsArray.length; i++) {
        // Combined length of current line and current word is less than or equal to length argument.
        if (wordsArray[i].length + tempLine.length <= length) {
            tempLine += wordsArray[i]; // Concatenates new word to `tempLine`.
        } else {
            textArray.push(tempLine.trim()); // Trims any trailing spaces and pushes to array.
            tempLine = ""; // Clears `tempLine` after it is pushed.
            if (
                wordsArray[i].length + tempLine.length <= length &&
                wordsArray[i] != " "
            ) {
                tempLine += wordsArray[i];
            }
        }
    }
    textArray.push(tempLine.trim()); // Trims and pushes the last word to the textArray after the loop finishes.

    return textArray;
}
