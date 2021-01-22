function menuClick() {
  let menuIcon = document.getElementById("menu");
  menuIcon.classList.toggle("menuOpen");

  document.getElementById("nav").classList.toggle("menuOpen");

  document.getElementById("menu-bg").classList.toggle("menuOpen-bg");
}
