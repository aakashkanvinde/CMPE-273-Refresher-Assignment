console.log("\n***** Javascript - Objects.assign *****");
function verify(){
    let cloud = {
        professor: "Paul Nyugen",
        marks: "90%",
        grade: "A-"
    };

    let compArchitecture = {
        professor: "Bret Hartbeck",
        marks: "95%",
        grade: "A+"
    };

    console.log("\nSubject: Cloud, "+ "Professor: "+cloud.professor+" Marks: "+cloud.marks+" Grade: "+cloud.grade);
    console.log("\nSubject: Computer Architecture, "+ "Professor: "+compArchitecture.professor+" Marks: "+compArchitecture.marks+" Grade: "+compArchitecture.grade);

    let verifiedCloud = {
        marks: "82%",
        grade: "B"
    };

    let verifiedCompArchitecture = {
        professor: "Ahmet Bindal",
        capacity: 50
    };

    const finalOutput1 = Object.assign(cloud,verifiedCloud);
    const finalOutput2 = Object.assign(compArchitecture,verifiedCompArchitecture);

    console.log("\n");
    console.log(finalOutput1);
    console.log("\n");
    console.log(finalOutput2);
    
}
verify();