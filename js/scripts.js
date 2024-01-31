// Function to initialize Google Map
function initMap() {
    // Coordinates for the map center
    var myLatLng = { lat: 45.975297, lng: -66.635631 };

    // Create a new Google Map object
    var map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng, // Set the center to the specified coordinates
        zoom: 15 // Set the initial zoom level(0-21) ZOOM VALUES AVAILABLE
    });

    // Create a marker on the map at the specified coordinates
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map, // Attach the marker to the map
        title: 'My Home' // Set a title for the marker (displayed on hover)
    });
}