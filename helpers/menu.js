const inquirer = require('inquirer');
const { functionMenu } = require('./functions');
const { geometryMenu } = require('./geometry_menu');
require('colors')


const questions = [
	{
		type: 'list',
		name: 'menu',
		message: '¿What do you want to do?',
		choices: [
			{
				value: 1,
				name: `${ '1.'.green } Functions`
			},
			{
				value: 2,
				name: `${ '2.'.green } Geometry`
			},
			{
				value: 3,
				name: `${ '2.'.green } Trigonometry`
			},

			{
				value: 0,
				name: `${ '0.'.green } Quit`
			},
		]
	}
];


const menuOptions = async() => {

	const { menu } = await inquirer.prompt( questions );


	switch ( menu ) {
		case 1:
			console.clear();
			await functionMenu();
		break;
		
		case 2:
			await geometryMenu();
		break;
	}

	return menu;

}



module.exports.menuOptions = menuOptions; 