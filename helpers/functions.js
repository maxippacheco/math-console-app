const  menuOptions = require('./menu')
const inquirer = require('inquirer');
const { calculateSlopeTwoPoints } = require('./calculate/linear-function');
const { findRoots, findVertex } = require('./calculate/quadratic-function');
require('colors')

const functionMenuQuestions = [
	{
		type: 'list',
		name: 'functionMenu',
		message: 'Welcome to functions menu?',
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

const functionMenu = async() => {

	const { functionMenu } = await inquirer.prompt( functionMenuQuestions );

	switch (functionMenu) {	
		case 1:
			await linearFunctionMenu();
		break;
			case 2:
			await quadraticFunctionMenu();
		break;

		case 3:
			console.clear();
			await menuOptions();
		break;
			}

	return functionMenu;

}


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
				name: `${ '0.'.green } Go back`
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

const linearFunctionMenu = async() => {
	const { linearFunctionMenu } = await inquirer.prompt( linearFunctionMenuQuestions );

	switch ( linearFunctionMenu ) {
		case 1:

			const { x1, y1, x2, y2 } = await inquirer.prompt( calculateSlopeQuestions );

			const slope = calculateSlopeTwoPoints( x1, y1, x2, y2 );

			console.log("The value of the slope is " + slope);

		break;

		// case 2:
		// 		const questions2 = [
		// 			{
		// 				type: 'input',
		// 				name: 'Slope',
		// 				message: `${ 'slope'.green } value: `
		// 			},
		// 			{
		// 				type: 'input',
		// 				name: 'X',
		// 				message: `${ 'x'.green } value: `
		// 			},
		// 			{
		// 				type: 'input',
		// 				name: 'Y',
		// 				message: `${ 'y'.green } value: `
		// 			},
		// 		];
			
		// 		console.log("Not implemented");

		// break;
	
		case 3:
			console.clear();
			await functionMenu();
		break;
		
	}
	return linearFunctionMenu;

}

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
				value: 4,
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


const quadraticFunctionMenu = async() => {

	const { quadraticFunctionMenu } = await inquirer.prompt( quadraticFunctionMenuQuestions );

	switch ( quadraticFunctionMenu ) {
		case 1:
			const { a, b, c } = await inquirer.prompt( calculateRootsQuestions );

			const [ root1, root2 ] = findRoots(a, b, c);

			console.log('First Root: '.green + root1);
			console.log('Second Root: '.green + root2);

			break;

		case 2:

			const { a: A, b: B, c: C } = await inquirer.prompt( calculateRootsQuestions );

			const [ xVertex, yVertex ] = findVertex( A, B, C );

			console.log(`X: ${ xVertex }`);
			console.log(`Y: ${ yVertex }`);

			break;
		
		case 3:

			const { a: a1, b: b1, c: c1 } = await inquirer.prompt( calculateRootsQuestions );

			const [ xV, yV ] = findVertex( a1, b1, c1 );

			// TODO: improve output
			console.log(`Canonical form is: ${a1}(x - ${ xV })^2 + ${ yV }`);

			break;
	
		case 4:

			const { a: a2, b: b2, c: c2 } = await inquirer.prompt( calculateRootsQuestions );

			const [ r1, r2 ] = findRoots(a2, b2, c2);

			// TODO: improve output

			console.log(`Factorized form is: ${ a2 }(x - ${r1})(x - ${r2})`);

			break;
	
	
		case 5:
			console.clear();
			await functionMenu();
		break;
	}


}

module.exports = { 
	functionMenu
}