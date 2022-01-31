const  slideValue = document.querySelector("#sspan")
const inputSlider = document.querySelector("#iinput");
const radiusText =  document.querySelector("#radius");



if(localStorage.getItem("radiusValue")!==null)
{
    radiusText.innerHTML=localStorage.getItem("radiusValue");
}

else {
    radiusText.innerHTML = "15";
    localStorage.setItem("radiusValue",15);
}

inputSlider.value = localStorage.getItem("radiusValue");



// sessionStorage.setItem('radiusValue',inputSlider.value);


// console.log(sessionStorage.getItem('radiusValue'));

inputSlider.oninput = ( () =>{

        let value = inputSlider.value;
        slideValue.textContent=value;
        // slideValue.style.left = (Number.parseInt(value/100))+"%";
        slideValue.classList.add("show");

        localStorage.setItem('radiusValue',inputSlider.value);
        document.querySelector("#radius").innerHTML=localStorage.getItem('radiusValue');


    }

)
inputSlider.onblur = (()=>{
    slideValue.classList.remove("show");
});

document.querySelector("#radius").innerHTML=localStorage.getItem('radiusValue');