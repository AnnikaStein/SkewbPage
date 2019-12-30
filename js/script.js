function respNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav" || x.className === "topnav sticky") {
    x.classList.add("responsive");
  } else {
    x.classList.remove("responsive");
  }
}
