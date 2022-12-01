function parseInput(input) {
    return input.split('\n\n').map(elf => {
        return elf.split('\n').map(foodItem => parseInt(foodItem, 10));
    });
}

function sum(array) {
    return array.reduce((total, x) => total + x);
}

function solvePartOne(input) {
    const parsedInput = parseInput(input);
    return Math.max(...parsedInput.map(sum));
};

function solvePartTwo(input) {
    const parsedInput = parseInput(input);
    const totals = parsedInput.map(sum);
    const sortedTotals = totals.sort((a, b) => a - b);
    const topThree = sortedTotals.slice(sortedTotals.length - 3, sortedTotals.length)
    return sum(topThree);
}

module.exports = {
    solvePartOne,
    solvePartTwo
};

