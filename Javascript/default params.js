console.log("\n***** Javascript - Default Parameters *****\n\n")
var name, age, gender;
function person(name, gender, age = 50){
    this.name = name;
    this.age = age;
    this.gender = gender;
    return(console.log("Hello I am a "+gender+". My name is "+name+" and I am "+age+" years old\n\n"+"AGE is the default parameter and takes a default value of 50\n"));
}

person("Aakash", "Male");