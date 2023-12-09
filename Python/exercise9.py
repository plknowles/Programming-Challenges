def exercise9(start, end, moves):
    """
    Exercise 9 - Knight's Challenge: The function checks if a chess knight is able to move from a user inputted start
    square to a user inputted end square within the specified number of moves. Returns a boolean.

    Parameters:
    - start (String): Start square of the knight, in string format, i.e. "a4".
    - end (String): End square of the knight, in string format, i.e. "a4".
    - moves (number): Number of moves to check if the knight can move from start to finish within.

    Returns:
    - boolean: true if the knight is able to move from start square to end square within the specified number of moves.
    """

    # All possible chessboard columns.
    possible_chessboard_columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
    # All eight possible moves for a knight.
    available_moves = [[1, 2], [-1, 2], [1, -2], [-1, -2], [2, 1], [2, -1], [-2, 1], [-2, -1]]

    numerical_start_coordinates = [possible_chessboard_columns.index(start[0]) + 1, int(start[1])]
    numerical_end_coordinates = [possible_chessboard_columns.index(end[0]) + 1, int(end[1])]

    # Checks numerical coordinates are within the bounds of the chessboard, i.e. within columns a-h and rows 1-8.
    def is_position_within_bounds(column, row):
        if 1 <= column <= 8 and 1 <= row <= 8:
            return True
        return False

    # Checks if the start coordinates are already the end coordinates before any moves or recursion occurs.
    if numerical_start_coordinates == numerical_end_coordinates:
        return True

    def check_moves(start_coord, end_coord, remaining_moves):
        # If no more moves, the last recursion breaks and moves back up to previous function.
        if remaining_moves == 0:
            return False

        for move in available_moves:
            # Skips move if not in bounds
            if not is_position_within_bounds(start_coord[0] + move[0], start_coord[1] + move[1]):
                continue

            # Performs the move and assigns it to `newPosition`.
            new_coordinates = [start_coord[0] + move[0], start_coord[1] + move[1]]

            # Checks if newPosition === endPosition.
            if new_coordinates == end_coord:
                return True

            # If a recursion lands on end coordinates, returns true.
            if check_moves(new_coordinates, end_coord, remaining_moves - 1):
                return True

        # None of the moves landed on the end coordinates.
        return False

    return check_moves(numerical_start_coordinates, numerical_end_coordinates, moves)
