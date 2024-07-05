// console.log('Hello');
const { ifError } = require('assert');
const fs = require('fs');

/* method for readFile */
fs.readFile('./test.txt',"utf-8",(err,data)=>{
    if (err) {
        console.log("err", err);
    }else{
        console.log("The contents of the file 'test.txt'",data);
    }
})

fs.appendFile("test.txt", "\nContent appended to the file 'test.txt'",(err)=>{
    if (err) {
        console.log(err);
    }else{
        console.log("Content appended to the file 'test.txt'");
    }
})



/* method for Deleting file */
fs.unlink("test.txt",(err)=>{
    if (err) {
        console.log("error", err);
    }else{
        console.log("File 'test.txt' deleted");
    }
})


fs.writeFile("text.txt","hello file Created",(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("File 'text.txt' created");
    }
})

fs.rename("test.txt","new.txt",(err)=>{
    if (err) {
        console.log(err);
    }else{
        console.log("File 'test.txt' renamed to 'new.txt'");
    }
})