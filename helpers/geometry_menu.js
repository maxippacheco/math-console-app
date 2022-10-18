const inquirer = require("inquirer");
const { findSquare, findRectangle, findCircle, findParallelogram } = require("./calculate/geometry_calculus");
const menuOptions = require("./menu");

const geometryMenuQuestions = [
	{
		type: 'list',
		name: 'geometryMenu',
		message: 'Welcome to geometry menu!',
		choices: [
			{
				value: 1,
				name: `${ '1.'.green } Square`
			},
			{
				value: 2,
				name: `${ '2.'.green } Rectangle`
			},
			{
				value: 3,
				name: `${ '0.'.green } Circle`
			},
			{
				value: 4,
				name: `${ '0.'.green } Parallelogram`
			},
			{
				value: 5,
				name: `${ '0.'.green } Triangle`
			},

			{
				value: 0,
				name: `${ '0.'.green } Quit`
			},
		]
	}
];



const geometryMenu = async() => {

	const { geometryMenu } = await inquirer.prompt( geometryMenuQuestions );

	switch ( geometryMenu ) {	
		case 1:

			const squareQuestions = [
				{
					type: 'input',
					name: 'side',
					message: `${ 'side'.green } value: `
				},
			]

			const { side } = await inquirer.prompt( squareQuestions )

			const { squareArea, squarePerimeter } = findSquare( side );

			console.log(`Area: `.green + squareArea + 'cm2');
			console.log(`Perimeter: `.green + squarePerimeter + 'cm' );

		break;
			
		case 2:

			const rectangleQuestions = [
				{
					type: 'input',
					name: 'length',
					message: `${ 'length'.green } value: `
				},
				{
					type: 'input',
					name: 'width',
					message: `${ 'width'.green } value: `
				},
			];


			const { length, width } = await inquirer.prompt( rectangleQuestions )
			
			const { rectangleArea, rectangleDiagonal, rectanglePerimeter } = findRectangle( length, width );

			console.log(`Area: `.green + rectangleArea + 'cm2');
			console.log(`Perimeter: `.green + rectanglePerimeter + 'cm' );
			console.log(`Diagonal: `.green + rectangleDiagonal + 'cm');	
		break;

		case 3:
			
			const circleQuestions = [
				{
					type: 'input',
					name: 'diameter',
					message: `${ 'diameter'.green } value: `
				},
			];


			const { diameter } = await inquirer.prompt( circleQuestions );

			const { area, circumference, perimeter, radius } = findCircle( diameter );

			console.log(`Diameter: `.green + diameter);
			console.log(`Perimeter: `.green + perimeter);
			console.log(`Circumference: `.green + circumference);
			console.log(`Area: `.green + area);
			console.log(`Radius: `.green + radius);

		break;
		
		case 4:
			const parallelogramQuestions = [
				{
					type: 'input',
					name: 'sideA',
					message: `${ 'A'.green } value: `
				},
				{
					type: 'input',
					name: 'sideB',
					message: `${ 'B'.green } value: `
				},
				{
					type: 'input',
					name: 'parallelogramHeight',
					message: `${ 'Height'.green } value: `
				},
			];

			const { sideA, sideB, parallelogramHeight } = await inquirer.prompt( parallelogramQuestions );

			const { parallelogramArea, parallelogramPerimeter } = findParallelogram(sideA, sideB, parallelogramHeight);

			console.log(`Area: `.green + parallelogramArea + 'cm2');
			console.log(`Perimeter: `.green + parallelogramPerimeter + 'cm' );


			break;
	}


	return geometryMenu;

}

module.exports = {
	geometryMenu
}