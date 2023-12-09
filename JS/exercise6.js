/**
 * Exercise 6 - Spelling Out Numbers: Converts an input integer from 0 to 999 into English word format.
 * @param {number} num - Input integer from 0 to 999.
 * @returns {String} - English word format of the input integer.
 */
function exercise6(num) {
    let stringNum = num.toString(); // Converts the number to a string to enable indexing.
    let numberInWords = "";
    // Object literal to store number:string pairs for multiples of hundred
    const hundredsList = {
        1: "a hundred",
        2: "two hundred",
        3: "three hundred",
        4: "four hundred",
        5: "five hundred",
        6: "six hundred",
        7: "seven hundred",
        8: "eight hundred",
        9: "nine hundred",
    };
    // Object literal to store number:string pairs for multiples of ten
    const tensList = {
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety",
    };
    // Object literal to store number:string pairs for the teens (10 - 19)
    const teensList = {
        0: "ten",
        1: "eleven",
        2: "twelve",
        3: "thirteen",
        4: "fourteen",
        5: "fifteen",
        6: "sixteen",
        7: "seventeen",
        8: "eighteen",
        9: "nineteen",
    };

    // Object literal to store number:string pairs for single digit numbers (1-9)
    const onesList = {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
    };

    // If the number is 0, returns "zero".
    if (num === 0) {
        numberInWords = "zero";
        return numberInWords;
    }

    // Number is 3 digits long.
    if (stringNum.length === 3) {
        numberInWords += hundredsList[parseInt(stringNum[0])];
        if (stringNum[1] !== "0" || stringNum[2] !== "0") {
            numberInWords += " and "; // Concatenates the word " and " if number is not a multiple of 100, i.e. 200.
        } else if (stringNum[1] == "0" && stringNum[2] == "0") {
            // If number is a multiple of 100, then it will be returned.
            return numberInWords;
        }
    }

    // Number is two or more digits long, and if the second digit is 1 (teen).
    if (stringNum.length >= 2 && stringNum[stringNum.length - 2] == "1") {
        numberInWords += teensList[parseInt(stringNum[stringNum.length - 1])]; // Concatenates the number pair from `teensList`.
        return numberInWords;
    }

    // Number is two or more digits long, and if the second digit is not 0.
    if (stringNum.length >= 2 && stringNum[stringNum.length - 2] !== "0") {
        numberInWords += tensList[parseInt(stringNum[stringNum.length - 2])]; // Concatenates the number pair from `tensList`.
        if (stringNum[stringNum.length - 1] !== "0") {
            // If last digit isn't 0, a hyphen is concatenated to `stringNum`.
            numberInWords += "-";
        }
    }

    // Final digit is not 0.
    if (stringNum.length >= 1 && stringNum[stringNum.length - 1] !== "0") {
        numberInWords += onesList[parseInt(stringNum[stringNum.length - 1])]; // Concatenates the number pair from `onesList`.
    }

    return numberInWords;
}
