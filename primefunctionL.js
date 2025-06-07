
let x=13;
function isPrime(x){

    for(i=2; i<=x-1; i++){
        if(x % i === 0){
            return false; // Not a prime number
        }
    }
    return true; // Is a prime number
}