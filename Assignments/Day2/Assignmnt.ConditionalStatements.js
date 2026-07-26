function launchBrowser(browserName){
    if(browserName=="chrome"){
        console.log("chrome")
    }
    else {
        console.log("otherwise")
    }
}
launchBrowser("chrome")

launchBrowser("edge")

function runTests(testType){
    switch(testType){
        case "smoke":
        console.log("smoke")
        break
        case "sanity":
        console.log("sanity")
         break
         case "regression":
         console.log("regression")
         break
         default:
            console.log("smoke")

    }
}
runTests("smoke")
runTests("sanity")