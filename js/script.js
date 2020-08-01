function respNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav" || x.className === "topnav sticky") {
    x.classList.add("responsive");
  } else {
    x.classList.remove("responsive");
  }
}
function toggleLightDark() {
  var art = document.getElementById("art");
  var foot = document.getElementById("foot");
  art.classList.toggle("dark");
  foot.classList.toggle("dark");
  document.body.classList.toggle("dark");
  var buts = document.getElementsByTagName("button");
  for (i=0; i < buts.length; i++) {
    buts[i].classList.toggle("but-Light");
    buts[i].classList.toggle("but-Dark");
  }
  if (document.body.classList.contains("dark")) {
    if (document.getElementById("toggleFLTbut").style.color !== "green") {
      document.getElementById("toggleFLTbut").style.color = "white";
    }
    if (document.getElementById("toggleAlgTbut").style.color !== "green") {
      document.getElementById("toggleAlgTbut").style.color = "white";
    }
    if (document.getElementById("toggleOLTbut").style.color !== "green") {
      document.getElementById("toggleOLTbut").style.color = "white";
    }
  }
  else {
    if (document.getElementById("toggleFLTbut").style.color !== "green") {
      document.getElementById("toggleFLTbut").style.color = "black";
    }
    if (document.getElementById("toggleAlgTbut").style.color !== "green") {
      document.getElementById("toggleAlgTbut").style.color = "black";
    }
    if (document.getElementById("toggleOLTbut").style.color !== "green") {
      document.getElementById("toggleOLTbut").style.color = "black";
    }
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
