// call back functions
// a call back function is a function that is passed
//in as an argument in another function.

function excuteThreeTimes(callback){
  for(let i = 0; i < 3; i++){
    callback();
  } 
}

function printFullName(){
    console.log('John Doe')
}

excuteThreeTimes(printFullName);
