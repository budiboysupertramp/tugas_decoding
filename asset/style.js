let show = true
console.log(show);

// console.log(show);

const showMobileMenu = () => {
   
    const mobileMenu = document.getElementById("mobile_menu");

    if (show === true) {
        mobileMenu.style.transform ="translateY(0)";
        // mobileMenu.style.opacity = 1
        
      
        show = false

    } else {
        mobileMenu.style.transform = "translateY(-350px)";
        // mobileMenu.style.opacity = 0
        show = true 
    }
}