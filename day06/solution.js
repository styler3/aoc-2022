function parseInput(input) {
    return input.split('');
}

function isPacketMarker(array) {
    if (array.length < 4) {
        return false;
    }
    return Array.from(new Set(array)).length === array.length;
}

function isMessageMarker(array) {
    if (array.length < 14) {
        return false;
    }
    return Array.from(new Set(array)).length === array.length;
}

function solvePartOne(input) {
    const parsedInput = parseInput(input);
    let currentSet = [], position = 0;
    while (!isPacketMarker(currentSet)) {
        currentSet.push(parsedInput.shift());
        if (currentSet.length > 4) {
            currentSet.shift();
	}
	position++;
    }
    return position;
};

function solvePartTwo(input) {
    const parsedInput = parseInput(input);
    let currentSet = [], position = 0;
    while (!isPacketMarker(currentSet)) {
        currentSet.push(parsedInput.shift());
        if (currentSet.length > 14) {
            currentSet.shift();
	}
	position++;
    }
    return position;
}

module.exports = {
    solvePartOne,
    solvePartTwo
};

