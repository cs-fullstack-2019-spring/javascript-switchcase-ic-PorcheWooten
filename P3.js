//Put the start of your program in a main function.
// Ask the user what size shirt they want to order (you decide the shirt sizes).
// Once they select the size of shirt add their selection to an array.
//
// Challenge: Using problem 3, after the user selects a shirt size ask them if they want to add another shirt to the cart.
// If they say yes, add another shirt to the array,
// if they say no exit the function, if they enter something else say ERROR and let them pick yes/no again.

function main() {
    var expr = prompt("What your shirt size?");
    switch (expr) {
        case "s":
            console.log("small");
            break;
        case "m":
            console.log("medium");
            break;
        case "l":
            console.log("large");
            break;
        case "xl":
            console.log("extra large");
            break;
        default:
            console.log("Sorry shirt size not available");
    }
var selectedSize = [{ShirtSize:expr}];
    console.log(selectedSize);

}
main();