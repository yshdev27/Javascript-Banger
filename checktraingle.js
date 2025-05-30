let a=7,b=7,c=8;

// check the type of triangle

if(a === b && b === c) {
    console.log("This is an equilateral triangle");
}
else if(a === b || b === c || a === c) {
    console.log("This is an isosceles triangle");
}else {
    console.log("This is a scalene triangle");
}