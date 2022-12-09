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
    // TODO: Solve the puzzle for part two using core code
    return input
}

module.exports = {
    solvePartOne,
    solvePartTwo
};

