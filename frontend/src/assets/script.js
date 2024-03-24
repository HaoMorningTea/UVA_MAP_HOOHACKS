function initMap() {

    var location = {lat: 0, lng:0};
    var map = new google.maps.Map(document.getElementById("map"),{
       zoom: 4,
       center: location
    });

    new google.maps.Marker({
        position: {lat: 38.0295, lng:-78.476677},
        map,
        title: "Hello World!",
      });   
}
