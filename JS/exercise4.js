/**
 * Exercise 4 - English to Pig Latin Translator: Converts a word to pig latin.
 * If the word begins with a consonant, all letters at the beginning of the word, up to the first vowel, are removed and then added to the end of the word, followed by `ay'.
 * If the word begins with a vowel, then `way' is added to the end of the word.
 * Words starting in uppercase will return the uppercase start. The word may contain a punctuation mark at the end.
 * @param {String} word - String word to be converted to pig latin.
 * @returns {String} - The word in pig latin form.
 */

function exercise4(word) {
    const consonants = [
        "b",
        "c",
        "d",
        "f",
        "g",
        "h",
        "j",
        "k",
        "l",
        "m",
        "n",
        "p",
        "q",
        "r",
        "s",
        "t",
        "v",
        "w",
        "x",
        "y",
        "z",
    ];
    const vowels = ["a", "e", "i", "o", "u"];
    let punctuationMark = "";

    // Handle uppercase
    let isFirstLetterUpperCase =
        word[0] === word[0].toUpperCase() && word[0] !== word[0].toLowerCase();

    let lowerCaseWord = word.toLowerCase();

    // Checks last character is punctuation mark (not a letter), then removes the punctuation mark.
    if (
        !consonants.includes(lowerCaseWord[lowerCaseWord.length - 1]) &&
        !vowels.includes(lowerCaseWord[lowerCaseWord.length - 1])
    ) {
        punctuationMark = lowerCaseWord[lowerCaseWord.length - 1];
        lowerCaseWord = lowerCaseWord.slice(0, lowerCaseWord.length - 1);
    }

    let pigLatinWord = "";
    if (vowels.includes(lowerCaseWord[0])) {
        pigLatinWord = lowerCaseWord + "way";
    } else if (consonants.includes(lowerCaseWord[0])) {
        // Finds the index of the first vowel
        let firstvowelIndex;
        for (let letter of lowerCaseWord) {
            if (vowels.includes(letter)) {
                firstvowelIndex = lowerCaseWord.indexOf(letter);
                break;
            }
        }
        if (firstvowelIndex === undefined) {
            // When no vowel is present, the word remains the same.
            pigLatinWord = lowerCaseWord;
        } else {
            // First letter up to the first vowel are moved to the end of the word.
            pigLatinWord =
                lowerCaseWord.slice(firstvowelIndex) +
                lowerCaseWord.slice(0, firstvowelIndex);
        }
        pigLatinWord += "ay";
    }
    // Capitalise first letter if a capital was originally present.
    if (isFirstLetterUpperCase) {
        pigLatinWord = pigLatinWord[0].toUpperCase() + pigLatinWord.slice(1);
    }
    pigLatinWord += punctuationMark; // Adds punctuation mark if any.
    return pigLatinWord;
}
