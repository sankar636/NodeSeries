const fs = require('fs')

// (1)->(a)Sync....
// fs.writeFileSync('./test.txt',"Hey There")
// this will create a file in current directry ain the name of test.tst and Write "Hey There" in the file
// (1)->(b)
// if we change the content "Hey There" To "Hello" then it will override the content
// fs.writeFileSync('./test.txt',"Hello")

// (2) Async
// fs.writeFile('./test.tst',"Hello World Async", (err) => {})

// ReadFile
// (3)->(a) Sync...
// const result = fs.readFileSync('./contact.txt','utf-8')
// console.log(result);

// (3)->(b) Async...
// const result = fs.readFile('./contact.txt','utf-8')
// // console.log(result); // it will give error. So
// const result = fs.readFile('./contact.txt','utf-8',(err, result) => {
//     if(err){
//         console.log("Error",err);
//     }else {
//         console.log(result);        
//     }
// })

// (4) append
// WriteFile is override the content But append is add the content in the file
// fs.appendFileSync('./test.txt', new Date().getDate().toLocaleString()) // add today date 14
//Practical application --> At the time login of user if you want to add the date and time in a file then you can you it `${new Date()} loged in\n`

// (5) Copy
// fs.cpSync('./test.txt', './copy.txt')

// (6) DeleteFile-> unlinkSync
// fs.unlinkSync('./copy.txt')

// (7) state
// console.log(fs.statSync('./test.txt'));

// (8) Folder
// fs.mkdirSync('./my-docs') // it add a new folder in the same directory

// (9) create folder with file inside it
fs.mkdirSync('my-docss/a', {recursive: true})

// Note--> We can not do this type of file handeling or other thing in normal javascript



