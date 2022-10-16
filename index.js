const { menuOptions } = require('./helpers/menu');
require('colors')


console.log("====================================".green);
console.log("  Welcome to your math application  ".green);
console.log("====================================".green);

const main = async() => {
	console.clear();
	await menuOptions();

}

main();