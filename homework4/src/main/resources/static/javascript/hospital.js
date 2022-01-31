
distance();




function distance( )
{

    let lat1 = localStorage.getItem("latitude");
    let lon1 = localStorage.getItem("longitude");
    let lat2 = Number.parseFloat(document.getElementById("hospitalLat").value);
    let lon2 = Number.parseFloat(document.getElementById("hospitalLong").value);
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
    document.getElementById("proximity").innerHTML = dist.toFixed(2)+" km";
}



function rate()
{
    let id = '#ratingSection';
    document.getElementById("ratingSection").classList.remove('none');
    // setTimeout(function(){ window.location.href = `/${rating}`; }, 1000);
}


async function postRate()
{

    let hId = Number.parseInt(document.getElementById("hospitalId").value);
    let st = Number.parseInt(document.querySelector('input[name="rate"]:checked').value);
    let cm = document.querySelector("#comment").value;


    fetch(`/rate?stars=${st}&hospitalId=${hId}&comment=${cm}`).then(resp => resp.json()).then().catch();

    const btn = document.querySelector("#submitRating");
    const post = document.querySelector(".post");
    const widget = document.querySelector(".star-widget");
    const editBtn = document.querySelector(".edit");

    widget.style.display = "none";
    post.style.display = "block";

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
