var PI = Math.PI;

//=============================================================================
// MATH
//=============================================================================

Math.deg2rad = function(deg) {
	return deg * PI/180;
};

Math.rad2deg = function(rad) {
	return rad * 180/PI;
};

Math.Pythagoras = function(x1, y1, x2, y2) {
	return Math.sqrt(Math.pow((x1-x2), 2) + Math.pow((y1 - y2), 2));
};

//=============================================================================
// VECTOR
//=============================================================================

var Vector = Vector || {};

Vector.rotate2d = function(v1, v2) {};

//=============================================================================
// PHYSICS
//=============================================================================

var Physics = Physics || {};

Physics.collision = function(a, b) {
	return ((a.r + b.r) > Math.Pythagoras(a.x,a.y,b.x,b.y));
};