require('colors');


const functionMenuQuestions = [
	{
		type: 'list',
		name: 'functionMenu',
		message: 'Welcome to functions menu!',
		choices: [
			{
				value: 1,
				name: `${ '1.'.green } Linear Function`
			},
			{
				value: 2,
				name: `${ '2.'.green } Quadratic Function`
			},
			{
				value: 3,
				name: `${ '0.'.green } Go back`
			},
			{
				value: 0,
				name: `${ '0.'.green } Quit`
			},
		]
	}
];



const linearFunctionMenuQuestions = [
	{
		type: 'list',
		name: 'linearFunctionMenu',
		message: 'Linear function menu',
		choices: [
			{
				value: 1,
				name: `${ '1.'.green } Calculate slope of a function from two points`
			},
			{
				value: 2,
				name: `${ '2.'.green } Find equation`
			},
			{
				value: 3,
				name: `${ '3.'.green } Go back`
			},
			{
				value: 0,
				name: `${ '0.'.green } Quit`
			},
		]
	}
];

const calculateSlopeQuestions = [
	{
		type: 'input',
		name: 'x1',
		message: `${ 'x1'.green } value: `
	},
	{
		type: 'input',
		name: 'y1',
		message: `${ 'y1'.green } value: `
	},
	{
		type: 'input',
		name: 'x2',
		message: `${ 'x2'.green } value: `
	},
	{
		type: 'input',
		name: 'y2',
		message: `${ 'y2'.green } value: `
	}
];

const quadraticFunctionMenuQuestions = [
	{
		type: 'list',
		name: 'quadraticFunctionMenu',
		message: 'Quadratic function menu',
		choices: [
			{
				value: 1,
				name: `${ '1.'.green } Solve quadratic equation`
			},
			{
				value: 2,
				name: `${ '2.'.green } Find vertex`
			},
			{
				value: 3,
				name: `${ '3.'.green } Canonical form`
			},
			{
				value: 4,
				name: `${ '3.'.green } Factorized form`
			},
			{
				value: 5,
				name: `${ '4.'.green } Go back`
			},
			{
				value: 0,
				name: `${ '0.'.green } Quit`
			},
		]
	}
];

const calculateRootsQuestions = [
	{
		type: 'input',
		name: 'a',
		message: `${ 'a'.green } value: `
	},
	{
		type: 'input',
		name: 'b',
		message: `${ 'b'.green } value: `
	},
	{
		type: 'input',
		name: 'c',
		message: `${ 'c'.green } value: `
	},
];


module.exports = {
	functionMenuQuestions,
	linearFunctionMenuQuestions,
	quadraticFunctionMenuQuestions,
	calculateRootsQuestions,
	calculateSlopeQuestions,
}
