/**
 * Exercise 10 - War of Species: A 3x8 grid with two competing species:
 * 'X', represents an individual of the species X.
 * 'O', represents an individual of the species O.
 * '.', represents an empty cell.
 *
 * Each cell interacts with its up to eight neighbours. The function returns a grid representing the next state of the environment according to the following set of rules:
 * 1. Empty cells become non-empty if surrounded by 2+ of the same species, whichever is more frequent, unless it is a draw then it remains empty.
 *
 * Rules for non-empty cells (species) to become empty:
 *  2. Surrounded by 6+ empty cells.
 *  3. Surrounded by less than 3 of the same species.
 *  4. Surrounded by more members of the opposite species than own species.
 *
 * 5. Otherwise, the cell remains the same.
 *
 * @param {Array} environment - 3x8 array of strings representing the current state of the environment. Must only contain characters '.', 'X', 'O'.
 * @returns {Array} - 3x8 array of strings representing the next state of the environment. Must only contain characters '.', 'X', 'O'.
 */

function exercise10(environment) {
    let newEnvironment = [];
    const row_size = environment.length;
    const column_size = environment[0].length;

    // Checks neighbours are within the grid and returns a count of both species and empty cells.
    function countNeighbours(currentRow, currentColumn) {
        const possibleNeighbours = [
            [currentRow - 1, currentColumn - 1],
            [currentRow - 1, currentColumn],
            [currentRow - 1, currentColumn + 1],
            [currentRow, currentColumn - 1],
            [currentRow, currentColumn + 1],
            [currentRow + 1, currentColumn - 1],
            [currentRow + 1, currentColumn],
            [currentRow + 1, currentColumn + 1],
        ];
        let speciesXCount = 0;
        let speciesOCount = 0;
        let emptyCellCount = 0;

        for ([row, column] of possibleNeighbours) {
            // Current position and neighbours are in the bounds of the grid.
            if (
                row >= 0 &&
                row < row_size &&
                column >= 0 &&
                column < column_size &&
                currentRow >= 0 &&
                currentRow < row_size &&
                currentColumn >= 0 &&
                currentColumn < column_size
            ) {
                if (environment[row][column] === "X") {
                    speciesXCount++;
                }

                if (environment[row][column] === "O") {
                    speciesOCount++;
                }

                if (environment[row][column] === ".") {
                    emptyCellCount++;
                }
            }
        }
        return [speciesXCount, speciesOCount, emptyCellCount];
    }

    for (let row = 0; row < environment.length; row++) {
        let tempRow = "";
        for (let column = 0; column < environment[row].length; column++) {
            let [speciesXCount, speciesOCount, emptyCellCount] =
                countNeighbours(row, column);

            // 1. Rule for empty cells (.) to become non-empty. If surrounded by 2+ of the same species, whichever is more frequent, unless it is a draw then it remains empty.
            if (
                environment[row][column] === "." &&
                speciesXCount !== speciesOCount
            ) {
                if (speciesXCount >= 2 && speciesXCount > speciesOCount) {
                    tempRow += "X";
                    continue;
                }

                if (speciesOCount >= 2 && speciesOCount > speciesXCount) {
                    tempRow += "O";
                    continue;
                }
            }

            // Rules for non-empty cells (species) to become empty.
            if (
                environment[row][column] === "X" ||
                environment[row][column] === "O"
            ) {
                // 2. Surrounded by 6+ empty cells.
                if (emptyCellCount >= 6) {
                    tempRow += ".";
                    continue;
                }

                // 3. Surrounded by less than 3 of the same species.
                if (
                    (environment[row][column] === "X" && speciesXCount < 3) ||
                    (environment[row][column] === "O" && speciesOCount < 3)
                ) {
                    tempRow += ".";
                    continue;
                }

                // 4. Surrounded by more members of the opposite species than own species.
                if (
                    (environment[row][column] === "X" &&
                        speciesOCount > speciesXCount) ||
                    (environment[row][column] === "O" &&
                        speciesXCount > speciesOCount)
                ) {
                    tempRow += ".";
                    continue;
                }
            }
            tempRow += environment[row][column]; // 5. Otherwise, the cell does not change value.
        }
        newEnvironment.push(tempRow);
    }
    return newEnvironment;
}
