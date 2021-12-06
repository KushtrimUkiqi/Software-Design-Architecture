// import axios from './node_modules/axios/dist/axios.js';
// import axios from '../javascript/node_modules/axios/dist/axios.js';
var map = L.map('map').setView([46.8182, 8.2275], 8);
var radiusSelected = 15000;

var osm = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia3VzaHRyaW0tdSIsImEiOiJja3d1eXVvaXYxdjZ6MnVsYzlqbXhiYWJwIn0.VhxisKLnUEYPaqqZGltngw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox/streets-v11'
	
	});




osm.addTo(map);

if(!navigator.geolocation) {
        console.log("Your browser doesn't support geolocation feature!")
    } else {
       
        navigator.geolocation.getCurrentPosition(getPosition);
    };

    var locationPoint, circle;



    function getPosition(position ){
       
        // console.log(position)
        var lat = position.coords.latitude;
        var long = position.coords.longitude;
        var accuracy = position.coords.accuracy;

        lat  = 46.9496813;
        long = 7.4291392;
        accuracy = 1;

        if(locationPoint) {
            map.removeLayer(locationPoint);
        }

        if(circle) {
            map.removeLayer(circle);
        }


        
         circle = L.circle([lat, long], {
            color: 'white',
            fillColor: '#7d939d',
            fillOpacity: 0.1,
            radius: radiusSelected
        });

       
      

        
        locationPoint = L.marker([lat, long]);
        locationPoint.bindPopup("<b>Your location : " +lat +","+long + "</b>").openPopup()
       
        var featureGroup = L.featureGroup([locationPoint,circle]).addTo(map);
        map.flyTo([lat, long],11);
    }


   

    











   







// const markers = [];

// let latitudes = [
//     [47.1942],
// [47.40755],
// [47.440514],
// [46.47796],
// [47.38064],
// [46.81916],
// [46.82053],
// [47.42986],
// [47.42986],
// [46.49056],
// [47.27729],
// [46.323111],
// [47.0159],
// [47.33238],
// [47.20789],
// [47.39786],
// [47.37468],
// [46.0399],
// [47.47865],
// [46.0177314]
// ]


// let longitudes = [
//     [8.51775],
// [8.47724],
// [9.008591],
// [7.14076],
// [8.5457],
// [6.49479],
// [6.50643],
// [9.39377],
// [9.39377],
// [6.72532],
// [8.33034],
// [10.0619005],
// [8.6587],
// [8.84724],
// [8.69978],
// [8.21498],
// [8.51996],
// [8.92394],
// [8.45128],
// [8.9520604],
// ]

// for(let i = 0; i<longitudes.length;i++)
// {
//     markers[i] = L.marker([latitudes[i][0],longitudes[i][0]]).addTo(map);

// }

// L.marker([latitudes[i][0],longitudes[i]]).addTo(map)