//Put the start of your program in a main function.
// Ask the user to enter a number from 1 through 4.
// Print the corresponding Month that matches each number. (Hint: 1 is January).

function main() {

    var expr = parseInt(prompt("Enter a number from 1 to 4"));
    switch (expr) {
        case 1:
            console.log("January");
            break;
        case 2:
            console.log("February");
            break;
        case 3:
            console.log("March");
            break;
        case 4:
            console.log("April");
            break;

    }


}
main();