// membuat mobile menu

let show = true
// console.log(show);

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
// end mobile menu



// membuat scroll

const scrollToHome = () => {
    var sectionName =document.getElementById('myHome');
    sectionName.scrollIntoView ({
        behavior: "smooth",
        offsetTop : 20
    })
}

const scrollToAbout = () => {
    var sectionName = document.getElementById("myAbout")
    console.log("test")
    sectionName.scrollIntoView ({
      
        behavior : "smooth"
        // offsetTop : 20
    })
}

const scrollToContact = () => {
    var sectionName = document.getElementById("myContact")
    sectionName.scrollIntoView ({
        behavior : "smooth",
        offsetTop : 20
    })
}

// end membuat scroll


// cara unuk delay 
// setTimeout(myFunction, 4000);

// function myFunction() {
//   document.getElementById("name-camp").innerHTML = "Moendoe";
// }

// cara unruk delay 