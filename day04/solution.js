function parseInput(input) {
    return input.split('\n').map(line => line.split(',').map(range => range.split('-').map(text => parseInt(text, 10))));
}

function isCompleteleyContained(startA, endA, startB, endB) {
    return (startA <= startB && endA >= endB) || (startB <= startA && endB >= endA);
}

function overlapsAtAll(startA, endA, startB, endB) {
    return !(endA < startB || endB < startA);
}

function solvePartOne(input) {
    const parsedInput = parseInput(input);
    const total = parsedInput.reduce((total, [[startA, endA],[startB, endB]]) => {
        return isCompleteleyContained(startA, endA, startB, endB) ? total + 1 : total;
    }, 0);
    return total;
};

function solvePartTwo(input) {
    const parsedInput = parseInput(input);
    const total = parsedInput.reduce((total, [[startA, endA],[startB, endB]]) => {
        return overlapsAtAll(startA, endA, startB, endB) ? total + 1 : total;
    }, 0);
    return total;
}

module.exports = {
    solvePartOne,
    solvePartTwo
};

