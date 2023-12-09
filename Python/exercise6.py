def exercise6(num):
    """
    Exercise 6 - Spelling Out Numbers:
    Converts an input integer from 0 to 999 into English word format.

    Parameters:
    - num (int): Input integer from 0 to 999.

    Returns:
    - String: English word format of the input integer.
    """
    string_num = str(num)  # Converts the number to a string to enable indexing.
    number_in_words = ""
    # Dictionary to store number:string pairs for multiples of hundred
    hundreds_list = {
        '1': "a hundred",
        '2': "two hundred",
        '3': "three hundred",
        '4': "four hundred",
        '5': "five hundred",
        '6': "six hundred",
        '7': "seven hundred",
        '8': "eight hundred",
        '9': "nine hundred",
    }
    # Dictionary to store number:string pairs for multiples of ten
    tens_list = {
        '2': "twenty",
        '3': "thirty",
        '4': "forty",
        '5': "fifty",
        '6': "sixty",
        '7': "seventy",
        '8': "eighty",
        '9': "ninety",
    }
    # Dictionary to store number:string pairs for the teens (10 - 19)
    teens_list = {
        '0': "ten",
        '1': "eleven",
        '2': "twelve",
        '3': "thirteen",
        '4': "fourteen",
        '5': "fifteen",
        '6': "sixteen",
        '7': "seventeen",
        '8': "eighteen",
        '9': "nineteen",
    }
    # Dictionary to store number:string pairs for single digit numbers (1-9)
    ones_list = {
        '1': "one",
        '2': "two",
        '3': "three",
        '4': "four",
        '5': "five",
        '6': "six",
        '7': "seven",
        '8': "eight",
        '9': "nine",
    }

    # If the number is 0, returns "zero".
    if num == 0:
        number_in_words = "zero"
        return number_in_words

    # Number is 3 digits long.
    if len(string_num) == 3:
        number_in_words += hundreds_list[string_num[0]]
        if string_num[1] != '0' or string_num[2] != '0':
            number_in_words += " and "  # Concatenates the word " and " if number is not a multiple of 100, i.e. 200.
        elif string_num[1] == '0' and string_num[2] == '0':  # If number is a multiple of 100, then it will be returned.
            return number_in_words

    # Number is two or more digits long, and if the second digit is 1 (teen).
    if len(string_num) >= 2 and string_num[len(string_num) - 2] == '1':
        number_in_words += teens_list[string_num[len(string_num) - 1]]  # Concatenates the number pair from `teensList`.
        return number_in_words

    # Number is two or more digits long, and if the second digit is not 0.
    if len(string_num) >= 2 and string_num[len(string_num) - 2] != '0':
        number_in_words += tens_list[string_num[len(string_num) - 2]]
        if string_num[len(string_num) - 1] != '0':  # If last digit isn't 0, a hyphen is concatenated to `stringNum`.
            number_in_words += '-'

    # Final digit is not 0.
    if len(string_num) >= 1 and string_num[len(string_num) - 1] != '0':  # Concatenates the number pair from `onesList`.
        number_in_words += ones_list[string_num[len(string_num) - 1]]

    return number_in_words
