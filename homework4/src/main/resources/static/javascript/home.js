 var hospitals;
    var input = document.getElementById("search_input");
    var ul = document.getElementById("hospital_list");
    input.addEventListener("input", updateValue);
    var hospitals;
    var index = 8;
    var offset = 0;
    const generateList = element =>
    `<li><a href="/hospital?id=${element.id}" >
    ${element.name}
    <br>
        ${element.city} ,${element.postcode} , ${element.rating ? 0 : element.rating}
</a></li>`;


    if(screen.width<=800)
    {
        input.addEventListener("focus",setSize);
        input.addEventListener("blur",resetSize);
        index=4;
    }

    function distance( lat2, lon2)
    {

        let lat1 = localStorage.getItem("latitude");
        let lon1 = localStorage.getItem("longitude")
        var radlat1 = Math.PI * lat1/180;
        var radlat2 = Math.PI * lat2/180;
        var radlon1 = Math.PI * lon1/180;
        var radlon2 = Math.PI * lon2/180;
        var theta = lon1-lon2;
        var radtheta = Math.PI * theta/180;
        var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        dist = Math.acos(dist);
        dist = dist * 180/Math.PI;
        dist = dist * 60 * 1.1515;
        dist = dist/0.62137;
        return dist;
    }

    //type ? rating , proximity
    //order ? ascending , descending
    function sort(type , order)
    {

        console.log(type +" " + order);
        if(hospitals.length === 0)
        return;

        if(type === "rating" && order === "ascending")
    {
        console.log("ban")
        //Start from the second element.
        for(let i = 1; i < hospitals.length;i++){
        for(let j = i - 1; j > -1; j--){
        //value comparison using ascending order.
        if(hospitals[j + 1].rating < hospitals[j].rating){

        //swap
        [hospitals[j+1],hospitals[j]] = [hospitals[j],hospitals[j + 1]];

    }
    }
    }
    }
        else if(type === "rating" && order === "descending")
    {
        //Start from the second element.
        for(let i = 1; i < hospitals.length;i++){
        for(let j = i - 1; j > -1; j--){
        //value comparison using ascending order.
        if(hospitals[j + 1].rating > hospitals[j].rating){

        //swap
        [hospitals[j+1],hospitals[j]] = [hospitals[j],hospitals[j + 1]];

    }
    }
    }
    }
        else if(type === "proximity" && order === "ascending")
    {
        console.log("ascending")
        //Start from the second element.
        for(let i = 1; i < hospitals.length;i++){
        for(let j = i - 1; j > -1; j--){
        //value comparison using ascending order.
        if(distance(hospitals[j + 1].latitude,hospitals[j + 1].longitude) > distance(hospitals[j].latitude,hospitals[j].longitude)){

        //swap
        [hospitals[j+1],hospitals[j]] = [hospitals[j],hospitals[j + 1]];

    }
    }
    }
    }
        else if(type === "proximity" && order === "descending")
    {


        //Start from the second element.
        for(let i = 1; i < hospitals.length;i++){
        for(let j = i - 1; j > -1; j--){

        console.log(distance(hospitals[j + 1].latitude,hospitals[j + 1].longitude) + " distance")
        if(distance(hospitals[j + 1].latitude,hospitals[j + 1].longitude) < distance(hospitals[j].latitude,hospitals[j].longitude)){

        //swap
        [hospitals[j+1],hospitals[j]] = [hospitals[j],hospitals[j + 1]];

    }
    }
    }
    }

        offset = 0;
        console.log(hospitals[0]);
        updateListOfHospitals();
    }





    ///uses axios///
    async function updateValue(e) {



    var ul = document.getElementById("auto_suggestions");

    if(e.target.value !== "")
    {
        ul.classList.remove("none");

    }


    else
    {
        ul.classList.add("none");
    }


        const resp = await fetch(`/listHospitals?name=${e.target.value}`).then(response => response.json()).then(response => {
            console.log(response.data);
            var hospitals  = response.data;

            if(hospitals.length>=1)
            {
                // var marker1 = L.marker([hospitals[0].latitude,hospitals[0].longitude]).bindPopup("<b>" + hospitals[0].name + "<b/>").openPopup().addTo(map);
                // map.flyTo([hospitals[0].latitude,hospitals[0].longitude],11);

                var htmlOfUl = ``;

                console.log(hospitals.length);
                ul.innerHTML = `
            <li><a href="http://127.0.0.1:8080/hospital?id=${hospitals[0].id}">${hospitals[0].name} , ${hospitals[0].postcode}</a></li>
            <li><a href="http://127.0.0.1:8080/hospital?id=${hospitals[1].id}">${hospitals[1].name} , ${hospitals[1].postcode}</a></li>
            <li><a href="http://127.0.0.1:8080/hospital?id=${hospitals[2].id}">${hospitals[2].name} , ${hospitals[2].postcode}</a></li>
            <li><a href="http://127.0.0.1:8080/hospital?id=${hospitals[3].id}">${hospitals[3].name} , ${hospitals[3].postcode}</a></li>
            <li><a href="http://127.0.0.1:8080/hospital?id=${hospitals[4].id}">${hospitals[4].name} , ${hospitals[4].postcode}</a></li>
            <li><a href="http://127.0.0.1:8080/hospital?id=${hospitals[5].id}">${hospitals[5].name} , ${hospitals[5].postcode}</a></li>
          `
            }
        }).catch(error => console.log(error));

    };

    function updateListOfHospitals(direction = "f")
    {
        console.log(offset + " ---")

        if(direction==="back")
    {
        if(offset <= index)
        return;

        if(offset%index === 0)
    {
        offset -=index*2;
        console.log(offset + " offset % 2 ===0");
    }

        else offset-=(index+(offset%index));

        console.log(offset);

    }


        ul.innerHTML = "";
        let limit;

        if (offset===hospitals.length)
    {
        ul.innerHTML = "No hospitals"
    }

        if(offset+index >= hospitals.length)
    {
        limit = hospitals.length;
    }

        else limit = offset + index;
        for(let i = offset ; i<limit;i++)
    {
        ul.innerHTML += generateList(hospitals[i]);
    }


        offset=limit;

    }

    ///type ? radius : all
    function showNearestHospitals(tp = "radius")
    {


        document.getElementById("map").classList.add('smallerheight');
        document.getElementsByClassName("hospital_list")[0].classList.remove("none");
        document.getElementById("buttons_and_search").classList.add("none");
        let ul = document.getElementById("hospital_list");


        let lat = localStorage.getItem("latitude");
        let long = localStorage.getItem("longitude");
        let radius;
        if(tp !== "all")
        radius = localStorage.getItem("radiusValue");
        else radius = 200;

        axios.get(`/hospitals?latitude=${lat}&longitude=${long}&radius=${radius}`)
        .then(resp => {hospitals = resp.data; updateListOfHospitals();}
        )
        .catch(error => console.log(error))
    }

    function hideNearestHospitals()
    {
        document.getElementById("map").classList.remove('smallerheight');
        document.getElementsByClassName("hospital_list")[0].classList.add("none");
        document.getElementById("buttons_and_search").classList.remove("none");
    }


    window.addEventListener("DOMContentLoaded", function () {
    // autocomplete part
    new Autocomplete("location_input", {
        selectFirst: true,
        insertToInput: true,
        cache: true,
        howManyCharacters: 2,
        // onSearch
        onSearch: ({ currentValue }) => {
            // api
            const api = `https://nominatim.openstreetmap.org/search?format=geojson&limit=5&city=${encodeURI(
                currentValue
            )}`;


            return new Promise((resolve) => {
                fetch(api)
                    .then((response) => response.json())
                    .then((data) => {
                        resolve(data.features);
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            });
        },

        // nominatim GeoJSON format
        onResults: ({ currentValue, matches, template }) => {
            const regex = new RegExp(currentValue, "gi");

            // if the result returns 0 we
            // show the no results element
            return matches === 0
                ? template
                : matches
                    .map((element) => {
                        return `
                <li>
                  <p>
                    ${element.properties.display_name.replace(
                            regex,
                            (str) => `<b>${str}</b>`
                        )}
                  </p>
                </li> `;
                    })
                    .join("");
        },

        onSubmit: ({ object }) => {
            const { display_name } = object.properties;
            const [lat, lng] = object.geometry.coordinates;

            localStorage.setItem('latitude',lng);
            localStorage.setItem('longitude',lat);
            console.log(lng);
            console.log(lat);

        }


    });





});


