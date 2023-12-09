/**
 * Exercise 2 - Magical Dates: Finds magic dates where the date multiplied by the month is equal to the last two digits of the year.
 * @param {number} day - Day of the month. Must be a positive non-zero integer in the range of 1 to 31.
 * @param {number} month - Numerical month of the year. Must be a positive non-zero integer in the range of 1 to 12.
 * @param {number} year - Year number. Must be a positive integer.
 * @returns {boolean} - true if the date is a magic date, else false.
 */

function exercise2(day, month, year) {
    return day * month === year % 100; // Last two digits of the year are identified by modulo 100.
}
