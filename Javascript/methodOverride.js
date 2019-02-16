class Company{
    constructor(name,designation,salary,gender,time){
        this.name = name;
        this.designation = designation;
        this.salary = salary;
        this.gender = gender;
        // this.time = time;
    }

    works(time){ 
        this.time = time
        console.log(`\n${this.name} works for ${this.time} hours in a day\n`);
    }
}

class boardOfMembers extends Company{
    works(time){
        this.time = time
        console.log(`\n${this.name} works for more hours in a day which is equal to ${this.time}\n`);
    }
}

let ceo = new boardOfMembers("Steve Jobs","CEO","$150K","Male");
let employee = new Company("Rohan","Employee","$40k","Male");

ceo.works(14);
employee.works(9);
