
console.log('Jai Sri Ram')

// Module
// const Module = require('Module.js') this give error we need to give the directary of the file
// (1)
// const name = require('./Module.js')
// console.log(name) // this Print {}. To Access The Function We need to Export The Module.js from that file and need to import here

// (2)

// const Math = require('./Module.js')
// console.log(Math(2,3));

// (3)
// const Math = require('./Module.js')
// console.log(Math(5,4)); // this print 1 because sub over ride the add function. 

// (4)
// const Module = require('./Module.js')
// console.log(Module.add(2,5));
// console.log(Module.sub(7,5));

// (5)
// const Module = require('./Module.js')
// console.log(Module.addFn(2,5));
// console.log(Module.subFn(7,5));

// (6)
// We can import Them by destructuring
// const { add, sub } = require('./Module.js')
// console.log(add(2,5));
// console.log(sub(7,5));

// (7)
// Anonimous function
const Module = require('./Module.js')
console.log(Module);
// this prints { add: [Function (anonymous)], sub: [Function (anonymous)] } 

// Note --> Also Node.js has their own build in packages that we can import as per required. Example --> 'fs', 'http', 'crypto' etc

const fs = require("fs")



