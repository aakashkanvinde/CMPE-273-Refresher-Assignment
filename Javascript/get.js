console.log("\n***** Javascript - Use of Get *****");
class Student {
    constructor(name, age, gender, department, enrolled, dropped) {
      this.name = name;
      this._enrolled = enrolled;
      this.age = age;
      this.department = department;
      this.gender = gender;
      this._dropped = dropped;
    }

    // Get Information
      getDetails() {
      return ("\nStudent: "+this.name+ "\nBelongs to: "+this.department+"\nAge: "+this.age+"\nGender: "+this.gender);
    //   +"\nEnrolled Subject: "+this.enrolled+"\n Dropped Subject: "+this.dropped);
    }

    //Getter methods
    get enrolled(){
       return "Enrolled Subject: "+this._enrolled;
    }
    get dropped(){
        return "Dropped Subject: "+this._dropped;
    }
    
    //Setter Methods
    set dropped(value){
        this._dropped = value;
    }

    set enrolled(value){
        this._enrolled = value;
    }

}

  let newStudent1 = new Student("Sachin Waghmode",25,"Male","Software Engineering","CMPE 220: System Software","None");
  console.log("\n");
  console.log(newStudent1.getDetails());
  console.log("\n\n*******************");
  console.log(newStudent1.enrolled);
  console.log("\n");
  console.log(newStudent1.dropped);
  console.log("\n*******************");
  newStudent1.dropped = "CMPE 220: System Software";
  newStudent1.enrolled = "CMPE 273: Enterprise Distributed Systems";
  console.log("\n*******************");
  console.log(newStudent1.enrolled);
  console.log("\n");
  console.log(newStudent1.dropped);
