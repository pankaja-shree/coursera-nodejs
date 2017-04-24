var rect = {
    perimeter: function (x,y) {
        return (2*(x+y));
    },
    area: function(x,y){
        return (x*y)
    }
};

function solveRect(l,b) {
    console.log('Length: '+ l + ' and Breadth: '+ b + ' Area: ' +rect.area(l,b) + ' Perimeter: '+rect.perimeter(l,b));
}

solveRect(2,4);