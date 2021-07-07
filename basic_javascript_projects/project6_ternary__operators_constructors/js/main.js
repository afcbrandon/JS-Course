function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "you are too short":"you are tall enough my dawg";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}