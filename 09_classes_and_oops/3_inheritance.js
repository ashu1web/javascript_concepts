class User{
    constructor(username,age=3){
        this.username=username
        this.age=age
    }

    logMe(){
        console.log(`The user name is logIn: ${this.username}`)
    }
    enrcypteName(username){
          console.log(`The user name is logIn: ${this.username}abc`)
    }
}

class Teacher extends User{
     constructor(username,id){
        super(username)                                            //--->Instead of call() we have used super() now super() has set the property
        this.id=id
     }

     genrateId(){
        console.log(`The id is generated: ${this.id}`)
        this.logMe()
     }

     //why not this this.logMe() outside generateId()
     //Because the class body is not a place where executable code runs — it's just where you define methods.
     // JavaScript doesn’t allow arbitrary statements (like this.logMe()) outside of methods in a class.
}

   function capitalizeName(username){
          console.log(`The user name is capitalized: ${this.username.toUpperCase()}`)
   }

const user1=new Teacher("Ashutosh","1","3")
user1.genrateId()
user1.logMe()
console.log(user1.age)


capitalizeName.call(user1,"Ashutosh")                        // --->call
const hi=capitalizeName.bind(user1,"Ashutosh")               //---->bind
hi()
user1.enrcypteName("Ashutosh")