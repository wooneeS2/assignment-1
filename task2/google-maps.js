const googleRed = "#C90E20";

const wuhan = { lat: 30.777779, lng: 114.211827 };
const secondMapCenter = { lat: 36.526584, lng: 124.588121 };
const incheonAirport = { lat: 37.458982, lng: 126.442953 };
const japan = { lat: 36.114623, lng: 139.601028 };
const incheonHospital = { lat: 37.478538, lng: 126.668512 };

let screenWidth = screen.width;
let secondMapZoom = screenWidth < 500 ? 4 : 5;

function initMap() {
  //구글맵 로드
  map = new google.maps.Map(document.getElementById("map1"), {
    center: wuhan,
    zoom: 6,
  });
  //구글맵 마커 설정
  new google.maps.Marker({
    position: wuhan,
    map: map,
    icon: {
      path: google.maps.SymbolPath.CIRCLE,
      scale: 54,
      strokeColor: googleRed,
      strokeWeight: 3,
    },
  });

  map = new google.maps.Map(document.getElementById("map2"), {
    center: secondMapCenter,
    zoom: secondMapZoom,
  });

  new google.maps.Marker({
    position: wuhan,
    icon: { url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png" },
    map: map,
  });
  new google.maps.Marker({
    position: incheonAirport,
    icon: { url: "http://maps.google.com/mapfiles/ms/icons/pink-dot.png" },
    map: map,
  });

  new google.maps.Marker({
    position: japan,
    icon: { url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png" },

    map: map,
  });
  //경로표시
  const flightPlanCoordinates = [wuhan, incheonAirport, japan];
  new google.maps.Polyline({
    path: flightPlanCoordinates,
    editable: false,
    strokeColor: googleRed,
    strokeOpacity: 1.0,
    strokeWeight: 2,
    map: map,
  });

  map = new google.maps.Map(document.getElementById("map3"), {
    center: incheonAirport,
    zoom: 13,
  });
  new google.maps.Marker({
    position: incheonAirport,
    map: map,
    icon: {
      path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
      scale: 6,
      strokeColor: googleRed,
      strokeWeight: 4,
    },
  });
  map = new google.maps.Map(document.getElementById("map4"), {
    center: incheonHospital,
    zoom: 16,
  });

  new google.maps.Marker({
    position: incheonHospital,
    map: map,
  });
}
