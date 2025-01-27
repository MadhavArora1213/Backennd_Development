const fs = require("fs");
//write file method
// fs.writeFile("file.txt","how are you",function(err){
//      if(err) console.error(err);
//      else console.log("File created");
// })

//append file method
// fs.appendFile("file.txt","how are you",function(err){
//      if(err) console.error(err);
//      else console.log("File created");
// })

//Rename file method
// fs.rename("file.txt","first.txt",function(err){
//      if(err) console.error(err);
//      else console.log("File created");
// })

//Copy file method

// fs.copyFile("first.txt","./copy/second.txt",function(err){
//      if(err) console.error(err);
//           else console.log("copy successfully");
// });

//unlink file method

// fs.unlink("./copy/second.txt",function(err){
//      if(err) console.error(err);
//           else console.log("removed");
// });

//rmdir method

// fs.rm("./copy", { recursive: true }, function (err) {
//   if (err) console.error(err);
//   else console.log("Directory removed");
// });

//read file method 

fs.readFile("first.txt","utf8",function(err,data){
     if(err) console.error(err);
     else console.log(data);
});