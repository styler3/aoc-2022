function parseMove(moveString) {
    return moveString.split(/move\s|\sfrom\s|\sto\s/)
        .map(number => parseInt(number, 10))
        .filter(truthy => truthy);
}

function solvePartOne({ initialLayout, moves }) {
    const layout = JSON.parse(JSON.stringify(initialLayout)); // Deep clone
    for (const move of moves) {
        let [numberToMove, stackToMoveFrom, stackToMoveTo] = parseMove(move);
        for (let i = numberToMove; i > 0; i--) {
            layout[stackToMoveTo].push(layout[stackToMoveFrom].pop());
        }
    }
    return Object.values(layout).map(list => list[list.length - 1]).join('');
};

function solvePartTwo({ initialLayout, moves}) {
    const layout = JSON.parse(JSON.stringify(initialLayout)); // Deep clone
    for (const move of moves) {
        let [numberToMove, stackToMoveFrom, stackToMoveTo] = parseMove(move);
        let intermediateArray = [];
        for (let i = numberToMove; i > 0; i--) {
            intermediateArray.push(layout[stackToMoveFrom].pop());
        }
        while (intermediateArray.length) {
            layout[stackToMoveTo].push(intermediateArray.pop());
        }
    }
    return Object.values(layout).map(list => list[list.length - 1]).join('');
}

module.exports = {
    solvePartOne,
    solvePartTwo
};

