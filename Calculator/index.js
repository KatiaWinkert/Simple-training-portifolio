const switchBtn = document.getElementById("switch");
const displayView = document.getElementById("display");
const input = document.querySelectorAll("input");

let value = "";
switchBtn.addEventListener("click", () =>{
    if(switchBtn.checked == true){
        document.body.setAttribute("data-theme", "dark");
    }else{
        document.body.setAttribute("data-theme", "")
    }
});