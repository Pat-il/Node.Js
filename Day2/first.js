console.log("KG Coding is the Best Channel To Learn Anything Technology :) ");

const fs = require('fs');
fs.writeFile("output.txt", "Writing a Output", (err) => {
  if(err) console.log("Your File Getting Error")
    else console.log("Your Successfully Executed File.")
});