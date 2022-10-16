

const findRoots = (a, b, c) => {
  const squarePart1 = ((-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) );
  const squarePart2 = ((-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) );

	const denom = ( 2 * a );

	const root1 =	(squarePart1 / denom).toFixed(2);
	const root2 = (squarePart2 / denom).toFixed(2);

	return [
		root1,
		root2
	]

}

const findVertex = (a, b, c) => {

	let a1 = parseInt(a);
	let b1 = parseInt(b);
	let c1 = parseInt(c);

	const xVertex = ((-1 * b1) / ( 2 * a1 ));
	const yVertex = ( a1 * Math.pow(xVertex, 2 ) + b1 * xVertex + c1);
	// vy = a*vx^2 + b*vx + c


	return [
		xVertex,
		yVertex
	]

}

module.exports = {
	findRoots,
	findVertex
}