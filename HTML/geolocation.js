function knowLocation() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(displayLocation);
        console.log("*** Displaying User's Current Location ***");
    }
    else {
        document.getElementById("location").innerHTML = "User Tracking unsuccessful. This feature is not supported by this browser";
        console.error("*** User Tracking unsuccessful. This feature is not supported by this browser ***");
    }
}

function displayLocation(position) {
    document.getElementById("location").innerHTML = "User's Latitude: " + position.coords.latitude + "<br>User's Longitude: " + position.coords.longitude + "<br>";

    console.log("User's Latitude: " + position.coords.latitude + "\nUser's Longitude: " + position.coords.longitude + "\n");
}