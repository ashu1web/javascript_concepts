//1 way1 of using .call()
function capitalizeName(username){
      console.log(`This name is capitalized ${this.username.toUpperCase()}`)
}

function enrycptUsername(username,email,id){
            this.username=username
            this.email=email
            this.id=id
        
        console.log(`This name is encrypted ${this.username}abc`)
        capitalizeName.call(this,username)
}


const user1=new enrycptUsername("Ashutosh","ashu@gmail.com","1")
console.log(user1)



//2)  Way2 of using call()                     
const user2 = {
    name: "Shivani",
    email: "shivani@gmail.com",
    id: "2",
     greet() {
        console.log(`Hi, I am ${this.name}`);
    }
};

function lowerName(username) {
    console.log(`This name is in lower letter: ${this.name.toLowerCase()}`);
}

lowerName.call(user2, "Shivani");
user2.greet()

/*****************************************General syntax of .call()***************************************************************/
//functionName.call(obj(or its ref),argument if taken by the fn functonName)==>                        fn.call(obj,arg1,arg2,....)


//.call() is used to give a function the context of an object — so this inside the function refers to that object.

//.call() holds the context of above UserName fn values after it execution

//.call() is a method in JavaScript used to invoke a function and explicitly set the value of this inside that function.
//It allows you to call a function as if it belongs to a different object.
