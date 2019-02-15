function checkError(){
    var number = document.getElementById("number").value;
    var errorMessage = document.getElementById("here");
    errorMessage.innerHTML = "";

    try{
        if(number == ""){
            console.log("User entered: "+number);
            console.error("Error: Enter something. Field is empty");
            throw {
                error: "Enter something. Field is empty"
                }
        }else if(isNaN(number)){
            console.log("User entered: "+number);
            console.error("Error: Please enter a valid number and not alphabets");
            throw {
                error: "Please enter a valid number and not alphabets"
            }
        }
        console.log("User entered: "+number);
        errorMessage.innerHTML = "You entered "+ number;
    }catch(exception){
        errorMessage.innerHTML = "Error has occured: " + exception.error;
    }
    finally{
        document.getElementById("number").value = "";
    }
}