

const calculateSlopeTwoPoints = (x1, y1, x2, y2) => {
	const slope = (y2 - y1) / (x2 - x1);
	return slope;
}


module.exports = {
	calculateSlopeTwoPoints
}