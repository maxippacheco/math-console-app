const inquirer = require('inquirer');
const {
	functionMenuQuestions,
	linearFunctionMenuQuestions,
	quadraticFunctionMenuQuestions,
	calculateRootsQuestions,
	calculateSlopeQuestions,
} = require('./questions/functions');
const { calculateSlopeTwoPoints } = require('./calculate/linear-function');
const { findRoots, findVertex } = require('./calculate/quadratic-function');
const menuOptions = require('./menu');
require('colors')

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
			await menuOptions.menuOptions();
		break;
			}

	return functionMenu;

}



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
			await menuOptions.menuOptions();
		break;
		
	}
	return linearFunctionMenu;

}


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