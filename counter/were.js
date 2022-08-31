
let v = 0;

value = document.getElementById("value");
btns = document.querySelectorAll(".btn");
// where r is the result of the array element
let r = btns.forEach(element => {
    element.addEventListener("click", function(e){
        const p = e.currentTarget.classList;
    
        if (p.contains("decrease")){
            v--;
            value.textContent = v;
        } else if (p.contains("increase")){
            v++;
            value.textContent = v;
        } else {
            v === 0;
            value.textContent = v;
        }
    })

    

})
 // s is the result of the function
