// Scopes
//accessibility of variabless

//Global scopes
// these variables are visible through the entire script/program
let x = 0;

// Local Scopes
// A local scope has access to its own variables as
//well as its outer scope variables. It does not 
//have access to it's inner scope.

// Examples
// functions, conditions

function logToConsole(){
    let y = 1;
    console.log(x.y);
}
logToConsole();

