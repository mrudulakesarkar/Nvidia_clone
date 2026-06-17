window.addEventListener("scroll",()=>{
    const nav=document.querySelector(".navbar");
    if(window.scrollY>50){
        nav.classList.add("shadow");
    }
    else{
        nav.classList.remove("shadow");
    }
});

document.querySelectorAll(".download-btn")
.forEach(btn => {
    btn.addEventListener("click", function(){
        alert("Driver download started!");
    });
});

document.querySelectorAll(".buy-btn") 
.forEach(btn => {

    btn.addEventListener("click", function(){

        alert("Proceeding to checkout!");
    });
});

document.querySelectorAll(".cart-btn")
.forEach(btn => {
    btn.addEventListener("click", function(){
        let cart =document.getElementById("cartCount");
        let count =parseInt(cart.innerText);
        cart.innerText = count + 1;
        alert("Item added to cart!");
    });
});
