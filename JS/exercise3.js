/**
 * Exercise 3 - All Sublists: Returns all the possible sublists within a input Array list.
 * @param {Array} l - The input list which sublists are extracted from.
 * @returns {Array} - An array list containing all possible sublists.
 */

function exercise3(l) {
    let sublists = [[]];
    // Outer for loop iterates through the Array
    for (let i = 0; i < l.length; i++) {
        for (let j = i; j < l.length; j++) {
            // Inner for loop iterates the end position index from current position to the end
            sublists.push(l.slice(i, j + 1)); // Slices the list and adds them to the sublists array
        }
    }
    return sublists;
}
