// callback = a function that is passed as an argument
//                    to another function.

//                    used to handle asynchronous operations:
//                    1. Reading a file
//                    2. Network requests
//                    3. Interacting with databases

//                    "Hey, when you're done, call this next."

hello(goodbye);

function hello(callback){
    console.log("Hello!");
    callback();
}

function goodbye(){
    console.log("Goodbye!");
}

sum(displaynumber,2,4)

function sum(callback,num1,num2){
    result=num1+num2
    callback(result)
}

function displaynumber(result){
    console.log("Callback-->",result)
}


