var c = 300
let a = 300
if (true) {
    let a = 10
    console.log("INNER: ", a);
    var c=100
    
}

 console.log("OUTER a",a);
 console.log("Outer c changed thats why not use var",c);



console.log(addone(5))
function addone(num){
    return num + 1
}


console.log(addTwo(5))               //----->Hoisitng error
const addTwo = function(num){        //cannot access before fn declaration if we access fn by this method
    return num + 2
}
