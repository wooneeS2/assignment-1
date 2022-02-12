function initMap() {
  map = new google.maps.Map(document.getElementById("map1"), {
    center: { lat: 30.485756, lng: 106.06061 },
    zoom: 5.5,
  });
  new google.maps.Marker({
    position: { lat: 30.472596, lng: 114.311268 },
    map: map,
    icon: {
      path: google.maps.SymbolPath.CIRCLE,
      scale: 54,
      strokeColor: "#ff0000",
      strokeWeight: 3,
    },
  });

  map = new google.maps.Map(document.getElementById("map2"), {
    center: { lat: 36.526584, lng: 124.588121 },
    zoom: 5,
  });

  new google.maps.Marker({
    position: { lat: 30.777779, lng: 114.211827 },
    icon: { url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png" },
    map: map,
  });
  new google.maps.Marker({
    position: { lat: 37.458982, lng: 126.442953 },
    icon: { url: "http://maps.google.com/mapfiles/ms/icons/pink-dot.png" },
    map: map,
  });

  new google.maps.Marker({
    position: { lat: 36.114623, lng: 139.601028 },
    icon: { url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png" },

    map: map,
  });
  const flightPlanCoordinates = [
    new google.maps.LatLng(30.777779, 114.211827),
    new google.maps.LatLng(37.458982, 126.442953),
    new google.maps.LatLng(36.114623, 139.601028),
  ];
  const flightPath = new google.maps.Polyline({
    path: flightPlanCoordinates,
    editable: false,
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 2,
    map: map,
  });

  map = new google.maps.Map(document.getElementById("map3"), {
    center: { lat: 37.458982, lng: 126.442953 },
    zoom: 13,
  });
  new google.maps.Marker({
    position: { lat: 37.461957, lng: 126.430676 },
    map: map,
    icon: {
      path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
      scale: 6,
      strokeColor: "#ff0000",
      strokeWeight: 4,
    },
  });
  map = new google.maps.Map(document.getElementById("map4"), {
    center: { lat: 37.478538, lng: 126.668512 },
    zoom: 16,
  });

  new google.maps.Marker({
    position: { lat: 37.478859, lng: 126.668632 },
    map: map,
  });
}
