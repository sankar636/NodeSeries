// function add(a,b){
//     console.log(a+b)
// }

// function sub(a,b){
//     console.log(a-b)
// }
// (1)
// module.exports = "sankar"

// (2)
// module.exports = add 

// (3)
// module.exports = add 
// module.exports = sub  // To overcome the override issue we need to export these in an object

// (4)
// module.exports = {
//     add,
//     sub
// }

// (5)
// module.exports = {
//     addFn: add,
//     subFn: sub
// } // We can also export them like this 

// (6)
// module.exports = {
//     add,
//     sub
// } // destructing in index.js(most prefered way to export multiple functiion )


// (7)
// Anonimous function export
exports.add = (a,b) => a+b;
exports.sub = (a,b) => a-b;
