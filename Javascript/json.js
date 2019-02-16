var list = '{"university":[' +
'{"department":"Engineering and Information Technology","school":": Charles W. Davidson College of Engineering" },'+
'{"department":"Health","school":": College of Health and Human Sciences" },'
+
'{"department":"Humanities","school":": College of Humanities and the Arts" },'
+
'{"department":"Business","school":": Lucas College and Graduate School of Business" },'
+
'{"department":"International Studies","school":": COLLEGE OF PROFESSIONAL AND GLOBAL EDUCATION" }]}';

console.log("\n***** Javascript - JSON*****\n");
console.log("College Names List at San Jose State University\n\n");
console.log(list);
jsonObject = JSON.parse(list);
console.log("\n\n"+jsonObject.university[4].department + " " + jsonObject.university[4].school+"\n\n");