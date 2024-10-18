let button = document.querySelector("#btn1");
let body = document.querySelector("body");
let mode = "mode1";

button.addEventListener("click", ()=>{
    if(mode==="mode1"){
        mode = "mode2";
        body.classList.add("mode1");
        body.classList.remove("mode2");
    }
    else{
        mode = "mode1";
        body.classList.add("mode2");
        body.classList.remove("mode1");
    }
})