
const findSquare = ( side ) => ({
	squareArea: (Math.pow(side, 2)),
	squarePerimeter: ( side * 4 )
});

const findRectangle = (length, width) => ({
	rectangleDiagonal: Math.sqrt( Math.pow(length, 2 ) + Math.pow(width, 2) ),
	rectangleArea: (length * width),
	rectanglePerimeter: (2*(length + width))
});

const findCircle = (diameter) => ({
	diameter,
	radius: ( diameter / 2 ),
	perimeter: ( Math.PI * diameter ),
	cincumference: ( 2 * Math.PI * ( diameter/ 2 ) ),
	area: Math.PI * Math.pow( ( diameter / 2 ), 2 )
})

// todo: triangulo isoceles, escaleno, rectangulo
const findTriangleArea = (base, height) => ({
	triangleArea: (0.5*base*height),
});

module.exports = {
	findSquare,
	findRectangle,
	findCircle
}