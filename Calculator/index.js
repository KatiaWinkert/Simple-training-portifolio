const switchBtn = document.getElementById("switch");
const display = document.getElementById("display");
const input = document.querySelectorAll("input");

let value = "";
switchBtn.addEventListener("click", () =>{
    if(switchBtn.checked == true){
        document.body.setAttribute("data-theme", "dark");
    }else{
        document.body.setAttribute("data-theme", "")
    }
});
input.forEach((e)=>
e.addEventListener("click", (event)=>{
    if(event.target.value == "="){
        if(value.length != 0){
            let newval = eval(value);
            value = newval; 
            display.value = value;
        }
    }else if(event.target.value == "c"){
        value = ""; 
        display.value = value; 
    } else if(event.target.value == "switch"){
    }else{
        value += event.target.value;
        display.value = value;
    }

    if(!event.target.classList.contains("stwich")){
        event.target.classList.add("active"); 
        setTimeout(()=>{
            event.target.classList.remove("active");
        }, 400)
    }
})
)