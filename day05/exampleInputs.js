const exampleInputs = [
    {
        input: {
            initialLayout: {
                1: ['Z', 'N'],
                2: ['M', 'C', 'D'],
                3: ['P']
            },
            moves: [
                'move 1 from 2 to 1',
                'move 3 from 1 to 3',
                'move 2 from 2 to 1',
                'move 1 from 1 to 2'
            ]
        },
        outputPartOne: 'CMZ',
        outputPartTwo: 'MCD',
    }
];

module.exports = { exampleInputs };

