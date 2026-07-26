const { time } = require("console")

//Task 1: Function Declaration
function userProfile(name){

    console.log(`Hello ${name}`)

                        }
   userProfile("Ruhaila")

 //Task 2: Arrow Function

let double=(a)=>2*a
let z=3
let b=double(z)
console.log(`the double value of ${z} is ${b}`)

//Task 3: Anonymous Function
      //option1
function printName(string_param){
    console.log('Printing parameer values is ${string_param} after 5 sec')
}

setTimeout(printName, 5000,"Ruhaila") // Set time out function takes 2 parameters, 
                            // 2nd parameter is the time at which the function mentioned in the first parameter should execute. 
                            // the below lines will be execute immediately and wont wait for this time function to complete. 
                            // Hence we will below line prints string "hellooooo world" before 
                            // the string "Printing after 5 sec" (2nd sting printed only after the timeout)

console.log("hellooooo world")


    // Arrow Function
let printNameHere = () => { console.log('Printing after 5 sec')}

setTimeout(printNameHere, 5000) // Set time out function takes 2 parameters, 
                            // 2nd parameter is the time at which the function mentioned in the first parameter should execute. 
                            // the below lines will be execute immediately and wont wait for this time function to complete. 
                            // Hence we will below line prints string "hellooooo world" before 
                            // the string "Printing after 5 sec" (2nd sting printed only after the timeout)

console.log("hellooooo world")

    // Arrow Function without reference name
setTimeout( ()=>{console.log('Printing after 5 sec')}, 5000) // Set time out function takes 2 parameters, 
                            // 2nd parameter is the time at which the function mentioned in the first parameter should execute. 
                            // the below lines will be execute immediately and wont wait for this time function to complete. 
                            // Hence we will below line prints string "hellooooo world" before 
                            // the string "Printing after 5 sec" (2nd sting printed only after the timeout)

console.log("hellooooo world")

//Task 4: Callback Function
function getuserdata(fnction){
    const user={Name:"Ruhaila",Age:30}
    setTimeout(fnction,3000,user);
}

function printuser(data){
    
    console.log("user info is",data)
}


getuserdata(printuser)

