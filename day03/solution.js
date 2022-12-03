const numberByLetter = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
    A: 27,
    B: 28,
    C: 29,
    D: 30,
    E: 31,
    F: 32,
    G: 33,
    H: 34,
    I: 35,
    J: 36,
    K: 37,
    L: 38,
    M: 39,
    N: 40,
    O: 41,
    P: 42,
    Q: 43,
    R: 44,
    S: 45,
    T: 46,
    U: 47,
    V: 48,
    W: 49,
    X: 50,
    Y: 51,
    Z: 52
}

function parseInput(input) {
    return input.split('\n').map(rucksack => rucksack.split(''));
}

function parseInputPartTwo(input) {
    const rucksacks = parseInput(input).map(rucksack => rucksack.map(letter => numberByLetter[letter]));
    let result = [];
    for (let i = 0; i < rucksacks.length; i = i + 3) {
        result.push(rucksacks.slice(i, i + 3));
    }
    return result;
}

function splitInHalf(array) {
    const halfLength = Math.ceil(array.length / 2);
    return [array.slice(0, halfLength), array.slice(halfLength)];
}

function findShared(arrayA, arrayB) {
    return arrayA.filter(element => arrayB.includes(element))[0];
}

function findSharedThree(arrayA, arrayB, arrayC) {
    const sharedAB = arrayA.filter(element => arrayB.includes(element));
    return sharedAB.filter(element => arrayC.includes(element))[0];
}

function solvePartOne(input) {
    const parsedInput = parseInput(input);
    const total = parsedInput.reduce((total, rucksack) => {
        const rucksackAsNumbers = rucksack.map(letter => numberByLetter[letter]),
            [halfA, halfB] = splitInHalf(rucksackAsNumbers),
            sharedValue = findShared(halfA, halfB);
	return total + sharedValue;
    }, 0);
    return total;
};

function solvePartTwo(input) {
    const parsedInput = parseInputPartTwo(input);
    const total = parsedInput.reduce((total, rucksackGroup) => {
        const sharedValue = findSharedThree(...rucksackGroup);
	return total + sharedValue;
    }, 0);
    return total;
}

module.exports = {
    solvePartOne,
    solvePartTwo
};

