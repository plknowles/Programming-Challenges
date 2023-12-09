/**
 * Exercise 5 - Morse Code Encoder: Takes an input message and converts the letters and numbers to morse code (ignoring any other characters). Spaces are added between morse code.
 * @param {String} message - Message to be converted to morse code.
 * @returns {String} - Converted morse code string message.
 */

function exercise5(message) {
    // Character-morse code pairs stored in an object literal.
    const morseCodeList = {
        A: ".-",
        B: "-...",
        C: "-.-.",
        D: "-..",
        E: ".",
        F: "..-.",
        G: "--.",
        H: "....",
        I: "..",
        J: ".---",
        K: "-.-",
        L: ".-..",
        M: "--",
        N: "-.",
        O: "---",
        P: ".--.",
        Q: "--.-",
        R: ".-.",
        S: "...",
        T: "-",
        U: "..-",
        V: "...-",
        W: ".--",
        X: "-..-",
        Y: "-.--",
        Z: "--..",
        0: "-----",
        1: ".----",
        2: "..---",
        3: "...--",
        4: "....-",
        5: ".....",
        6: "-....",
        7: "--...",
        8: "---..",
        9: "----.",
    };
    let uppercaseMessage = message.toUpperCase();
    let morseCodeMessage = ""; // Store converted message.

    for (let i = 0; i < uppercaseMessage.length; i++) {
        if (uppercaseMessage[i] in morseCodeList) {
            // Checks if the current index character of uppercaseMessage is contained within morseCodeList (must be a number/letter).
            morseCodeMessage += morseCodeList[uppercaseMessage[i]]; // Concatenates the converted morse code character to morseCodeMessage variable.
            if (
                i < uppercaseMessage.length - 1 &&
                uppercaseMessage[i + 1] in morseCodeList
            ) {
                // Concatenates a space between morse code characters if char is not at the end of the string.
                morseCodeMessage += " ";
            }
        }
        if (uppercaseMessage[i] === " ") {
            morseCodeMessage += " ";
        }
    }
    return morseCodeMessage;
}
