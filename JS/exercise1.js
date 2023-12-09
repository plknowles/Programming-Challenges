/**
 * Exercise 1 - Smallest Fraction Terms: Reduces a fraction by finding the greatest common divisor (GCD) and dividing the numerator and denominator by it.
 * @param {number} num - The numerator of the fraction. Must be a non-zero integer.
 * @param {number} den - The denominator of the fraction. Must be a non-zero integer.
 * @returns {number[]} - Reduced numerator and denominator.
 */

function exercise1(num, den) {
    let greatestCommonDenominator = 1; // GCD default value of 1 as all numbers are divisible by 1

    // Determines the min value between numerator and denominator
    let minValue;
    if (num < den) {
        minValue = num;
    } else {
        minValue = den;
    }

    // Determines the GCD by traversing through all numbers from 2 to the minValue to find common divisors
    for (let test = 2; test <= minValue; test++) {
        if (num % test == 0 && den % test == 0) {
            greatestCommonDenominator = test;
        }
    }

    // Returns both reduced numerator and denominator by dividing by the GCD
    return [num / greatestCommonDenominator, den / greatestCommonDenominator];
}
