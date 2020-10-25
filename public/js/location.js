$(document).ready(function() {
  //ajax call to DB where the location of res or res's will be stored.
  $(function() {
    $(".resName").on("click", function(event) {
      var lat = $(this).data("lat");
      var lng = $(this).data("lng");
      $.ajax("/reslocation/" + lat + lng, {
        method: "GET",
        data: {
          location: true,
        },
      })
        .then(function() {
          console.log("this res has been located!");
        })
        .catch(function(error) {
          console.log(error);
        });
    });
  });

  var lat = 41.161563; //supply by DB
  var lng = -73.417751;
  ("use strict");
  // In this example, we center the map, and add a marker, using a LatLng object
  // literal instead of a google.maps.LatLng object. LatLng object literals are
  // a convenient way to add a LatLng coordinate and, in most cases, can be used
  // in place of a google.maps.LatLng object.
  let map;
  function initMap() {
    const mapOptions = {
      zoom: 18,
      center: {
        lat: lat,
        lng: lng,
      },
    };
    map = new google.maps.Map(document.getElementById("map"), mapOptions);
    const marker = new google.maps.Marker({
      // The below line is equivalent to writing:
      // position: new google.maps.LatLng("", "")
      position: {
        lat: lat,
        lng: lng,
      },
      map: map,
    }); // You can use a LatLng literal in place of a google.maps.LatLng object when
    // creating the Marker object. Once the Marker object is instantiated, its
    // position will be available as a google.maps.LatLng object. In this case,
    // we retrieve the marker's position using the
    // google.maps.LatLng.getPosition() method.
    const infowindow = new google.maps.InfoWindow({
      content: "<p>Marker Location:" + marker.getPosition() + "</p>",
    });
    google.maps.event.addListener(marker, "click", () => {
      infowindow.open(map, marker);
    });
  }
  initMap();

  $.ajax({
    url:
      "https://weather.ls.hereapi.com/weather/1.0/report.json?product=observation&latitude=41.161563&longitude=-73.417751&oneobservation=true&apiKey=suY8vNGrNiypJpsiPBON8r7zwNCsqEF1BIS6-MOSH5A",
    type: "GET",
    success: function(data) {
      console.log(data);
      $("#city").text(
        "This restaurant is located in " +
          data.observations.location[0].observation[0].city
      );
      $("#temp").text(
        "The current temperature is " +
          data.observations.location[0].observation[0].temperature +
          " degrees Fahrenheit"
      );
      $("#humidity").text(
        "The Humidity is " +
          data.observations.location[0].observation[0].humidity +
          "%"
      );
      //has to change to manipulate the DOM, use jquery to show weather

      $("#skydescription").text(
        data.observations.location[0].observation[0].description
      );
      $("#wind").text(
        "The wind speed today is " +
          data.observations.location[0].observation[0].windSpeed
      );
    },
  });
});
