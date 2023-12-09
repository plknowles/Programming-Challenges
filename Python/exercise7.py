def exercise7(filename):
    """
    Exercise 7 - No Functions without Comments: Reads a user provided text/source file and returns a
    list of the functions within that don't have comments immediately preceding them.

    Parameters:
    - filename (String): Path and/or filename of the file to be read.

    Returns:
    - Array: Non-commented function names.
    """
    function_names = []  # Store function names
    file_lines = []  # Store lines
    with open(filename, 'r') as file:
        for line in file:
            file_lines.append(line.strip())  # Strips whitespaces and appends to array

    for i in range(len(file_lines)):
        # Function is on the first line.
        if i == 0 and file_lines[i].startswith("def "):
            # Splits the function name between the ' ' and '(' and adds it to an array.
            function_names.append(file_lines[i].split(' ')[1].split('(')[0])
        # Function isn't on the first line and not preceded with "//" on the previous line.
        if i > 0 and file_lines[i].startswith("def ") and not file_lines[i - 1].startswith('#'):
            function_names.append(file_lines[i].split(' ')[1].split('(')[0])

    return function_names
