console.log("\nTop 5 Rich people in the World\n");

const richest = require('./export.js');

function richPersonList(){
    console.log("\n"+richest.one+" tops the list and is the richest person in the world");
    console.log("\n"+richest.two+" is second on the list");
    console.log("\n"+richest.three+" is the third richest person in the world");
    console.log("\n"+richest.four+" is the fourth richest person in the world");
    console.log("\n"+richest.five+" is the fifth richest person in the world\n");
}

richPersonList();