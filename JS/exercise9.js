/**
 * Exercise 9 - Knight's Challenge: The function checks if a chess knight is able to move from a user inputted start square to a user inputted end square within the specified number of moves. Returns a boolean.
 * @param {String} start - Start square of the knight, in string format, i.e. "a4".
 * @param {String} end - End square of the knight, in string format, i.e. "a4".
 * @param {number} moves - Number of moves to check if the knight can move from start to finish within.
 * @returns {boolean} - true if the knight is able to move from start square to end square within the specified number of moves.
 */

function exercise9(start, end, moves) {
    // All possible chessboard columns
    const possibleChessboardColumns = ["a", "b", "c", "d", "e", "f", "g", "h"];
    // All eight possible moves for a knight
    const availableMoves = [
        [1, 2],
        [-1, 2],
        [1, -2],
        [-1, -2],
        [2, 1],
        [2, -1],
        [-2, 1],
        [-2, -1],
    ];
    const numericalStartCoordinates = [
        possibleChessboardColumns.indexOf(start[0]) + 1,
        parseInt(start[1]),
    ];
    const numericalEndCoordinates = [
        possibleChessboardColumns.indexOf(end[0]) + 1,
        parseInt(end[1]),
    ];

    // Checks numerical coordinates are within the bounds of the chessboard, i.e. within columns a-h and rows 1-8.
    function isPositionWithinBounds(column, row) {
        if (1 <= column && column <= 8 && 1 <= row && row <= 8) {
            return true;
        }
        return false;
    }

    // Checks the case if the start coordinates are already the end coordinates before any moves or recursion occurs.
    if (
        numericalStartCoordinates[0] === numericalEndCoordinates[0] &&
        numericalStartCoordinates[1] === numericalEndCoordinates[1]
    ) {
        return true;
    }

    function checkMoves(start, end, moves) {
        // If no more moves, the last recursion breaks and moves back up to previous function.
        if (moves === 0) {
            return false;
        }

        for (const move of availableMoves) {
            if (
                !isPositionWithinBounds(start[0] + move[0], start[1] + move[1]) // Skips move if not in bounds
            ) {
                continue;
            }

            // Performs the move and assigns it to `newPosition`.
            const newCoordinates = [start[0] + move[0], start[1] + move[1]];

            // Checks if newPosition === endPosition.
            if (newCoordinates[0] === end[0] && newCoordinates[1] === end[1]) {
                return true;
            }
            // If a recursion lands on end coordinates, returns true.
            if (checkMoves(newCoordinates, end, moves - 1)) {
                return true;
            }
        }
        return false; // None of the moves landed on the end coordinates.
    }

    return checkMoves(
        numericalStartCoordinates,
        numericalEndCoordinates,
        moves
    );
}
