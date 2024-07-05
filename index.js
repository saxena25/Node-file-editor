// console.log('Hello');
const fs = require('fs');

// console.log(process.argv)
const operations = process.argv[2];
const file = process.argv[3];
const content = process.argv[4];

/* method for readFile */

function readTheFile(file){
    fs.readFile(file,"utf-8",(err,data)=>{
        if (err) {
            console.log("err", err);
        }else{
            console.log("The contents of the file 'test.txt'",data);
        }
    })
}

function appendTheFile(file){
    fs.appendFile(file, "\nContent appended to the file 'test.txt'",(err)=>{
        if (err) {
            console.log(err);
        }else{
            console.log("Content appended to the file 'test.txt'");
        }
    })
}



/* method for Deleting file */
function deleteFile(file){
    fs.unlink(file,(err)=>{
        if (err) {
            console.log("error", err);
        }else{
            console.log("File 'test.txt' deleted");
        }
    })
}

function createFile(file){
    fs.writeFile(file,"hello file Created",(err)=>{
        if(err){
            console.log(err);
        }else{
            console.log("File 'text.txt' created");
        }
    })
}

function renameTheFile(file, content){
    fs.rename(file, content,(err)=>{
        if (err) {
            console.log(err);
        }else{
            console.log("File 'test.txt' renamed to 'new.txt'");
        }
    })
}

switch (operations) {
    case "read":
        if(file){
            readTheFile(file);
        }
        break;

    case "delete":
        if(file){
            deleteFile(file);
        }
        break;

    case "append":
        if(file){
            appendTheFile(file);
        }
        break;

    case "create":
        if(file){
            createFile(file);
        }
        break;

    case "rename":
        if(file && content){
            renameTheFile(file,content);
        }
        break;

    default:
        console.log(`Invalid Operation ${operations}`);
        break;
}