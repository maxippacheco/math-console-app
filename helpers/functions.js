const  menuOptions = require('./menu')
const inquirer = require('inquirer');
const { calculateSlopeTwoPoints } = require('./calculate/linear-function');
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
				name: `${ '2.'.green } Equation of the line`
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

const linearFunctionMenu = async() => {
	const { linearFunctionMenu } = await inquirer.prompt( linearFunctionMenuQuestions );

	switch ( linearFunctionMenu ) {
		case 1:
			const questions = [
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

		const { x1, y1, x2, y2 } = await inquirer.prompt( questions );

		const slope = calculateSlopeTwoPoints( x1, y1, x2, y2 );

		console.log("The value of the slope is " + slope);

		break;

		case 2:
			
		break;
		case 3:
			console.clear();
			await functionMenu();
		break;
		
	}
	return linearFunctionMenu;

}

const quadraticFunctionMenu = async() => {

}

module.exports = { 
	functionMenu
}