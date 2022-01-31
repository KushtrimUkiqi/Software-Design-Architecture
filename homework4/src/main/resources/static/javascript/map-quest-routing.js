// default map layer
let map = L.map('map', {
    layers: MQ.mapLayer(),
    center: [Number.parseFloat(document.getElementById("hospitalLat").value),Number.parseFloat(document.getElementById("hospitalLong").value)],
    zoom: 7
});

var locationPoint = L.marker([Number.parseFloat(document.getElementById("hospitalLat").value),Number.parseFloat(document.getElementById("hospitalLong").value)]).addTo(map);


getPosition()
{

}

    function runDirection() {

        map.removeLayer(locationPoint);
        map.remove();

        let hospitalLatitude = Number.parseFloat(document.getElementById("hospitalLat").value);
        let hospitalLongitude =  Number.parseFloat(document.getElementById("hospitalLong").value);

        let myLatitude = Number.parseFloat(localStorage.latitude);
        let myLongitude  = Number.parseFloat(localStorage.longitude);
        // recreating new map layer after removal
        map = L.map('map', {
            layers: MQ.mapLayer(),
            center: [hospitalLatitude, hospitalLongitude],
            zoom: 7
        });
        
        var dir = MQ.routing.directions();


        let l1 = hospitalLatitude+","+hospitalLongitude
        let l2 = myLatitude+","+myLongitude
        console.log(hospitalLatitude+","+hospitalLongitude);
        console.log(myLatitude+","+myLongitude);
        dir.route({
            locations: [
                l1,
                l2
            ]
        });
    

        CustomRouteLayer = MQ.Routing.RouteLayer.extend({
            createStartMarker: (location) => {
                var custom_icon;
                var marker;

                custom_icon = L.icon({
                    iconUrl: '../images/red.png',
                    iconSize: [20, 29],
                    iconAnchor: [10, 29],
                    popupAnchor: [0, -29]
                });

                marker = L.marker(location.latLng, {icon: custom_icon}).addTo(map);

                return marker;
            },

            createEndMarker: (location) => {
                var custom_icon;
                var marker;

                custom_icon = L.icon({
                    iconUrl: '../images/blue.png',
                    iconSize: [20, 29],
                    iconAnchor: [10, 29],
                    popupAnchor: [0, -29]
                });

                marker = L.marker(location.latLng, {icon: custom_icon}).addTo(map);

                return marker;
            }
        });
        
        map.addLayer(new CustomRouteLayer({
            directions: dir,
            fitBounds: true
        })); 
    }

//
// // function that runs when form submitted
// function submitForm(event) {
//     event.preventDefault();
//
//     // delete current map layer
//     map.remove();
//
//     // getting form data
//     start = document.getElementById("start").value;
//     end = document.getElementById("destination").value;
//
//     // run directions function
//     runDirection(start, end);
//
//     // reset form
//     document.getElementById("form").reset();
// }

// // asign the form to form variable
// const form = document.getElementById('form');
//
// // call the submitForm() function when submitting the form
// form.addEventListener('submit', submitForm);