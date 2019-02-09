function validateForm(){
    var email = document.forms["Form"]["email"].value;
    var reg = /(\w+)\@(\w+)\.[a-zA-Z]/g;
    var username = document.getElementById("username").value;
    var fname = document.getElementById("first-name").value;
    var lname = document.getElementById("last-name").value;


    if(!reg.test(email)){
        alert("Please enter a Valid Email");

    }else{
        confirm("Is "+ email +" correct?");

        if (typeof(Storage) !== "undefined") {
                // Storing the user credentials
                localStorage.setItem("username",username);
                localStorage.setItem("email",email);
                localStorage.setItem("firstName",fname);
                localStorage.setItem("lastName",lname);
                console.log("User entered: ");
                console.log("First Name: "+fname);
                console.log("Last Name: "+lname);
                console.log("Email ID: "+email);
                console.log("Username: "+username);
                console.log("******** User "+username+" registered successfully ********");
                var previous = new Array();
                previous.push(localStorage.getItem("username"));
                if(previous != null){
                    document.getElementById("stored").innerHTML = previous
                }
                document.getElementById("username").value = "";
                document.getElementById("first-name").value = "";
                document.getElementById("last-name").value = "";
                document.forms["Form"]["email"].value = "";
        
        } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
        }
    }

}