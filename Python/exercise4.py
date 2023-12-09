def exercise4(word):
    """
    Exercise 4 - English to Pig Latin Translator:
    Converts a word to pig latin. If the word begins with a consonant, all letters at the beginning of the word,
    up to the first vowel, are removed and then added to the end of the word, followed by `ay'. If the word begins
    with a vowel, then `way' is added to the end of the word. Words starting in uppercase will return the uppercase
    start. The word may contain a punctuation mark at the end.

    Parameters:
    - word (String): String word to be converted to pig latin.

    Returns:
    - String: The word in pig latin form.
    """

    consonants = [
        'b',
        'c',
        'd',
        'f',
        'g',
        'h',
        'j',
        'k',
        'l',
        'm',
        'n',
        'p',
        'q',
        'r',
        's',
        't',
        'v',
        'w',
        'x',
        'y',
        'z',
    ]
    vowels = ['a', 'e', 'i', 'o', 'u']

    # Handle uppercase
    is_first_letter_uppercase = word[0].isupper()
    lower_case_word = word.lower()

    # Checks last character is punctuation mark (not a letter), then removes the punctuation mark.
    if not lower_case_word[-1].isalpha():
        punctuation_mark = lower_case_word[-1]
        lower_case_word = lower_case_word[0: -1]
    else:
        punctuation_mark = ''

    pig_latin_word = ""
    if lower_case_word[0] in vowels:
        pig_latin_word = lower_case_word + "way"
    elif lower_case_word[0] in consonants:
        # Finds the index of the first vowel
        first_vowel_index = None
        for i, letter in enumerate(lower_case_word):
            if letter in vowels:
                first_vowel_index = i
                break
        if first_vowel_index is None:  # When no vowel is present, the word remains the same.
            pig_latin_word = lower_case_word
        else:  # First letter up to the first vowel are moved to the end of the word.
            pig_latin_word = lower_case_word[first_vowel_index:] + lower_case_word[0:first_vowel_index]
        pig_latin_word += "ay"

    # Capitalise first letter if a capital was originally present.
    if is_first_letter_uppercase:
        pig_latin_word = pig_latin_word[0].upper() + pig_latin_word[1:]
    pig_latin_word += punctuation_mark  # Adds punctuation mark if any.
    return pig_latin_word
