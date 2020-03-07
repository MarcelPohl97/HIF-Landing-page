const nav_btn = document.getElementById("nav-btn");
const responsive_nav = document.getElementById("responsive-nav");
const nav_options = document.getElementById("nav-options");

activate_nav = () => {
    responsive_nav.classList.toggle("nav-activator")
    nav_options.classList.toggle("nav-ul-activator")
}

nav_btn.addEventListener("click", () => {
    activate_nav();
})