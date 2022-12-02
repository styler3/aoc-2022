const PAPER = 'P', SCISSORS = 'S', ROCK = 'R',
WIN = 'W', LOSS = 'L', DRAW='D',
elfChoices = {
    A: ROCK,
    B: PAPER,
    C: SCISSORS
},
myChoices = {
    X: ROCK,
    Y: PAPER,
    Z: SCISSORS
},
desiredResultChoices = {
    X: LOSS,
    Y: DRAW,
    Z: WIN
},
choiceScores = {
    [ROCK]: 1,
    [PAPER]: 2,
    [SCISSORS]: 3
},
resultScores = {
    [WIN]: 6,
    [LOSS]: 0,
    [DRAW]: 3
};

function getRoundResult(elfChoice, myChoice) {
    if (elfChoice === myChoice) {
        return DRAW;
    }
    if (elfChoice === PAPER) {
        return myChoice === SCISSORS ? WIN : LOSS;
    }
    if (elfChoice === ROCK) {
        return myChoice === PAPER ? WIN : LOSS;
    }
    if (elfChoice === SCISSORS) {
        return myChoice === ROCK ? WIN : LOSS;
    }
}

function getChoiceFromDesiredResult(elfChoice, desiredResult) {
    if (desiredResult === DRAW) {
        return elfChoice;
    }
    if (elfChoice === PAPER) {
        return desiredResult === WIN ? SCISSORS : ROCK;
    }
    if (elfChoice === ROCK) {
        return desiredResult === WIN ? PAPER : SCISSORS;
    }
    if (elfChoice === SCISSORS) {
        return desiredResult === WIN ? ROCK : PAPER;
    }
}

function parseInput(input) {
    return input.split('\n').map(round => round.split(' '))
}

function solvePartOne(input) {
    const parsedInput = parseInput(input);
    const totalScore = parsedInput.reduce((totalScore, [elfInput, myInput]) => {
        const myChoice = myChoices[myInput], elfChoice = elfChoices[elfInput],
        roundResult = getRoundResult(elfChoice, myChoice),
        resultScore = resultScores[roundResult],
	choiceScore = choiceScores[myChoice];

        return totalScore + resultScore + choiceScore;
    }, 0);
    return totalScore;
};
function solvePartTwo(input) {
    const parsedInput = parseInput(input);
    const totalScore = parsedInput.reduce((totalScore, [elfInput, desiredResultInput]) => {
        const elfChoice = elfChoices[elfInput], desiredResult = desiredResultChoices[desiredResultInput],
	myChoice = getChoiceFromDesiredResult(elfChoice, desiredResult),
        resultScore = resultScores[desiredResult],
        choiceScore = choiceScores[myChoice];

        return totalScore + resultScore + choiceScore;
    }, 0);
    return totalScore;
}

module.exports = {
    solvePartOne,
    solvePartTwo
};

