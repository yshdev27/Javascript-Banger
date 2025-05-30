let x = prompt("Enter a number to check if it is odd or even:");
x = parseInt(x); // Convert input to an integer

if(x % 2 === 0) {
    console.log(x + " is even");
}else {
    console.log(x + " is odd");
}