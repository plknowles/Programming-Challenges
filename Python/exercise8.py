def exercise8(filename, length):
    """
    Exercise 8 - Justify any Text: Reads user provided text and justifies the text based on a maximum character
    length argument.

    Parameters:
    - filename (String): Path and/or filename of text file to be read.
    - length (number): Maximum length of characters on a line. Must be a positive integer.

    Returns:
    - Array: Array of lines filled as much text as possible without exceeding the character limit.
    """
    text_array = []
    temp_line = ""
    with open(filename, 'r') as file:
        file_content = file.read()
    file_content = file_content.strip()  # Removes leading/trailing whitespaces.
    file_content = '. .'.join(file_content.split())  # Replaces all whitespaces with a space between 2 '.'.
    words_array = file_content.split('.')  # Splits by '.' into an array of words and spaces.

    for i in range(len(words_array)):
        # Combined length of current line and current word is less than or equal to length argument.
        if len(words_array[i]) + len(temp_line) <= length:
            # Concatenates new word to `tempLine`.
            temp_line += words_array[i]
        else:
            # Trims any trailing spaces and pushes to array.
            text_array.append(temp_line.strip())
            # Clears `tempLine` after it is pushed.
            temp_line = ""
            # Appends current word to temp line
            if len(words_array[i]) + len(temp_line) <= length and words_array[i] != ' ':
                temp_line += words_array[i]
    # Trims and appends the last word to the text_array after the loop finishes.
    text_array.append(temp_line.strip())

    return text_array
