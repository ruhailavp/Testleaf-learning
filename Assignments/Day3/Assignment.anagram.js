let firstword="silent"
let secondword="listen"

let split1=firstword.split("")
let split2=secondword.split("")
//console.log(split1)
//console.log(split2)

let sort1=split1.sort()
let sort2=split2.sort()
//console.log(sort1)
//console.log(sort2)

let areEqual=sort1.length===sort2.length && sort1.every((value,index)=>value===sort2[index])
console.log(areEqual)

let word1="hello"
let word2="world"
let splithello=word1.split("")
let splitworld=word2.split("")

let sorthello=splithello.sort()
let sortworld=splitworld.sort()

let isEqual=sorthello.length===sortworld.length && sorthello.every((value,index)=>value===sortworld[index])
console.log(isEqual)