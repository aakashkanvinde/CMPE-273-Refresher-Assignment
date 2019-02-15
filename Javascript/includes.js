var statement = "Sometimes when you innovate, you make mistakes. It is best to admit them quickly, and get on with improving your other innovations.";
// var word = "innovate";

console.log("\n***** Javascript - includes *****\n");
console.log("Statement: "+ statement+"\n");
console.log(`The word "${"innovate"}" ${statement.includes("innovate")? 'is included' : 'is not included'} in the given statement \n`);

var list = new Array("Aakash", "Sachin", "Tanmay", "Vivek", "Lucky");
console.log(`The list ${list.includes("Aakash") ? 'includes' : 'does not include'} the name "${"Aakash"}" \n`)