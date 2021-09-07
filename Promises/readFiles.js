// 1. Get file names (from the files in data.zip) using fs module's readdir. 
// 2. Loop through and print off the name of each file in the dir
// 3. Using readFile (NOT readFileSync), read the files and in the callback, 
//print the filename. Note: They will not be the same as in the previous step. 
// 4. Look at the file contents, count up the total number of the string "gotYa" in each. Print an array that has the count for each file in ascending order. For a little more work, make it an object with a key of file name, value of count instead. 
// 5. As soon as the full contents of any single are read, print them out. Do not wait for any other file to complete.
 
var fs = require('fs');
 
fs.readdir('./Promises/data', (err, files) => {
 const filePromises = files.map((fileName, index) =>{
     return new Promise((resolve,reject)=>{
        fs.readFile(`./Promises/data/${fileName}`,(err,data)=>{
            //console.log(fileName);
            if(err) throw err;
            resolve(String(data));
        });
     })
 });
 Promise.all(filePromises).then((fileContentArray)=>{
    const arrayCount = fileContentArray.map((fileContents)=>{
        const matches = fileContents.match(/gotYa/g);
        if(matches){
            return matches.length
        } else {
            return 0
        }
    });
    const orderedArray = arrayCount.sort();
    console.log(orderedArray);
 })
});

 