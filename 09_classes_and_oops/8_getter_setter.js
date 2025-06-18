class User {
    constructor(email, password){
        this._email = email;
        this._password = password
    }

    get email(){
        return this._email.toUpperCase()           //changed the name from email to _email to avoid race condition bw constructor and setter
    }
    set email(value){                              //changed the name from email to _email to avoid race condition bw constructor and setter
        this._email = value
    }

    get password(){
        return `${this._password}hitesh`
    }

    set password(value){
        this._password = value
    }
}

const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.email);                           //Note while calling getter we are using hitesh.email not hitesh.email()