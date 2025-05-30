// if-else

let isPremium = true;

if (isPremium) {
    console.log("Enjoy the Amazon Prime");
}
else {
    console.log("Please subscribe to Amazon Prime");
}


//else-if-else

let isVIP = true;
let isPrem = false;


if(isVIP) {
    console.log("Welcome to the VIP section");
}else if(isPrem) {
    console.log("Welcome to the Premium section, upgrade your account for more benefits");
}else {
    console.log("Please subscribe for viewing the content");
}



// nested conditionals


let hasPrime = false;
let hasDiscoveryPlus = false;
if (hasPrime) {
    if (hasDiscoveryPlus) {
        console.log("Enjoy Discovery Plus content");
    } else {
        console.log("Please enjoy amazon content only");
    }
}else{
    console.log("You dont have access to both Prime and Discovery Plus content.");
}

