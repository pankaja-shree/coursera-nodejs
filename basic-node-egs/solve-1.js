var rect = require('./rect-1');

function solveRect(l,b) {
    console.log('Length: '+ l + ' and Breadth: '+ b + ' Area: ' +rect.area(l,b) + ' Perimeter: '+rect.perimeter(l,b));
}

solveRect(2,4);