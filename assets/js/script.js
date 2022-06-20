function toggleButton(a) {
  a.classList.toggle("change");
}

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function hideMenu() {
  var x = document.getElementById("myTopnav");
    x.className = "topnav";
}
