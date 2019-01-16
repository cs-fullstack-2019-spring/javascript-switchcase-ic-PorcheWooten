//Put the start of your program in a main function. Ask the user to enter a day of the week. 
// Print the corresponding Spanish word. 
// If they do not input a day of the week say "That is not a day of the week in English."
// lunes. Monday.
// martes. Tuesday.
// miércoles. Wednesday.
// jueves. Thursday.
// viernes. Friday.
// sábado. Saturday.
// domingo. Sunday.

function main() {
    var expr = prompt("Enter a day of the week");
    switch (expr) {
        case "Monday":
            console.log("lunes");
            break;
        case "Tuesday":
        console.log("martes");
            break;
        case "Wednesday":
            console.log("miércoles");
            break;
        case "Thursday":
            console.log("jueves");
            break;
        case "Friday":
            console.log("viernes");
            break;
        case "Saturday":
            console.log("sábado");
            break;
        case "Sunday":
            console.log("domingo");
            break;
        default:
            console.log("Sorry that is not a day of the week.");
    }

}
main();