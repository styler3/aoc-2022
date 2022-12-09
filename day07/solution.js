function parseInput(input) {
    return input.split('\n');
}

function getDirectorySizes(lines) {
    let directories = {}, directoryStack = [];
    for (const line of lines) {
        if (line.startsWith('$ ')) {
            const [, command, argument] = line.split(' ');
            if (command === 'cd' && argument === '..') {
                directoryStack.pop();
                continue;
            }
            if (command === 'cd') {
                directoryStack.push(argument);
                continue;
            }
        }
        if (/^\d/.test(line)) {
            const [fileSizeString] = line.split(' '),
                fileSize = parseInt(fileSizeString, 10);
            for (const directory of directoryStack) {
                if (directory in directories) {
                    directories[directory] += fileSize;
                } else {
                    directories[directory] = fileSize;
                }
            }
        }
    }
    return directories;
}

// TODO: This works for the example solution but not for the real solution 🤔
function solvePartOne(input) {
    const lines = parseInput(input),
        directories = getDirectorySizes(lines);
    return directories;
    return Object.values(directories).reduce((total, dirSize) => {
        return dirSize <= 100000 ? total + dirSize : total;
    }, 0);
};

function solvePartTwo(input) {
    // TODO: Solve the puzzle for part two using core code
    return input
}

module.exports = {
    solvePartOne,
    solvePartTwo
};

