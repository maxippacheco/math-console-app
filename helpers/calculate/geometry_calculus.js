
const findSquare = ( side ) => ({
	squareArea: (Math.pow(side, 2)),
	squarePerimeter: ( side * 4 )
});

const findRectangle = (length, width) => ({
	rectangleDiagonal: Math.sqrt( Math.pow(length, 2 ) + Math.pow(width, 2) ).toFixed(2),
	rectangleArea: (length * width),
	rectanglePerimeter: (2*length + 2*width)
});

const findCircle = (diameter) => ({
	diameter,
	radius: ( diameter / 2 ),
	perimeter: ( Math.PI * diameter ),
	circumference: ( 2 * Math.PI * ( diameter/ 2 ) ),
	area: Math.PI * Math.pow( ( diameter / 2 ), 2 )
})

const findParallelogram = (sideA, sideB, height) => ({
	parallelogramArea: (2 * sideA + 2 * sideB),
	parallelogramPerimeter: ( sideB * height ),
})

// todo: triangulo isoceles, escaleno, rectangulo
const findTriangleArea = (base, height) => ({
	triangleArea: (0.5*base*height),
});

module.exports = {
	findSquare,
	findRectangle,
	findCircle,
	findParallelogram
}