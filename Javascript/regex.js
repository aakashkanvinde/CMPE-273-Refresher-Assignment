function regularExpression() {
    document.getElementById("digits").value = "";
	var email = document.getElementById("email").value;
    console.log("User entered "+email+" as his email");
    var digits = email.match(/\d+/g);

	
	if(digits != null) {
		for(var i = 0; i < digits.length; i++) {
			document.getElementById("digits").value += digits[i] + "\r\n";
        }
        console.log("On applying the regular expression '/\d+/g' some digits are encountered and extracted from the email which are: "+digits);	
	}else{
        console.log("No digits are present in the email id entered by the user");
    }
}