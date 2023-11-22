// add "active" class

const toggleMenu = () => {
  document.getElementById("mobile-menu").classList.add("active");
};

//if mobile-menu is shown and click

window.addEventListener("click", function(e){
  if (!document.getElementById("menu-icon").contains(e.target)) {
    if (this.document.getElementById("mobile-menu").classList.contains("active")) {
      this.document.getElementById("mobile-menu").classList.remove("active");
    }
  }
});

window.addEventListener("resize", function() {
  if (
    window.innerWidth > 760 &&
    document.getElementById("mobile-menu").classList.contains("active")
  ) {
    docment.getElementById("mobile-menu").classList.remove("active");
  }
});