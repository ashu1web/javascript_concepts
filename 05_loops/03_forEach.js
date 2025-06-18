const coding = ["js", "ruby", "java", "python", "cpp"]

 coding.forEach( function (val){  
     console.log(val);
 } )
 
 console.log("")

 coding.forEach( (item) => {
    console.log(item);
 } )

 
 console.log("")


 function printMe(item){
     console.log(item);
 }

coding.forEach(printMe)

 console.log("")

 coding.forEach( (item, index, arr)=> {
       console.log(item, index, arr);
 } )

 console.log("")

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
} )