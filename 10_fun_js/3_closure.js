function add(num1,num2){
    function done(){
        console.log("hi")
        return num1+num2
    }
    return done                            //outer fn finishes here because we have just passed the ref of done not done()
}
  
const a=add(2,3)                          //Here a is getting a function defination {not the return num1+num2} which is why in next step we are doing a()
console.log(a())

//A closure is when a function remembers and keeps access to variables from its outer function, even after the outer function has finished.