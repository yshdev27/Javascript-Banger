function isEven(num) {
    if( num % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}

for(let i=0; i<25; i++){
    let result = isEven(i);
    if(result === true) {
        console.log(i + " is even");
    }else {
        console.log(i + " is odd");
    }
}