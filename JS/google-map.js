function initMap() {
  // Map options
  var options = {
    zoom: 17,
    center: {lat:50.149689,lng:14.442821}
  };

  // New map
  var map = new google.maps.Map(document.getElementById('map'), options);

  //Icon options
  var icon = {
    url: "img/icons/map-pointer.svg", // url
    scaledSize: new google.maps.Size(50, 50), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(25, 45) // anchor
  };

  // Marker
  var marker = new google.maps.Marker({
    position: {lat:50.149654,lng:14.442825},
    map: map,
    icon: icon
  });

  //Info
  var infoWindow = new google.maps.InfoWindow({
    content: '<div class="info-box"><img src="img/Logo/u-misku2.png" alt="u-misku"/><p class="bi">Bílenecké nám. 37 <br /> Praha-Dolní Chabry <br/> 184 00</p><img class="beer" src="img/icons/cheers.svg" alt="cheers"/><p>Těšíme se na vás!</p> </div>'
  });

  marker.addListener('click', function(){
    infoWindow.open(map, marker);
  });
}
