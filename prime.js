#!/usr/bin/env node
var fs = require('fs');
var outfile = "prime.txt";
var primeArray = []; 
for (var i = 2; i<= 100; i++)
{
    var num = 0;
    for (var j = 1; j <= i; j++)
    {
        if (i % j === 0)
        {
            num+=1;
        }
    }
    if (num === 2){
        primeArray.push(i);
    }
}
var out = primeArray;
//var out = "A startup is a business built to grow rapidly.\n";
fs.writeFileSync(outfile, out);  
console.log("Script: " + __filename + "\nWrote: " + out + "To: " + outfile);