function parseInput(input) {
    return input.split('\n').map(line => line.split('').map(tree => parseInt(tree, 10)));
}

function rowsToColumns(rows) {
    let columns = rows[0].map(() => []);
    rows.forEach((row) => {
        row.forEach((item, index) => {
            columns[index].push(item);
        });
    });
    return columns;
}

/**
 * Given a line (row or column) of trees, decide which are visible from either
 * end of the line;
 */
function getVisibleTrees(line) {
    let visible = new Set(),
        currentTallest = -1;
    // Forwards
    line.forEach((tree, index) => {
        if (tree > currentTallest) {
            currentTallest = tree;
            visible.add(index);
        }
    });
    // Backwards
    currentTallest = -1;
    line.reverse().forEach((tree, index) => {
        if (tree > currentTallest) {
            currentTallest = tree;
            visible.add(line.length - 1 - index);
        }
    })
    return Array.from(visible);
}

function getDirectionScore(row, column, columnChange, rowChange, trees) {
    const treeHeight = trees[row][column];
    let score = 0;
    row += rowChange;
    column += columnChange;
    while (row >= 0 && row < trees.length && column >= 0 && column < trees[0].length) {
        if (trees[row][column] < treeHeight) {
            score++;
            row += rowChange;
            column += columnChange;
        } else {
            score++;
            break;
        }
    }
    return score;
}

function getScenicScore(row, column, trees) {
    let northScore = getDirectionScore(row, column, 0, -1, trees),
        eastScore = getDirectionScore(row, column, 1, 0, trees),
        southScore = getDirectionScore(row, column, 0, 1, trees),
        westScore = getDirectionScore(row, column, -1, 0, trees);
    return northScore * eastScore * southScore * westScore;
}

function solvePartOne(input) {
    const rows = parseInput(input),
        columns = rowsToColumns(rows);
    let treeVisibility = new Set();
    rows.forEach((row, rowNumber) => {
        getVisibleTrees(row).forEach((columnNumber) => {
            treeVisibility.add(`${columnNumber}-${rowNumber}`);
        });
    });
    columns.forEach((column, columnNumber) => {
        getVisibleTrees(column).forEach((rowNumber) => {
            treeVisibility.add(`${columnNumber}-${rowNumber}`);
        });
    });
    return treeVisibility.size;
};

function solvePartTwo(input) {
    const rows = parseInput(input);
    let allScenicScores = [];
    for (let row = 0; row < rows.length; row++) {
        for (let column = 0; column < rows[0].length; column++) {
            allScenicScores.push(getScenicScore(row, column, rows));
        }
    }
    return Math.max(...allScenicScores);
}

module.exports = {
    solvePartOne,
    solvePartTwo
};

