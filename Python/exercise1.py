def exercise1(num, den):
    """
    Exercise 1 - Smallest Fraction Terms:
    Reduces a fraction by finding the greatest common divisor (GCD) and dividing the numerator and denominator by it.

    Parameters:
    - num (int): The numerator of the fraction. Must be a non-zero integer.
    - den (int): The denominator of the fraction. Must be a non-zero integer.

    Returns:
    - tuple: Reduced numerator and denominator.
    """

    greatest_common_denominator = 1  # GCD default value of 1 as all numbers are divisible by 1
    min_value = min(num, den)

    # Determines the GCD by traversing through all numbers from 2 to the minValue to find common divisors
    for test in range(2, min_value + 1):
        if num % test == 0 and den % test == 0:
            greatest_common_denominator = test

    return num // greatest_common_denominator, den // greatest_common_denominator  # Floor division to return integers.
