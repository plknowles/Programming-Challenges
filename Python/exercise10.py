def exercise10(environment):
    """
    Exercise 10 - War of Species: A 3x8 grid with two competing species:
    'X', represents an individual of the species X.
    'O', represents an individual of the species O.
    '.', represents an empty cell.

    Each cell interacts with its up to eight neighbours. The function returns a grid representing the next state of the
    environment according to the following set of rules:
    1. Empty cells become non-empty if surrounded by 2+ of the same species, whichever is more frequent, unless it is a
    draw then it remains empty.

    Rules for non-empty cells (species) to become empty:
        2. Surrounded by 6+ empty cells.
        3. Surrounded by less than 3 of the same species.
        4. Surrounded by more members of the opposite species than own species.

    5. Otherwise, the cell remains the same.

    Parameters:
    - environment (Array): 3x8 array of strings representing the current state of the environment. Must only contain
    characters '.', 'X', 'O'.

    Returns:
    - Array: 3x8 array of strings representing the next state of the environment. Must only contain characters '.', 'X',
     'O'.
    """

    new_environment = []
    row_size = len(environment)
    column_size = len(environment[0])

    # Checks neighbours are within the grid and returns a count of both species and empty cells.
    def count_neighbours(current_row, current_column):
        possible_neighbours = [[current_row - 1, current_column - 1], [current_row - 1, current_column], [current_row - 1, current_column + 1], [current_row, current_column - 1],
                               [current_row, current_column + 1], [current_row + 1, current_column - 1], [current_row + 1, current_column], [current_row + 1, current_column + 1]]
        species_x_count = 0
        species_o_count = 0
        empty_cell_count = 0

        for [row, column] in possible_neighbours:
            # Current position and neighbours are in the bounds of the grid.
            if (0 <= current_row < row_size and 0 <= current_column < column_size) and (0 <= row < row_size and 0 <= column < column_size):
                if environment[row][column] == 'X':
                    species_x_count += 1
                if environment[row][column] == 'O':
                    species_o_count += 1
                if environment[row][column] == '.':
                    empty_cell_count += 1
        return species_x_count, species_o_count, empty_cell_count

    for row in range(len(environment)):
        temp_row = ""
        for column in range(len(environment[row])):
            species_x_count, species_o_count, empty_cell_count = count_neighbours(row, column)

            # 1. Rule for empty cells (.) to become non-empty. If surrounded by 2+ of the same species, whichever is
            # more frequent, unless it is a draw then it remains empty.
            if environment[row][column] == '.' and species_x_count != species_o_count:
                if species_x_count >= 2 and species_x_count > species_o_count:
                    temp_row += 'X'
                    continue
                if species_o_count >= 2 and species_o_count > species_x_count:
                    temp_row += 'O'
                    continue

            # Rules for non-empty cells (species) to become empty.
            if environment[row][column] == 'X' or environment[row][column] == 'O':
                # 2. Surrounded by 6+ empty cells.
                if empty_cell_count >= 6:
                    temp_row += '.'
                    continue

                # 3. Surrounded by less than 3 of the same species.
                if (environment[row][column] == 'X' and species_x_count < 3) or (environment[row][column] == 'O' and species_o_count < 3):
                    temp_row += '.'
                    continue

                # 4. Surrounded by more members of the opposite species than own species.
                if (environment[row][column] == 'X' and species_o_count > species_x_count) or (environment[row][column] == 'O' and species_x_count > species_o_count):
                    temp_row += '.'
                    continue

            # 5. Otherwise, the cell does not change value.
            temp_row += environment[row][column]

        new_environment.append(temp_row)

    return new_environment
