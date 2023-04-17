var o = { then: function(){} }

var b = Object.create(o)

b.someStuff = "cool"
b.otherStuff = "not so cool"

let check = b.hasOwnProperty("then")
console.log(check)