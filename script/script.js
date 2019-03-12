const burgerMenu = document.querySelector(".menu");


let count = 1;
burgerMenu.addEventListener("click", () =>{
    count++;

        if(count % 2 == 0){
    document.querySelector(".overlay").style.height = "100%";
        } else {
            document.querySelector(".overlay").style.height = "0";
        }
});



