      var map;
      var locations = [
             ['İstanbul', 41.015137,28.979530],
             ['Edirne', 41.674965,26.583481]
        ];
      function makeMap() {
        
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 35, lng: 39},
          zoom: 2
        });
        var infowindow = new google.maps.InfoWindow;

        var marker, i;

        for (i = 0; i < locations.length; i++) {  
            marker = new google.maps.Marker({
                 position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                 map: map
            });

            google.maps.event.addListener(marker, 'click', (function(marker, i) {
                 return function() {
                     infowindow.setContent(locations[i][0]);
                     infowindow.open(map, marker);
                 }
            })(marker, i));
        }
      }