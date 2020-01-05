function respNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav" || x.className === "topnav sticky") {
    x.classList.add("responsive");
  } else {
    x.classList.remove("responsive");
  }
}
function toggleA() {
  var currentDIV = document.getElementById("A");
  var currentBUT = document.getElementById("toggleABUT");
  var chDIV = currentDIV.parentNode.children;
  var chBUT = currentBUT.parentNode.children;
  var i;
  var j;
  if (currentDIV.style.display === "none") {
    for (i=0; i < chDIV.length; i++) {
      chDIV[i].style.display = "none";
    }
    for (j=0; j < chBUT.length; j++) {
      chBUT[j].style.color = "black";
    }
    currentDIV.style.display = "block";
    currentBUT.style.color = "green";
  } else {
    currentDIV.style.display = "none";
    currentBUT.style.color = "black";
    document.getElementById("general").style.display = "block";
  }
}
function toggleB() {
  var currentDIV = document.getElementById("B");
  var currentBUT = document.getElementById("toggleBBUT");
  var chDIV = currentDIV.parentNode.children;
  var chBUT = currentBUT.parentNode.children;
  var i;
  var j;
  if (currentDIV.style.display === "none") {
    for (i=0; i < chDIV.length; i++) {
      chDIV[i].style.display = "none";
    }
    for (j=0; j < chBUT.length; j++) {
      chBUT[j].style.color = "black";
    }
    currentDIV.style.display = "block";
    currentBUT.style.color = "green";
  } else {
    currentDIV.style.display = "none";
    currentBUT.style.color = "black";
    document.getElementById("general").style.display = "block";
  }
}
function toggleC() {
  var currentDIV = document.getElementById("C");
  var currentBUT = document.getElementById("toggleCBUT");
  var chDIV = currentDIV.parentNode.children;
  var chBUT = currentBUT.parentNode.children;
  var i;
  var j;
  if (currentDIV.style.display === "none") {
    for (i=0; i < chDIV.length; i++) {
      chDIV[i].style.display = "none";
    }
    for (j=0; j < chBUT.length; j++) {
      chBUT[j].style.color = "black";
    }
    currentDIV.style.display = "block";
    currentBUT.style.color = "green";
  } else {
    currentDIV.style.display = "none";
    currentBUT.style.color = "black";
    document.getElementById("general").style.display = "block";
  }
}
function toggleD() {
  var currentDIV = document.getElementById("D");
  var currentBUT = document.getElementById("toggleDBUT");
  var chDIV = currentDIV.parentNode.children;
  var chBUT = currentBUT.parentNode.children;
  var i;
  var j;
  if (currentDIV.style.display === "none") {
    for (i=0; i < chDIV.length; i++) {
      chDIV[i].style.display = "none";
    }
    for (j=0; j < chBUT.length; j++) {
      chBUT[j].style.color = "black";
    }
    currentDIV.style.display = "block";
    currentBUT.style.color = "green";
  } else {
    currentDIV.style.display = "none";
    currentBUT.style.color = "black";
    document.getElementById("general").style.display = "block";
  }
}
