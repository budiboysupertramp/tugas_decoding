// membuat class active navbar
document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".list-nav");

  elements.forEach(function (element) {
    element.addEventListener("click", function () {
      // Menghapus class "active" dari semua elemen dengan class "one"
      elements.forEach(function (el) {
        el.classList.remove("active");
      });

      // Menambahkan class "active" hanya pada elemen yang diklik
      element.classList.add("active");
    });
  });
});
// membuat mobile menu

const showMobileMenu = () => {
  const mobileMenu = document.getElementById("menu-nav");
  const bars = document.querySelector(".bars span");

  if (bars.textContent === "\u2630") {
    mobileMenu.style.display = "flex";
    bars.textContent = "X";
  } else {
    mobileMenu.style.display = "none";
    bars.textContent = "\u2630"; // Mengembalikan ikon tiga garis
  }
};

// membuat scroll

const scrollToHome = () => {
  var sectionName = document.getElementById("header");
  sectionName.scrollIntoView({
    behavior: "smooth",
    // offsetTop: 20,
    offsetTop: 0,
  });
};

const scrollToAbout = () => {
  var sectionName = document.getElementById("myAbout");
  console.log("test");
  sectionName.scrollIntoView({
    behavior: "smooth",
    offsetTop: 50,
  });
};

const scrollToActivity = () => {
  var sectionName = document.getElementById("myActivity");

  sectionName.scrollIntoView({
    behavior: "smooth",
    offsetTop: 50,
  });
};

const scrollTomyBiodata = () => {
  var sectionName = document.getElementById("myBiodata");

  sectionName.scrollIntoView({
    behavior: "smooth",
    offsetTop: 20,
  });
};

const scrollToContact = () => {
  var sectionName = document.getElementById("myContact");
  sectionName.scrollIntoView({
    behavior: "smooth",
    offsetTop: 20,
  });
};

// end membuat scroll

// cara unuk delay
// setTimeout(myFunction, 4000);

// function myFunction() {
//   document.getElementById("name-camp").innerHTML = "Moendoe";
// }

// cara unruk delay

const btnTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
