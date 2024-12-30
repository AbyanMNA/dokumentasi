function navbarTop1() {
  var showmenu1 = document.getElementById("NavbarTopMenu");
  if (showmenu1.className === "navbar") {
    showmenu1.className += " responsive";
  } else {
    showmenu1.className = "navbar";
  }
}
function asideKachina1() {
  var showaside1 = document.getElementById("AsideKachina");
  if (showaside1.className === "small-fnt sidebarnav-menu") {
    showaside1.className += " kachina_hide-default";
  } else {
    showaside1.className = "small-fnt sidebarnav-menu";
  }
}