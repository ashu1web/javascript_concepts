class User {
    constructor(username, email, id) {
        this.username = username;
        this.email = email;
        this.id = id;
    }

    enrycptUsername(username) {
        console.log(`The username is encrypted now: ${this.username}abc`);
        this.captialLetter(username); // Correct way to call the method
    }

    captialLetter(username) {
        console.log(`The username is capitalized now: ${this.username.toUpperCase()}`);
    }
}

const user1 = new User("Ashutosh", "ashu@gmail.com", '1');
console.log(user1);

user1.enrycptUsername("Ashutosh"); 


/************************************************Behind the scene*******************************************/

/*
function User(username,email,id){
            this.username=username
            this.email=email
            this.id=id
}


User.prototype.enryptUserName=function(username){
          console.log(`The username is encrypted now: ${this.username}abc`);
          this.capitalizeName(username)                                            //OR   this.capitalizeName.call(this,username) 
}

User.prototype.capitalizeName=function(username){
            console.log(`The username is capitalize now: ${this.username.toUpperCase()}`);
}

const user1=new User("Ashutosh","ashu@gmail.com","1")
console.log(user1)
user1.enryptUserName("Ashutosh")

*/