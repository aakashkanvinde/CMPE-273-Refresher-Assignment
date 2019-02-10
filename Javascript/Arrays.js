console.log("*******Javascript Arrays*******");
var electricalStudents = new Array("Ruturaj", "Saurabh", "Rupesh", "Anna", "Parag");
var softwareStudents = new Array("Aakash", "Sachin", "Tanmay", "Vivek", "Lucky");
console.log("Electrical Students: ");
console.log(electricalStudents);
console.log("Software Students: ");
console.log(softwareStudents);

// Array concatenation operation
var concatenation = electricalStudents.concat(softwareStudents);
console.log("CONCATENATION OPERATION: All students of both departments: ");
console.log(concatenation);

// Array Push operation
softwareStudents.push("Neeraj");
console.log("PUSH OPERATION: New student enrolled in software department: ");
console.log(softwareStudents);

// Array Pop operation
electricalStudents.pop("Neeraj");
console.log("POP OPERATION: One student failed in electrical department: ");
console.log(electricalStudents);

// Array Sort operation
concatenation.sort();
console.log("SORT OPERATION: All the students sorted in ascending order: ");
console.log(concatenation);

// Array Reverse operation
concatenation.reverse();
console.log("REVERSE OPERATION: All the students sorted in descending order: ");
console.log(concatenation);

// Array length operation
console.log("LENGTH OPERATION: Total Number of students in the university:  "+ concatenation.length);