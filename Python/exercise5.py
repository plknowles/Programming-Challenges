def exercise5(message):
    """
    Exercise 5 - Morse Code Encoder:
    Takes an input message and converts the letters and numbers to morse code (ignoring any other characters). Spaces
    are added between morse code.

    Parameters:
    - message (String): Message to be converted to morse code.

    Returns:
    - String: Converted morse code string message.
    """

    # Character-morse code pairs stored in a dictionary.
    morse_code_list = {
        'A': ".-",
        'B': "-...",
        'C': "-.-.",
        'D': "-..",
        'E': ".",
        'F': "..-.",
        'G': "--.",
        'H': "....",
        'I': "..",
        'J': ".---",
        'K': "-.-",
        'L': ".-..",
        'M': "--",
        'N': "-.",
        'O': "---",
        'P': ".--.",
        'Q': "--.-",
        'R': ".-.",
        'S': "...",
        'T': "-",
        'U': "..-",
        'V': "...-",
        'W': ".--",
        'X': "-..-",
        'Y': "-.--",
        'Z': "--..",
        '0': "-----",
        '1': ".----",
        '2': "..---",
        '3': "...--",
        '4': "....-",
        '5': ".....",
        '6': "-....",
        '7': "--...",
        '8': "---..",
        '9': "----.",
    }
    uppercase_message = message.upper()
    morse_code_message = ""  # Store converted message.

    for i, char in enumerate(uppercase_message):
        # Checks if the current index character of uppercaseMessage is contained within morseCodeList (must be a
        # number/letter).
        if char in morse_code_list:
            morse_code_message += morse_code_list[char]
            # Concatenates a space between morse code characters if char is not at the end of the string.
            if i < len(uppercase_message) - 1 and uppercase_message[i + 1] in morse_code_list:
                morse_code_message += ' '
        if char == ' ':
            morse_code_message += ' '
    return morse_code_message
