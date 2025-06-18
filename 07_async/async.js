
let a=setInterval(() => {
    console.log("async function after two seconds")
    sayHello()
}, 2000);


function sayHello(){
    console.log("Hello")
    clearInterval(a)
}


