const { solvePartOne, solvePartTwo } = require('./solution.js');
const { exampleInputs } = require('./exampleInputs');
const {
    input: realInput,
    outputPartOne: realOutputPartOne,
    outputPartTwo: realOutputPartTwo
} = require('./realInputs');

describe('Part one solution', () => {
    it('Solves the example inputs', () => {
        for (const {input, outputPartOne} of exampleInputs) {
	    expect(solvePartOne(input)).toEqual(outputPartOne);
	}
    });

    it('Solves the real input', () => {
        expect(solvePartOne(realInput)).toEqual(realOutputPartOne);
    });
});

describe('Part two solution', () => {
    it('Solves the example inputs', () => {
        for (const {input, outputPartTwo} of exampleInputs) {
	    expect(solvePartTwo(input)).toEqual(outputPartTwo);
	}
    });

    it('Solves the real input', () => {
        expect(solvePartTwo(realInput)).toEqual(realOutputPartTwo);
    });
});

