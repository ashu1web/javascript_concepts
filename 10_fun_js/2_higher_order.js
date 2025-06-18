sum(displaynumber,2,4)

function sum(callback,num1,num2){
    result=num1+num2
    callback(result)
}

function displaynumber(result){
    console.log("Callback-->",result)
}


//HERE higher order fn is sum and displaynumber is a callback