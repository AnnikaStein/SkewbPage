// default behaviour should be white,not transparent;
// --> especially when starting with dark BG theme
document.getElementById("colourlabel").style.background = 'white';

// show or hide the corresponding div's
function toggleFLT() {
    var x = document.getElementById("FLT");
    var y = document.getElementById("AlgT");
    var y2 = document.getElementById("OLT");
    var xx = document.getElementById("additionalFLT");
    var yy = document.getElementById("additionalAlgT");
    var yy2 = document.getElementById("additionalOLT");
    var z = document.getElementById("timing");
    var d = document.getElementById("skskDEFAULT");

    if (x.style.display === "none") {
        z.style.display = "block";
        x.style.display = "block";
        y.style.display = "none";
        y2.style.display = "none";
        xx.style.display = "block";
        yy.style.display = "none";
        yy2.style.display = "none";
        d.style.display = "none";
        document.getElementById("toggleFLTbut").style.color = "green";
        if (document.body.classList.contains("dark")) {
            document.getElementById("toggleAlgTbut").style.color = "white";
            document.getElementById("toggleOLTbut").style.color = "white";
        }
        else {
            document.getElementById("toggleAlgTbut").style.color = "black";
            document.getElementById("toggleOLTbut").style.color = "black";
        }

    }
    else {
        z.style.display = "none";
        x.style.display = "none";
        xx.style.display = "none";
        d.style.display = "block";
        if (document.body.classList.contains("dark")) {
            document.getElementById("toggleFLTbut").style.color = "white";
        }
        else {
            document.getElementById("toggleFLTbut").style.color = "black";
        }
    }
}

function toggleAlgT() {
    var x = document.getElementById("AlgT");
    var y = document.getElementById("FLT");
    var y2 = document.getElementById("OLT");
    var xx = document.getElementById("additionalAlgT");
    var yy = document.getElementById("additionalFLT");
    var yy2 = document.getElementById("additionalOLT");
    var z = document.getElementById("timing");
    var d = document.getElementById("skskDEFAULT");
    if (x.style.display === "none") {
        z.style.display = "block";
        x.style.display = "block";
        y.style.display = "none";
        y2.style.display = "none";
        xx.style.display = "block";
        yy.style.display = "none";
        yy2.style.display = "none";
        d.style.display = "none";
        document.getElementById("toggleAlgTbut").style.color = "green";
        if (document.body.classList.contains("dark")) {
            document.getElementById("toggleFLTbut").style.color = "white";
            document.getElementById("toggleOLTbut").style.color = "white";
        }
        else {
            document.getElementById("toggleFLTbut").style.color = "black";
            document.getElementById("toggleOLTbut").style.color = "black";
        }
    }
    else {
        z.style.display = "none";
        x.style.display = "none";
        xx.style.display = "none";
        d.style.display = "block";
        if (document.body.classList.contains("dark")) {
            document.getElementById("toggleAlgTbut").style.color = "white";
        }
        else {
            document.getElementById("toggleAlgTbut").style.color = "black";
        }
    }
}

function toggleOLT() {
    var x = document.getElementById("OLT");
    var y = document.getElementById("FLT");
    var y2 = document.getElementById("AlgT");
    var xx = document.getElementById("additionalOLT");
    var yy = document.getElementById("additionalAlgT");
    var yy2 = document.getElementById("additionalFLT");
    var z = document.getElementById("timing");
    var d = document.getElementById("skskDEFAULT");
    if (x.style.display === "none") {
        z.style.display = "block";
        x.style.display = "block";
        y.style.display = "none";
        y2.style.display = "none";
        xx.style.display = "block";
        yy.style.display = "none";
        yy2.style.display = "none";
        d.style.display = "none";
        document.getElementById("toggleOLTbut").style.color = "green";
        if (document.body.classList.contains("dark")) {
            document.getElementById("toggleFLTbut").style.color = "white";
            document.getElementById("toggleAlgTbut").style.color = "white";
        }
        else {
            document.getElementById("toggleFLTbut").style.color = "black";
            document.getElementById("toggleAlgTbut").style.color = "black";
        }
        changescrlenOL();
    }
    else {
        z.style.display = "none";
        x.style.display = "none";
        xx.style.display = "none";
        d.style.display = "block";
        if (document.body.classList.contains("dark")) {
            document.getElementById("toggleOLTbut").style.color = "white";
        }
        else {
            document.getElementById("toggleOLTbut").style.color = "black";
        }
    }
}
// show or hide all alg sets available
function toggleSelectAlgs() {
    var x = document.getElementById("selectAlgs");
    var xx = document.getElementById("selAlgCat");
    var yy = document.getElementById("selAlgID");
    if (x.style.display === "none") {
        x.style.display = "block";
        xx.style.color = "green";
        if (document.body.classList.contains("dark")) {
            yy.style.color = "white";
        }
        else {
            yy.style.color = "black";
        }
        document.getElementById("selectAlgsbyID").style.display = "none";
    }
    else {
        x.style.display = "none";
        if (document.body.classList.contains("dark")) {
            xx.style.color = "white";
        }
        else {
            xx.style.color = "black";
        }
    }
}
// show or hide all alg sets available
function toggleSelectAlgsbyID() {
    var x = document.getElementById("selectAlgsbyID");
    var yy = document.getElementById("selAlgCat");
    var xx = document.getElementById("selAlgID");
    if (x.style.display === "none") {
        x.style.display = "block";
        xx.style.color = "green";
        if (document.body.classList.contains("dark")) {
            yy.style.color = "white";
        }
        else {
            yy.style.color = "black";
        }
        document.getElementById("selectAlgs").style.display = "none";
    }
    else {
        x.style.display = "none";
        if (document.body.classList.contains("dark")) {
            xx.style.color = "white";
        }
        else {
            xx.style.color = "black";
        }
    }
}

// select multiple alg sets at once or unselect them
function whattodowitht() {
    if (document.getElementById("l4c").checked == false ||
        document.getElementById("l5c").checked == false ||
        document.getElementById("pi3s").checked == false ||
        document.getElementById("pihu").checked == false ||
        document.getElementById("pihz").checked == false ||
        document.getElementById("pio").checked == false ||
        document.getElementById("piswirl").checked == false ||
        document.getElementById("pivu").checked == false ||
        document.getElementById("piwat").checked == false ||
        document.getElementById("pix").checked == false ||
        document.getElementById("pizconj").checked == false ||
        document.getElementById("p3s").checked == false ||
        document.getElementById("phu").checked == false ||
        document.getElementById("phzpure").checked == false ||
        document.getElementById("po").checked == false ||
        document.getElementById("pswirl").checked == false ||
        document.getElementById("pvu").checked == false ||
        document.getElementById("pwat").checked == false ||
        document.getElementById("px").checked == false ||
        document.getElementById("pzconj").checked == false) {
        document.getElementById("l4c").checked = true;
        document.getElementById("l5c").checked = true;
        document.getElementById("pi3s").checked = true;
        document.getElementById("pihu").checked = true;
        document.getElementById("pihz").checked = true;
        document.getElementById("pio").checked = true;
        document.getElementById("piswirl").checked = true;
        document.getElementById("pivu").checked = true;
        document.getElementById("piwat").checked = true;
        document.getElementById("pix").checked = true;
        document.getElementById("pizconj").checked = true;
        document.getElementById("p3s").checked = true;
        document.getElementById("phu").checked = true;
        document.getElementById("phzpure").checked = true;
        document.getElementById("po").checked = true;
        document.getElementById("pswirl").checked = true;
        document.getElementById("pvu").checked = true;
        document.getElementById("pwat").checked = true;
        document.getElementById("px").checked = true;
        document.getElementById("pzconj").checked = true;
    }
    else {
        document.getElementById("l4c").checked = false;
        document.getElementById("l5c").checked = false;
        document.getElementById("pi3s").checked = false;
        document.getElementById("pihu").checked = false;
        document.getElementById("pihz").checked = false;
        document.getElementById("pio").checked = false;
        document.getElementById("piswirl").checked = false;
        document.getElementById("pivu").checked = false;
        document.getElementById("piwat").checked = false;
        document.getElementById("pix").checked = false;
        document.getElementById("pizconj").checked = false;
        document.getElementById("p3s").checked = false;
        document.getElementById("phu").checked = false;
        document.getElementById("phzpure").checked = false;
        document.getElementById("po").checked = false;
        document.getElementById("pswirl").checked = false;
        document.getElementById("pvu").checked = false;
        document.getElementById("pwat").checked = false;
        document.getElementById("px").checked = false;
        document.getElementById("pzconj").checked = false;
    }
    changescrlenAlg();
}

function whattodowithi() {
    if (document.getElementById("pi3s").checked == false ||
        document.getElementById("pihu").checked == false ||
        document.getElementById("pihz").checked == false ||
        document.getElementById("pio").checked == false ||
        document.getElementById("piswirl").checked == false ||
        document.getElementById("pivu").checked == false ||
        document.getElementById("piwat").checked == false ||
        document.getElementById("pix").checked == false ||
        document.getElementById("pizconj").checked == false) {
        document.getElementById("pi3s").checked = true;
        document.getElementById("pihu").checked = true;
        document.getElementById("pihz").checked = true;
        document.getElementById("pio").checked = true;
        document.getElementById("piswirl").checked = true;
        document.getElementById("pivu").checked = true;
        document.getElementById("piwat").checked = true;
        document.getElementById("pix").checked = true;
        document.getElementById("pizconj").checked = true;
    }
    else {
        document.getElementById("pi3s").checked = false;
        document.getElementById("pihu").checked = false;
        document.getElementById("pihz").checked = false;
        document.getElementById("pio").checked = false;
        document.getElementById("piswirl").checked = false;
        document.getElementById("pivu").checked = false;
        document.getElementById("piwat").checked = false;
        document.getElementById("pix").checked = false;
        document.getElementById("pizconj").checked = false;
    }
    changescrlenAlg();
}

function whattodowithu() {
    if (document.getElementById("p3s").checked == false ||
        document.getElementById("phu").checked == false ||
        document.getElementById("phzpure").checked == false ||
        document.getElementById("po").checked == false ||
        document.getElementById("pswirl").checked == false ||
        document.getElementById("pvu").checked == false ||
        document.getElementById("pwat").checked == false ||
        document.getElementById("px").checked == false ||
        document.getElementById("pzconj").checked == false) {
        document.getElementById("p3s").checked = true;
        document.getElementById("phu").checked = true;
        document.getElementById("phzpure").checked = true;
        document.getElementById("po").checked = true;
        document.getElementById("pswirl").checked = true;
        document.getElementById("pvu").checked = true;
        document.getElementById("pwat").checked = true;
        document.getElementById("px").checked = true;
        document.getElementById("pzconj").checked = true;
    }
    else {
        document.getElementById("p3s").checked = false;
        document.getElementById("phu").checked = false;
        document.getElementById("phzpure").checked = false;
        document.getElementById("po").checked = false;
        document.getElementById("pswirl").checked = false;
        document.getElementById("pvu").checked = false;
        document.getElementById("pwat").checked = false;
        document.getElementById("px").checked = false;
        document.getElementById("pzconj").checked = false;
    }
    changescrlenAlg();
}

function whattodowithl() {
    if (document.getElementById("l4c").checked == false ||
        document.getElementById("l5c").checked == false) {
        document.getElementById("l4c").checked = true;
        document.getElementById("l5c").checked = true;
    }
    else {
        document.getElementById("l4c").checked = false;
        document.getElementById("l5c").checked = false;
    }
    changescrlenAlg();
}

// produces all scrambles for the first layer / saves the L2L algs as arrays
var posschars = ["R", "R'", "L", "L'", "U", "U'", "B", "B'"];
// onemovers
var newscramble1list = [];
for (var i = 0; i < posschars.length; i++) {
    newscramble1list.push(posschars[i]);
}
var scramblelist = newscramble1list.slice(0);

//twomovers
var newscramble2list = [];
for (j = 0; j < newscramble1list.length; j++) {
    for (i = 0; i < posschars.length; i++) {
        if (posschars[i].indexOf(newscramble1list[j]) != -1) {
            continue;
        }
        else if (newscramble1list[j].indexOf(posschars[i]) != -1) {
            continue;
        }
        else {
            newscramble2list.push(newscramble1list[j] + " " + posschars[i]);
        }
    }
}
//threemovers
var newscramble3list = [];
for (j = 0; j < newscramble2list.length; j++) {
    for (i = 0; i < posschars.length; i++) {
        if ((newscramble2list[j]).charAt(newscramble2list[j].length - 2) == " ") {
            if ((newscramble2list[j]).charAt(newscramble2list[j].length - 1) == (posschars[i]).charAt(0)) {
                continue;
            }
        }
        else {
            if ((newscramble2list[j]).charAt(newscramble2list[j].length - 2) == (posschars[i]).charAt(0)) {
                continue;
            }
        }
        newscramble3list.push(newscramble2list[j] + " " + posschars[i]);
    }
}
//fourmovers
var newscramble4list = [];
for (j = 0; j < newscramble3list.length; j++) {
    for (i = 0; i < posschars.length; i++) {
        if ((newscramble3list[j]).charAt(newscramble3list[j].length - 2) == " ") {
            if ((newscramble3list[j]).charAt(newscramble3list[j].length - 1) == (posschars[i]).charAt(0)) {
                continue;
            }
        }
        else {
            if ((newscramble3list[j]).charAt(newscramble3list[j].length - 2) == (posschars[i]).charAt(0)) {
                continue;
            }
        }
        newscramble4list.push(newscramble3list[j] + " " + posschars[i]);
    }
}
//fivemovers
var newscramble5list = [];
for (j = 0; j < newscramble4list.length; j++) {
    for (i = 0; i < posschars.length; i++) {
        if ((newscramble4list[j]).charAt(newscramble4list[j].length - 2) == " ") {
            if ((newscramble4list[j]).charAt(newscramble4list[j].length - 1) == (posschars[i]).charAt(0)) {
                continue;
            }
        }
        else {
            if ((newscramble4list[j]).charAt(newscramble4list[j].length - 2) == (posschars[i]).charAt(0)) {
                continue;
            }
        }
        newscramble5list.push(newscramble4list[j] + " " + posschars[i]);
    }
}
//sixmovers
var newscramble6list = [];
for (j = 0; j < newscramble5list.length; j++) {
    for (i = 0; i < posschars.length; i++) {
        if ((newscramble5list[j]).charAt(newscramble5list[j].length - 2) == " ") {
            if ((newscramble5list[j]).charAt(newscramble5list[j].length - 1) == (posschars[i]).charAt(0)) {
                continue;
            }
        }
        else {
            if ((newscramble5list[j]).charAt(newscramble5list[j].length - 2) == (posschars[i]).charAt(0)) {
                continue;
            }
        }
        newscramble6list.push(newscramble5list[j] + " " + posschars[i]);
    }
}
//sevenmovers
var newscramble7list = [];
for (j = 0; j < newscramble6list.length; j++) {
    for (i = 0; i < posschars.length; i++) {
        if ((newscramble6list[j]).charAt(newscramble6list[j].length - 2) == " ") {
            if ((newscramble6list[j]).charAt(newscramble6list[j].length - 1) == (posschars[i]).charAt(0)) {
                continue;
            }
        }
        else {
            if ((newscramble6list[j]).charAt(newscramble6list[j].length - 2) == (posschars[i]).charAt(0)) {
                continue;
            }
        }
        newscramble7list.push(newscramble6list[j] + " " + posschars[i]);
    }
}

// Skewb Resources: https://docs.google.com/spreadsheets/d/1j-SGlgZk20D3d2TyeiXhMWzeyTBuuix3Owgj9Q8rNbo
// invisible char remover: https://pteo.paranoiaworks.mobi/diacriticsremover/
var scrpiswirl = [["r' R' r R' r z' r z r R'", "1a", "H y S y' H y H,H y H y' S y H,x r' R r' R' B' r' B' r B,y' x r' R r R' z' R r' R r z R r' R' r',y x R b' r' R' r z B' r B,y x r' R r' R' r' R r R z R r R' b',R r' z' r' z r' R r' R r"],
        ["r R r R' z R r' R' r z2 R' r' R' r", "1b", "y' S y' H y S y' S,y' S y' S y S y' H,y2 x r' B R r R' B r' B',x r' R r R r' R' r z' r' R r R' B',y x r' R r R z2 r' R r R' z' R r' R' r',y2 x R r R' r' R r R z' r' R' r B,b' r l r l' r b' l',y2 x R r' R r R r' R' r' z' r' R' r B"],
        ["R r' b' r' R r' R r", "2a", "y2 S y' S y H y' S,y2 H y' S y S y' S,y2 x r B R' B' r R r R' r' R r,y' x b' r' R r R' z' R r' R' r R r R',y2 x b' r' R r R r' R' r z r B r' B',y' x r' B' r z r' R r b R',z' r' R' r R' r b r R',z' r' R' r R' r z' r R f'"],
        ["r' B R r R' z R b' R'", "2b", "y H y' H y S y' H,y S y' H y H y' H,x R b R' z' R r' R' B' r,x z R' r' R' r z R r R' r z' r' R r R',y2 x B' r' R r R z R r R' r' R' r R',y x B R r' R' r' R r R' r' B' r B"],
        ["R' B R' B' r' R r z R r R'", "1c", "S y S y' S y H,S y H y' S y H,y' x R r' R' z' r' R' r B R/R2' B' R,x y2 r' R r R b' r R' b',y x R r' R r R' B R' B' r' R' r R,y' x r B' b' r' B' r B b"],
        ["R r' R r z R r' R' z' r' R' r", "1d", "y' H y' H y H y' S,y' H y' S y H y' H,x r' R r z R r R' z' r' R' r R',y x R' r' R' r z R r' R' r' R r R',y x' R r' R' r' B R' r B"],
        ["r' R r R b' r R' b'", "2c", "y2 S y' H y H y' H,y2 H y' H y S y' H,x r' R r' R' z' r' R r B R B',y2 x R' r' B' r B R r B',y2 b R r' b R' r' R' r"],
        ["R r R' z R B r' R' r'", "2d", "y H y S y' S y S,y S y S y' H y S,y' x R r' R r B R' B' r' R' r,x b r B r' B' z' r' R' b,y2 z B' b' R r' b r B r',x2 y B' r' R B' r R r R'"]];
var scrpiwat = [["B' R' r R' B' r' R' r'", "3a", "y' S y2 H y' S y' S,x r2' R r B R r' R B,y' x R B R' B' R' r' R r R r' R' r,y x r' R r R' r' R' r R B R B' R',B' r' l r' l' B' r' b'"],
        ["R' r' R r R B R' B' R' B R B'", "3b", "y2 S y2 H y H y S,x B' R' B' r' R' B R' r',y x R' r' R r R B R' B' R' B R B',y2 x R r R' r' R' z' r' R r z R r',y x B R' B' R B R B' R' r' R' r R,y2 x R r' R r' R r R B R' B' r,r' R' B' r' R' r z2 R' r'"],
        ["r R' r B r' z r R' r' R' r", "4a", "y S z S y2 S,x r' R' r B R' B' R' r' R r R',y2 x r2'/r R' r B r' z r R' r' R' r"],
        ["R r' R' r' R B' r z R r' R", "4b", "y2 H z' S y2 S,y x r' R r R B' r' R' r B R',y' x R2'/R B' r' R r B R' r' R' r,x B R B' r' R r R B R' B' R,y' x R r' R' r R r' R r B R' B' R'"],
        ["R' r B' r' R r' z R r' R r", "3c", "y S y2 H y' H y' S,y S y S y H y2 S,x r' R' r R' z' r2'/r R' r B r' R,y' x R r' R' r R' r' R r z r R r' R',y x B R B' R' r' R' r R r' R r R',y' x R' r R r' R' r R' r' z R r' R'"],
        ["r' R' r B' R' z R r' R' r R r'", "3d", "y2 S y2 H y S y S,H y' H y' S y2 H,x r' R r R' r R r' R' z' R' r' R r,x r R' r' R r R' z' R B r' R r,y' x r' R' r R z R r R' r' R r' R' r"],
        ["R' r R' r' B R B' r R r'", "4c", "y H z S y2 S,y' x R r' R r z R r' R' r R r R',y2 x r' R r R B R' B' R' r' R' r R,x R r' R' r' R r R' z' r' R' r R'"],
        ["r' R r R r' R' r B R B' R", "4d", "y2 S z' S y2 S,y x R r' R ' r' z' r' R r R z R r R' r',y' x r' R r R r' R' r B R B' R,y x R' B R' B' r' R r R' r' R' r"]];
var scrpix = [["R' r R' r' z' r' R' r z R' r", "5a", "y2 S y S S S,x' S y2 S z2 x' H,x z' r' R z' r' R r z r R r' R,x R' r' R r R z B R' B' R r',x z' r' R' r B r' R r z R r' R r"],
        ["R r' R r z2 R r' R' r b", "5b", "y H y' S S S,z y' S y2 S x z2 S,y x b' r' R r R' z2 r' R' r R',y2 x R r' B R' B' R' r' R r',r R' r B x r' l r l' r"],
        ["R r R' r z2 r' R r z r R r", "6a", "y H y2 x' S y2 S,y x R r' R r z2 R r' R' r b,y x R r' R r z B R' B' R r/r2',x r2' R' r z r R r R' b r'"],
        ["B R r' R' r z2 R r R' r", "6b", "y2 S z2 x' S y2 S,y' x R' r R' r' z' r' R' r z R' r,y2 x r' R r' R' z2 r' R r R' B'"],
        ["b R r' R' r z y l r' R r", "5c", "y2 H y S S S,x' S y2 S z2 x' S,y' x r' R r' R' r' R r R' z' R r' R r,x r' R' r R' z2 r' R r R' b',y' x R r R' r R r' R' r z' r' R r,x b' R r' R r R' b' R' r' R' r"],
        ["B' r' R r z r' R' z R r' R'", "5d", "y S y' S S S,z y' S y2 S y2 x' H,x r' R' r R' r' R r R' B R' B',x z R r R' z' R r z' r' R' r B,x R r' R r R r' R' r z r' R r' R',y' x B r' R r' R' r B r R r R'"],
        ["R r R' r z2 R r' R' r B", "6c", "y S y2 z' S y2 S,y' x B' r' R r R' z2 r' R r' R',x r' R r R' z' R' r' R r R B R' B',y2 x B R B' R r' R' r R r' R r"],
        ["r' R' r z r' R' B R B' r'", "6d", "y2 H z2 x' S y2 S,y x r B R' B' R r z' r' R r,x z R r' R' r R B R' B' R' r' R r,x z r R' B r z' r2' R r B' R',y2 r' R' r z r' R r R' r2/r' R r' R'"]];
var scrpihu = [["r B' r' R r R' r f'", "7a", "y S S z2 x' S y2 S,y' x B r' R r' R' r B r'"],
        ["R' b R r' R' r R' b", "7b", "y S S z' S y2 S,y2 x r' z R r' R r z r' B' r,y x b' R r' R r R' b' R"],
        ["B r' R r' R' r B r'", "7c", "y' S S y2 z' S y2 S,y' x r B' r' R r R' r B'"],
        ["l' B b' r B r' R' r", "7d", "S S z S y2 S,y2 x B' r z R r' R' r z' B' r,y z' r' R r B' r' b B' l"],
        ["r R' r b' B' R r' R", "8a", "S y' S y' S,x R' r R' B b r' R r',y2 x r' R r B R' B' R' r' R' r R'"],
        ["r' R r' B R B' r' R", "8b", "S y' H y' S,x R' r B R' B' r2' R' r,y x r' B R B' z' r' R r B',y' x B R' B r' R' r B R',y' x r' R r R z' r' R' r B r' R r"],
        ["R' r R' B b r' R r'", "8c", "S y H y S,H y H y H,x r/r2' R' r b' B' R r' R,y2 x R r' R' z' r' R r R z R r R' r"],
        ["r' B R B' z' r' R r B'", "8d", "S y S y S,H y S y H,y x R/ R2' B' r' R r z R' r R',x B r' R' r z B R' B' r,y2 x r' R r'/r2 B R B' r' R"]];
var scrpivu = [["R r' R r B' R' B r' R' r", "9a", "y2 S S y' S y2 S,y' S y2 S y S S,y' x B' r' R r R B' R' r' R' r B',y' x R r R' r B r' z' r' R r R' b,y' r' R r B' R B r' R' r R',r' l r l' r' R' F r' R r,y x R r' R r z r' R r R' z' R r' R' r R"],
        ["B' r' R r z B R B' r'", "9b", "y S S y' S y2 S,S y2 S y' S S,y' x B r' R r z R r' R' r R' r',x z r B R' B' z' r' R' r B,y2 x r' B R' B' r' R r R' r R,y2 x B' r' R r z B R B' r',x z' r' R r z R' r B r' R B,x R' r' R r' R' r x' r B r' R"],
        ["R B R r' R' B'", "10a", "S y2 H,x z r B r B' r' B',y' z' B R r R' B' R'"],
        ["b' r' R' r y r B", "10b", "y2 H y2 S,x B' r' B' r B r,x B' r' y' r' R r b"]];
var scrpio = [["r' R' r z R r' R' r R r R'", "11a", "y2 H y' S y2 S,y' x R r' R' r' R r R' z' r' R r"],
        ["R r R' z' r' R r R' r' R' r", "11b", "y S y S y2 S,x r' R r R r' R' r z R r' R'"],
        ["R r' R' r' R r R' z' r' R r", "12a", "y2 S y2 S y S,y S y' x' S y2 S,y' x r' R' r z R r' R' r R r R',y' x r' R' r B' R z R r R' r' R,y2 x R r' R' r b r' R r R' z' R r' R'"],
        ["r' R r R r' R' r B R' B'", "12b", "y S y2 S y' H,y2 H y x S y2 S,y x B R B' r' R r R' r' R' r,y2 x R r' z r R r R' z2 r' R r"],
        ["B' R' r B' r' R r'", "11c", "y2 S y' S y2 S (Cancel),y x r/r2' R' r B r' R B"],
        ["r R B' r z R r' R", "11d", "y H y S y2 S,y H y H y2 H (Cancel),y2 x R' r R' z' r' B R' r'"],
        ["r R' r B r' R B", "12c", "y2 S y2 S y H,y H z' y' S y2 S,x B' R' r B' r' R r'"],
        ["R' r R' z' r' B R' r'", "12d", "y S y2 S y S,y2 S x z' S y2 S,x r R B' r B R' B"]];
var scrpizconj = [["B' r' R' r B r' R r", "13a", "H x' z S y2 S,y x r' R' r' R' z' r' R r R B',y x r' R' r B' r' R r B"],
        ["r B R B' r' B R' B'", "13b", "y' S x' z S y2 S,y' x B R B' r B R' B' r',y' r B r' R r B' r' R'"],
        ["B R B' r B R' B' r'", "13c", "H x' z S y2 S,x r B R B' r' B R' B'"],
        ["r' R' r B' r' R r B", "13d", "y' S x' z S y2 S,x B' r' R' r B r' R r"],
        ["r' R r R' z R r' R' r z' R r' R' r", "14a", "y' S y' S y H (Cancel),y' H y' S y S,x R' r' R' r R r' R' r R r' R r,x z R' r' R r B' r' R' r B R,y x r R r R' r' R r' R' r R r' R',y x r' R' z' r' R r z R r R r R' r,y' z R r R' r' R r R r' R' r R' r'"],
        ["r' R r R' z r' R r R' z' R r' R' r", "14b", "y S y' H y H  (Cancel),y H y' H y S,y x R' B' r' R r B r' R' r R,y2 x B R' B' r' R r R' z' R r' R' r B"],
        ["R r' R' r z' r' R r R' z r' R r R'", "14c", "y' H y H y' S (Cancel),y' S y H y' H,y2 x r R r R' r' R' r R r R' r' R r,y2 x R' r' R r' R' r R r' R r R' r,y z r' R' r R r' R' r' R r R' r R "],
        ["R r' R' r z' R r' R' r z r' R r R'", "14d", "y H y S y' S (Cancel),y S y S y' H,y' x R r R' B R B' R r2' R r,x R r R' r R r' R' r R r' R' r',y2 x r z r R' B r' R' r' z' r,y x R r' R r R r B R B' r' R',y' z R' r' R r' R' r R r R' r' R r"]];
var scrpi3s = [["r R' r' z' r' R' r z r R' r' R' r", "15a", "S S z S S S,x r' R r R r' z' r' R r z r R r',x R r' R' r' R B R' B' R' r' R,y2 x R r R' B' R r' R' r R r R' B'"],
        ["r' R r R r' z' r' R r z r R r'", "15b", "z' S S z' S S S,x r R' r' z' r' R' r z r R' r' R' r,x R' r' R r z r b r' R r R' z' R r' R,y2 x b' r' R r R r' R' r b' r' R r,y2 x r B r' B' r' R r R' r B r' B'"]];
var scrpihz = [["R' r' R' r' B R' B' r'", "16", "y' S y2 S y2 S,y S y2 S y2 H,x r B R B' r2' R r R,y2 x R' r' R' r'/r2 B R' B' r',y x B' r' R' r B'/B2 R' B' R',y' x R/R2' B R B/ B2' r' R r B"],
        ["r' R' r z r R r' R' z' r' R r", "17a", "y S y' H y H y' S y H,y2 x r' R' r R B R' B' r' R r,x r' R' r B R B' R' r' R r"],
        ["R r R' z' r' R' r R z R r' R'", "17b", "y S y H y' H y S y' H,y2 x R r R' r' z' r' R r z R r' R',y x R r2' R' r B r' R r' R' r B,x R r R' z' r' R' r R z R r' R',x r' R r R' z' r' R r' R' z' r' R r R,y' x r R r R' z R r' R' r b r' R r R',y x R r' R' r b' r' R r R' z' R r' R' r'"]];
var scrpswirl = [["r R r R' z R r' R' r b", "18a", "H y H y' H y H (Cancel),S y' H x z S y2 S,y2 H y H x S y2 S (Cancel),y x b' r' R r R' z' R r' R' r',y' x R' r' R' r z' r' R r R' B'"],
        ["b' r' R r R' z' R r' R' r'", "18b", "y' S y' S y S y' S (Cancel),y' H y S x' z S y2 S,y S y' S z' S y2 S (Cancel),x r/r2' R r R' z R r' R' r b,y2 x B R r' R' r z r' R r R"],
        ["R r' R r B' r' R r B", "18c", "y2 S y' H y S y' H,S y' H x z S y2 S,y2 H y H x S y2 S (Cancel),x R r' R r z R r' R' r',y2 x B' R r' R' r' z' r' R' r b,y x B' r' R' r B r' R' r R'"],
        ["R' r' R' r z R r R' r", "18d", "y H y S y' H y S,y' H y S z S y2 S,y S y' S x' z S y2 S (Cancel),x z r' R r' R' z' r' R r R,y x b r' R r z r R r R' B'"],
        ["r' R' r R' z' R r' R' r B'", "18e", "S y S y' S y S (Cancel),y2 S y S z S y2 S,H y' S x z S y2 S,y' x B r' R r R' z R r' R r,y' x R r' R r R' z' R r' R' r B'"],
        ["R r' R r R' z' R r' R' r B'", "18f", "y' H y' H y H y' H (Cancel),y H y' H z' S y2 S,y' S y H x' z S y2 S,y2 x B r' R r R' z R r' R' r R',x r' R' r R' z' R r' R' r B'"],
        ["r' R r' R' z' r' R r R", "18g", "y2 H y' S y H y' S,H y' S z' S y2 S,y2 S y' S x' z S y2 S,x R' r' R' r z R r R' r,y x r' R' r' R' z' r' R r B' R,x B R r' R' r' z' r' R' r b'"],
        ["R r' R r z R r' R' r'", "18h", "y S y H y' S y H,y H y' H x' z S y2 S,y' S y H z S y2 S,x z r R r R' z' r' R' r R',y2 x R r' R r' R' z' r' R r R B',y' x b' r' R r z r R r R' B"]];
var scrpwat = [["r R r R' z R r' R' r' z' r R'", "19a", "y' H y S z' S y2 S,y2 S y2 S y' H y' H,S y S y S y2 S,y' x r/r2' R r R' B R' B' R' r R',x z' R r' z r2' R r R' z' R r' R' r'"],
        ["r' R r' z' r' R' r z r' R r R", "19b", "S y' H z S y2 S,y S y2 S y S y S,y' H y' H y' S y2 S,y2 x r' R r z R r R' z R r' R' r b,y2 x b' r' R r R' z' R r' R' z' r' R' r,x R' r' R' r z' r' R r z r R' r"],
        ["R r B R B' r' R", "19c", "y S y' S z S y2 S,y2 S y2 S y S y H,S y' H y' S y2 S,x r2' R r R' z' r' R r,y' x r' R' r B R' B' R',x r R r R' z y R' r R,x R' r B R' B' r' R'"],
        ["B R B' r' R r R", "19d", "y2 H y' H z' S y2 S,y S y2 S y' H y' S,y' H y S y S y2 S,x R r R' z' r' R r R,y' x R' r' R' r B R' B',y x r' R' z' r' R' r B R',y' r R' z' r' R r B R"],
        ["r R' B' l r' y r R r'", "19e", "y' S y H z' S y2 S,y2 S y2 S y' S y' S (Cancel),H y H y S y2 S,y x B' R r R' r' R r R' B' r,y2 x b r' R' r z2 r' R r b',y2 B l' B' l r' y r R r',y r R' r' y' r l' B R r',y r R' r' y' r l' B l B'"],
        ["R' r R z B' b r' R' r", "19f", "H y' S z S y2 S,y S y2 S y H y H (Cancel),S y' S y' S y2 S,y r' R r b' B z' R' r' R,x z' B' R r R' z2 R r' R' B,y2 B' r B r' l y r' R' r"],
        ["r' R r' R' r' z' r' R' r R", "19g", "y H y' H z S y2 S,y2 S y2 S y H y S,H y S y' S y2 S,x z R' r' R r z r R r R' r,x r' R r' R' r' z' r' R' r R  "],
        ["R r' R r R z R r R' r'", "19h", "y2 S y S z' S y2 S,y S y2 S y' S y' H,S y H y S y2 S,x r R r' R' z' R' r' R' r R',y' x R r' R r R z R r R' r' "]];
var scrpx = [["R r' R' r z' R r' R' r", "20a", "y S y' S (Cancel)"],
        ["r' B r' R r R' r' B", "20b", "S y S"],
        ["r' R r R' z r' R r R'", "20c", "y2 H y H (Cancel)"],
        ["B' r R r' R' r B' r", "20d", "y' H y' H,y r' B r' R r R' r2 B"],
        ["r' R' r z' r' R r R' B", "20e", "S y' H,y2 x B' R r' R' r z r' R r"],
        ["B' R r' R' r z r' R r", "20f", "y S y H,y' x r' R' r z' r' R r R' B "],
        ["B' r' R r R' z R r' R' r R", "20g", "y' H y S,x y b r' R r R' z' R r' R',y x R' r' R r R' z' R r' R' r B"],
        ["b r' R r R' z' R r' R'", "20h", "y2 H y' S,x R r R' z R r' R' r b',x B' r' R r R' z R r' R' r R"]];
var scrphu = [["r' l r R r' l' r R'", "21a", "y H y H y S (Cancel),Use Advanced,y x b' r' R r R z' r' B' r B r',y' x R r' R' z' r' R r z r R r' R' r' R r R'"],
        ["r R' B R r' y' r' R' r", "21b", "y H y' S y' S (Cancel),y' x R r R' z R r' R' r z' r2' R r R',x z R r R r' R' r' z' r' R r B',y2 x B r' R r R z R r R' B R' B'"],
        ["r R' r' B' r R r' B", "21c", "y2 S y' S y' H (Cancel),Use Advanced,x B' r R' r' B r R r',x B' r' B r B' z r' R' r z' r',x r' R z R r' z' r' R' r' R' r R' B"],
        ["B' r R' r' B r R r'", "21d", "y2 S y H y H (Cancel),x r' R' r' R r R B R' B' r,x r' R' r z' r' R r R' z R' r' R' r,y x b' R r' R' r' z' r' R' r z' r' R r,y2 x r R' r' B' r R r' B"],
        ["R r' z' r' R r z r R r' R", "21e", "y' S y' H y' H,y x R' r R' r' z' r' R' r z r R',y2 x R r R' B R B' r' R r R r',y2 x R r R' r' R' z' r' R' r B R"],
        ["R r R' r' R' z' r' R' r z R r", "21f", "y' S y S y H,y' x R r' z' r' R r z r R r' R,x r' R' z' r' R r z R r R r' R'"],
        ["R r' R' z R r y r R' B R", "21g", "H y S y S,x R' B' R r' y' r' R' z' R r R',x R' r' R' r B R' B' R r' R' r,y2 x r/r2' R' r z r R r R' r' z' r"],
        ["r R' r z r R r R' r' z' r", "21h", "H y' H y' S,x r' R B R' B' R' r' R r',y2 x r' R r R' r' R' z' r' R' r B R'"]];
var scrpvu = [["r' R r R' z' R r R' r'", "22a", "x2 r R r' R' z R r' R' r,x r R' r' R r R B R' B' r',x z2 r B R B' R' r' R' r R r'"],
        ["R r' R' r z r' R' r R", "22b", "y' R' r' R r z' r' R r R',x B' R B R' B' R' r' R r B,x z2 B' r' R' r R B R B' R' B"],
        ["r R' r' z' r' R' r z r R", "22c", "y' x R' r' z' r' R r z r R r',y r' R' r R z' R r' R' r,y x r R' r' z r' R' r z r R"],
        ["R' r R z R r R' z' R' r'", "22d", "x r R z R r' R' z' R' r' R,y r R r' R' x r' R r R',z2 R r R' r' z r' R r R'"]];
var scrpo = [["r' R' r R z R r R' r'", "23a", "y2 H y' H y2 S,x z r R r' R' z' R' r' R r"],
        ["R r R' r' z' r' R' r R", "23b", "y S y S y2 H,x R' r' R r z r R r' R',y2 x B r R' r' B' r R r'"],
        ["r R r' R' z' R' r' R r", "23c", "y H y H y2 S (Cancel),x r' R' r R z R r R' r'"],
        ["R' r' R r z r R r' R'", "23d", "y2 S y' S y2 H (Cancel),x z R r R' r' z' r' R' r R"],
        ["r R B R B' R' r' R'", "23e", "S y H y2 S,y' R r R B R' B' R' r',x z2 r R r R' r' R' z' r' R' r B"],
        ["R r R B R' B' R' r'", "23f", "y' H y' S y2 H,y x B' r' R r R' z/z3' R' r' R r R,y x R B' r' B' r B r B R' B',y r R B R B' R' r' R',x2 r' R' z' R' r' R r z r R"],
        ["R' r' R' r l r' R r", "23g", "H y S y2 H,y2 x b r' R r R' z' R r2'/r R' r,y' z' r' R' r l' r' R r R,y x r B' r' R r R' r z r' R' r"],
        ["r' R' r z r' R' r R r", "23h", "y' S y' H y2 S,y r' R' r' R r z' r' R r,y x r' R r' R' z R r' R' r b'"]];
var scrpzconj = [["r' R' r z r' R r' R' r R r' R'", "24a", "y' S y' H y S,x z R r R' r' R r R' r z' r' R r"],
        ["R r R' z' R r' R r R' r' R r", "24b", "H y S y' H,x r' R' r R r' R' r R' z R r' R',x R B R' B' r' R' r R r' R' r R,y x B r' R r' R' r B z' r' R' r,y' x R' r' R' r' z' r' R' r R r' R' r B',x z2 R r R' r' R r R' z' R r' R' r R'"],
        ["R r R' r' R r R' z' R r' R r", "24c", "y' H y' S y H,x r' R' r R' z R r' R' r R r' R',x r' B R' B' R B R' B' R' r' R' r',x z2 r/r2' R r z B r' B' z' r' R' r' z' r "],
        ["r' R' r R r' R' r z r' R r' R'", "24d", "S y H y' S,y' x R r' R r R' z R r' R' r R r' R',y x R r R' r z' r' R r R' r' R r,x B r' R r R' r' R r z r R r.R"],
        ["R r' R' r z R r' R' r z' R r' R' r", "25a", "y2 S y' S y S,y' x r' R' r' z' r' R' r R r' R' r B,y2 x r R r R' r' R r R' z' R r' R' r R,x z' r B r' R' r B r' R r' B'"],
        ["R r' R' r z' R r' R' r z R r' R' r", "25b", "y' S y S y' S,y2 r B R' B' R B R' B' R' r' R' "],
        ["r' R r R' z' r' R r R' z r' R r R'", "25c", "y H y H y' H,y' x b' R r R' r' R r R' r z' r' R r'"],
        ["r' R r R' z r' R r R' z' r' R r R'", "25d", "H y' H y H,y2 x B' r' R r R' r' R r z r R r,x z r' R r R' z' b' r' R r R' z' R r' R' r'"]];
var scrp3s = [["r' R r R' r' R r R' z R r' R' r", "26a", "S y' S S (Cancel),S y H H"],
        ["R r' R' r z' R r' R' r R r' R' r", "26b", "y2 S S y' S (Cancel),S y' H H,x r R r' R' r B R' B' R' r' R',x B r' R r R z R r R' r' R r R"],
        ["r' R r R' r' R r R' z r' R r R'", "26c", "y' H y H H (Cancel),y2 S S y H"],
        ["r' R r R' z r' R r R' r' R r R'", "26d", "y2 H y S S,y H H y H (Cancel),x z' r' B R' B' R' r' R' r R r' R' r'"]];
var scrphzpure = [["r' R r R' z B R r' R' r B'", "27", "y' S S y' S S (Cancel),y2 S S y S S,y2 B r' R r R' B' z' R r' R' r,y2 x r' R' z' r B r' R r y' r' R' r,x z' B' r' R r R' B' z2 R r' R' r b',y' x r' R F' r' R r y2 z' r' R r R',y x B r' R' r B r' R r f' R B' R',x z r B R' B' R z2 B r' R r R' B"],
        ["R r' R' r z r' R' r x R r R'", "28", "r' R' r z Sledge z' Hedge R,S y' S S y' S y2 S (Cancel),x z' r' R' r z r' R r R' r z' r' R' r R,x z R' r' R r R' z R r' R' r z' r' R r,x z r' R r x R r' R z R r' R' r,x R r' R' x' r' R r z' r' R r R',x z r R' r' R r R' z' R r' R r B,y2 x r B R B' R r' R r R' r' R"],
        ["r R r' R' z' r' R' r z r' R r' R'", "29a", "r' R' r Hedge z' Hedge B,y' S y' S y' H,y x r' R' r R r' R' r' z' r' R' r B,y x r R r' R' z' r' R' r z r' R r' R',x z' B' r' R r R z R r R' r' R r,x z2 R r R' r' R r R z R r R' b',x r' R' r R' B R' B' r' R' r R,x z R r R' r z' r' R r z R r R' r',x z2 R' r' R r B R B' R r' R r"],
        ["B L' r B' l' r' y r' R' r", "29b", "y S y' H y S y' H y H (Cancel),x R r' R r' R' z' r' R r B' R,y' r' R r y' r l B r' l B',y z' r' R' r y z' r' R r b r' R' r"]];
var scrl4c = [["r' R' r y x' R r y R r' R'", "30a", "Setup to triple sledge (Cancel),y2 x R r R' B' r' B' r B,y2 x r B r' z' b' r' R' r b,y2 x B' r' B r B R r' R',y' x R' r' R' r b z r B r' z' b' R,y' x R' r' B' r B R r R' B' "],
        ["r' R' r z B r B r' B'", "30b", "Setup to triple sledge (Cancel),x z' r' R' r b z r B r' z' b',x B' r B r' B' z' r' R' r b',y x B r' B' z' r' R' r b R,y' x R r R' r' R r R' r2 R r R' r',x B r B' r' B' z' r' R r,y2 x r R' B' r' B' r B R,x z' r' B' r B R r R' B' "],
        ["r' R r z B r B' r' z' b'", "31", "S S S,y2 x b' r' R' r b z r B r',y2 x b z r B r' B' z' r' R' r,x z2 B R r R' B' r' B' r,x z2 B' r' B' r B R r R',y' x R' B' r' B' r B R r,y x r B R r R' B' r' B' "],
        ["b' r' R r R' z2 r' R r", "UPerm", "y' x S y2 S,y x b' r' R r R' z2 r' R r,y x' r' R' r z2 R r' R' r b"],
        ["r' l r' l' B' l' B l r'", "32", "y R L' U' L U L R L' R,y x r' B r' B' z' r' R' r z B r',y x r/r2' B' r B R r R' B' r,y x R2' B' r' B' r B R r R,x r' B' r' B' r B R r R r,y r l' B' l B l r l' r,z r2' R' r b z r B r' z' b' r"],
        ["B' r R' B x R r' R r'", "33", "S y2 H y2 S,r2'/r R' r R' b' r2'/r B' r,r/r2' R' r R' x' B' R r' B,r R' r R' y L' l L' l,x r' R r R' B' r' B' r B r,x R r' B' r B R r R' B' R'"],
        ["R' r' R' r z2 R r' R' r b'", "34a", "Setup to U Perm,x b r' R r R' z2 r' R r R"],
        ["r' R r' R' r z2 R r' R' r B", "34b", "Setup to U perm,x B' r' R r R' z2 r' R r R' r,y x R' r' R' r z2 R r' R' r b'"]];
var scrl5c = [["R' b R r' R' r R' b R r' R' r", "35a", "y' S y2 S x z' S y2 S,y' x r' R r R' r R y' r' R r B' r,y' x b R r' b r R' b' r R' r',y x r' R r R' b' R r' R r R' b' R"],
        ["r' R B R' r B R' z b' r R'", "35b", "S y2 S z' y' S y2 S,y2 x R r' R' r B r' R r' R' r B r',x r B' r' R r R' r B' r' R r R',y x B' r' R r R' r R y' r' R r B' r',x z R r' b z' R B' r' R B' R' r "],
        ["R' r B' r' R r R' r B' r' R r", "36a", "S y2 S y S y2 S,H y2 H y H y2 H (Cancel),y' x r' R' r B r' R r' R' r B r' R,y x R' r B r' R r' R' r B r' R r',y x r' R r R' r B' r' R r R' r B'"],
        ["r B' r' R r R' r z2 r' R r' R' r", "36b", "y' S y2 S y' S y2 S (Cancel),S y2 S x' z S y2 S,y' x B r' R r' R' r B r' R r' R' r,x B' r' R' r B r' R r z' r' R r R',y' x B r' R r R' r R y' r' R r B',y2 x r' R r R' r z2 r' R r' R' r B r'"],
        ["R' r R B' r B R' B r' R r", "37a", "H y H y' S y S (Cancel),S y S y' H y H (Cancel),x B' r' R r R' r B' r' R r R' r,y' x r' R' r B r' R r z' r' R r R' z' r',y2 x R r' R r R' z' r2' R' r B r' R"],
        ["r' B R r R' B r' z r' R' r", "37b", "y' S y' H y H y' S (Cancel),y' H y' H y S y' S (Cancel),x r B r' R r' R' r B r' R r' R',y2 x r' R r' R' r B r' R r' R' r B,x r' R r z' r B' R r' R' B' r"]];

// these are ordered to match the resources doc
var allAlgs = scrpiswirl.concat(scrpiwat, scrpix, scrpihu, scrpivu, scrpio, scrpizconj, scrpi3s,
    scrpihz, scrpswirl, scrpwat, scrpx, scrphu, scrpvu, scrpo, scrpzconj, scrp3s,
    scrphzpure, scrl4c, scrl5c);

var scramblelistAlg = [["R R'", "", "R R'"]];
var scramblelistOL = [["R R'", "", "R R'"]];

function transftoWCA(scr) {
    // define list carrying all stickers of the skewb and the color that is placed there initially

    // note that for this subprogram of SkewbSkills, we only need the centers and can therefore
    // use arbitrary letters for all other facelets

    // might be improved in the future so that there are only 6 elements in the list
    // but right know it does not matter (we only have to do it once and never again, in principle)
    var stickercol = ["o", "a", "a", "a", "a", "g", "a", "a", "a", "a", "y", "a", "a", "a", "a",
                      "w", "a", "a", "a", "a", "r", "a", "a", "a", "a", "b", "a", "a", "a", "a"];

    // define a string carrying the WCA notation scramble
    var finalscr = "";

    // split the scramble sequence into distinct moves (default split character space)
    var scrsplit = scr.split(" ");

    // store all the cycled centers (as in: all permutations of three centers) in one list
    var allcycles = [];

    // go through all elements (moves) and find out what centers they permute
    for (var i of scrsplit) {
        // ensure we can compare the current with previous list
        var previous = stickercol.slice();

        // for each move, store the permuted centers
        var thecycledcolors = [];

        // use a lighter version of the code in MainWindow.py, so just permute centers as they are
        // sufficient to describe the notation (abbreviations for moves) or in other words the
        // centers implicate unambiguous move sequence
        if (i == "x") {
            fourswap(stickercol, 15, 25, 10, 5);

        }
        else if (i == "x'") {
            fourswap(stickercol, 5, 10, 25, 15);

        }
        else if (i == "x2") {
            fourswap(stickercol, 5, 10, 25, 15);
            fourswap(stickercol, 5, 10, 25, 15);

        }
        else if (i == "y") {
            fourswap(stickercol, 25, 20, 5, 0);

        }
        else if (i == "y'") {
            fourswap(stickercol, 0, 5, 20, 25);

        }
        else if (i == "y2") {
            fourswap(stickercol, 0, 5, 20, 25);
            fourswap(stickercol, 0, 5, 20, 25);

        }
        else if (i == "z") {
            fourswap(stickercol, 15, 20, 10, 0);

        }
        else if (i == "z'") {
            fourswap(stickercol, 0, 10, 20, 15);

        }
        else if (i == "z2") {
            fourswap(stickercol, 0, 10, 20, 15);
            fourswap(stickercol, 0, 10, 20, 15);

        }
        else if (i == "r" || i == "r'2") {
            threeswap(stickercol, 10, 20, 25);

        }
        else if (i == "r'" || i == "r2") {
            threeswap(stickercol, 25, 20, 10);

        }
        else if (i == "R" || i == "R'2") {
            threeswap(stickercol, 15, 25, 20);

        }
        else if (i == "R'" || i == "R2") {
            threeswap(stickercol, 20, 25, 15);

        }
        else if (i == "l" || i == "L" || i == "l'2" || i == "L'2") {
            threeswap(stickercol, 0, 5, 10);

        }
        else if (i == "l'" || i == "L'" || i == "l2" || i == "L2") {
            threeswap(stickercol, 10, 5, 0);

        }
        else if (i == "f" || i == "f'2") {
            threeswap(stickercol, 5, 20, 10);

        }
        else if (i == "f'" || i == "f2") {
            threeswap(stickercol, 10, 20, 5);

        }
        else if (i == "B" || i == "U" || i == "B'2" || i == "U'2") {
            threeswap(stickercol, 0, 25, 15);

        }
        else if (i == "B'" || i == "U'" || i == "B2" || i == "U2") {
            threeswap(stickercol, 15, 25, 0);

        }
        else if (i == "b" || i == "b'2") {
            threeswap(stickercol, 0, 10, 25);

        }
        else {
            threeswap(stickercol, 25, 10, 0);
        }

        // "read the previous" "compare with current" only if i = real move (no rotations)

        if (["x", "x'", "x2", "y", "y'", "y2", "z", "z'", "z2"].includes(i) === false) {
            // check all centers (if they changed or not)
            for (var j of [0, 5, 10, 15, 20, 25]) {
                if (previous[j] == stickercol[j]) {
                    continue;
                }
                else {
                    // store the previous and the current color
                    thecycledcolors.push([previous[j], stickercol[j]]);
                }
            }
            // after all centers have been checked, store the list of the three varied centers
            // in one bigger list
            allcycles.push(thecycledcolors);

            // whole process is repeated for all moves in the Rubiksskewb notation scramble sequence
        }
    }
    // find out the WCA moves that permute the exact same 3-tuples of centers

    /*# store the corresponding permuted INDICES for each move; find out, beginning
    # with the initial state, which INDICES need to be permuted with each move
    # for that: transform the cycle of colors to a cycle of indices (knowing where the three cycled
    # colors were in the previous and the current stickercol list is necessary, and then you go
    # back to their indices)*/

    /*# go through all the cycled centers
    # move them either directly (rather: their indices) with WCA moves
    # or move the opposite indices with WCA moves*/

    // find the indices on the WCA skewb, starting with the initial = solved state

    var stickercolWCA = ["o", "a", "a", "a", "a", "g", "a", "a", "a", "a", "y", "a", "a", "a", "a",
                         "w", "a", "a", "a", "a", "r", "a", "a", "a", "a", "b", "a", "a", "a", "a"];

    // go through all real moves changing three centers, for in means go through all indices of allcycles, while
    // for of means all elements in allcycles --> here, for in is correct
    for (var o in allcycles) {
        /*# find out the indices of the three premuted colors on the WCA-scrambled cube
        # for this I take the two colors of the first entry (one transposition) and find the
        # third one by checking if the remaining entrys are already covered by the variables
        # "first" and "second" or not -> then I use the third and last color that is affected
        # by the move*/
        var first = stickercolWCA.indexOf(allcycles[o][0][1]);
        var second = stickercolWCA.indexOf(allcycles[o][0][0]);
        var third;
        if ((stickercolWCA.indexOf(allcycles[o][1][0]) == first) || (stickercolWCA.indexOf(allcycles[o][1][0]) == second)) {
            third = stickercolWCA.indexOf(allcycles[o][2][0]);
        }
        else {
            third = stickercolWCA.indexOf(allcycles[o][1][0]);
        }

        /*# find out which WCA move corresponds to the permuted centers (or if this is not possible,
        # I check if the permuted centers are opposite to the normally affected centers by
        # standard WCA moves)

        # in either case, print the corresponding WCA move and swap the corresponding centers
        # to proceed with the next real move*/
        if ([first, second, third].every(function(element, index) {
                return element === [20, 25, 10][index];
            }) || [first, second, third].every(function(element, index) {
                return element === [25, 10, 20][index];
            }) || [first, second, third].every(function(element, index) {
                return element === [10, 20, 25][index];
            }) || [first, second, third].every(function(element, index) {
                return element === [0, 15, 5][index];
            }) || [first, second, third].every(function(element, index) {
                return element === [15, 5, 0][index];
            }) || [first, second, third].every(function(element, index) {
                return element === [5, 0, 15][index];
            })) {
            /*([first, second, third] == [20,25,10] || [first, second, third] == [25,10,20]
        || [first, second, third] == [10,20,25] || [first, second, third] == [0,15,5]
        || [first, second, third] == [15,5,0] || [first, second, third] == [5,0,15])*/
            finalscr = finalscr + "R ";
            threeswap(stickercolWCA, 10, 20, 25);
        }
        else if ([first, second, third].every(function(element, index) {
                return element === [10, 25, 20][index];
            }) || [first, second, third].every(function(element, index) {
                return element === [20, 10, 25][index];
            }) || [first, second, third].every(function(element, index) {
                return element === [25, 20, 10][index];
            }) || [first, second, third].every(function(element, index) {
                return element === [5, 15, 0][index];
            }) || [first, second, third].every(function(element, index) {
                return element === [0, 5, 15][index];
            }) || [first, second, third].every(function(element, index) {
                return element === [15, 0, 5][index];
            })) {
            /*([first, second, third] == [10,25,20]|| [first, second, third] == [20,10,25]
        || [first, second, third] == [25,20,10] || [first, second, third] == [5,15,0]
        || [first, second, third] == [0,5,15] || [first, second, third] == [15,0,5])*/
            finalscr += "R' ";
            threeswap(stickercolWCA, 25, 20, 10);
        }
        else if ([first, second, third].every(function(element, index) {
                return element === [0, 5, 10][index];
            }) || [first, second, third].every(function(element, index) {
                return element === [5, 10, 0][index];
            }) || [first, second, third].every(function(element, index) {
                return element === [10, 0, 5][index];
            }) || [first, second, third].every(function(element, index) {
                return element === [15, 25, 20][index];
            }) || [first, second, third].every(function(element, index) {
                return element === [25, 20, 15][index];
            }) || [first, second, third].every(function(element, index) {
                return element === [20, 15, 25][index];
            })) {
            /*([first, second, third] == [0,5,10] || [first, second, third] == [5,10,0]
        || [first, second, third] == [10,0,5] || [first, second, third] == [15,25,20]
        || [first, second, third] == [25,20,15] || [first, second, third] == [20,15,25])*/
            finalscr += "L ";
            threeswap(stickercolWCA, 0, 5, 10);
        }
        else if ([first, second, third].every(function(element, index) {
                return element === [10, 5, 0][index];
            }) || [first, second, third].every(function(element, index) {
                return element === [0, 10, 5][index];
            }) || [first, second, third].every(function(element, index) {
                return element === [5, 0, 10][index];
            }) || [first, second, third].every(function(element, index) {
                return element === [20, 25, 15][index];
            }) || [first, second, third].every(function(element, index) {
                return element === [15, 20, 25][index];
            }) || [first, second, third].every(function(element, index) {
                return element === [25, 15, 20][index];
            })) {
            /*([first, second, third] == [10,5,0] || [first, second, third] == [0,10,5]
        || [first, second, third] == [5,0,10] || [first, second, third] == [20,25,15]
        || [first, second, third] == [15,20,25] || [first, second, third] === [25,15,20])*/
            finalscr += "L' ";
            threeswap(stickercolWCA, 10, 5, 0);
        }
        else if ([first, second, third].every(function(element, index) {
                return element === [15, 0, 25][index];
            }) || [first, second, third].every(function(element, index) {
                return element === [0, 25, 15][index];
            }) || [first, second, third].every(function(element, index) {
                return element === [25, 15, 0][index];
            }) || [first, second, third].every(function(element, index) {
                return element === [5, 20, 10][index];
            }) || [first, second, third].every(function(element, index) {
                return element === [20, 10, 5][index];
            }) || [first, second, third].every(function(element, index) {
                return element === [10, 5, 20][index];
            })) {
            /*([first, second, third] == [15,0,25] || [first, second, third] == [0,25,15]
        || [first, second, third] == [25,15,0] || [first, second, third] == [5,20,10]
        || [first, second, third] == [20,10,5] || [first, second, third] == [10,5,20])*/
            finalscr += "U ";
            threeswap(stickercolWCA, 0, 25, 15);
        }
        else if ([first, second, third].every(function(element, index) {
                return element === [25, 0, 15][index];
            }) || [first, second, third].every(function(element, index) {
                return element === [15, 25, 0][index];
            }) || [first, second, third].every(function(element, index) {
                return element === [0, 15, 25][index];
            }) || [first, second, third].every(function(element, index) {
                return element === [10, 20, 5][index];
            }) || [first, second, third].every(function(element, index) {
                return element === [5, 10, 20][index];
            }) || [first, second, third].every(function(element, index) {
                return element === [20, 5, 10][index];
            })) {
            /*([first, second, third] == [25,0,15] || [first, second, third] == [15,25,0]
        || [first, second, third] == [0,15,25] || [first, second, third] == [10,20,5]
        || [first, second, third] == [5,10,20] || [first, second, third] == [20,5,10])*/
            finalscr += "U' ";
            threeswap(stickercolWCA, 15, 25, 0);
        }
        else if ([first, second, third].every(function(element, index) {
                return element === [25, 0, 10][index];
            }) || [first, second, third].every(function(element, index) {
                return element === [0, 10, 25][index];
            }) || [first, second, third].every(function(element, index) {
                return element === [10, 25, 0][index];
            }) || [first, second, third].every(function(element, index) {
                return element === [15, 20, 5][index];
            }) || [first, second, third].every(function(element, index) {
                return element === [20, 5, 15][index];
            }) || [first, second, third].every(function(element, index) {
                return element === [5, 15, 20][index];
            })) {
            /*([first, second, third] == [25,0,10] || [first, second, third] == [0,10,25]
        || [first, second, third] == [10,25,0] || [first, second, third] == [15,20,5]
        || [first, second, third] == [20,5,15] || [first, second, third] == [5,15,20])*/
            finalscr += "B ";
            threeswap(stickercolWCA, 0, 10, 25);
        }
        else if ([first, second, third].every(function(element, index) {
                return element === [10, 0, 25][index];
            }) || [first, second, third].every(function(element, index) {
                return element === [25, 10, 0][index];
            }) || [first, second, third].every(function(element, index) {
                return element === [0, 25, 10][index];
            }) || [first, second, third].every(function(element, index) {
                return element === [5, 20, 15][index];
            }) || [first, second, third].every(function(element, index) {
                return element === [15, 5, 20][index];
            }) || [first, second, third].every(function(element, index) {
                return element === [20, 15, 5][index];
            })) {
            /*([first, second, third] == [10,0,25] || [first, second, third] == [25,10,0]
        || [first, second, third] == [0,25,10] || [first, second, third] == [5,20,15]
        || [first, second, third] == [15,5,20] || [first, second, third] == [20,15,5])*/
            finalscr += "B' ";
            threeswap(stickercolWCA, 25, 10, 0);
        }
    }

    return (finalscr);

}

function doubleMoveRemover(scramble) {
    var newScr = [];
    var newScrString = "";
    var scrSplit = [];
    scrSplit = (scramble.split(" ")).slice(0, -1);

    for (var i = 0; i < scrSplit.length; i++) {
        if (newScr.length >= 1) {
            if (newScr[newScr.length - 1] == scrSplit[i]) {
                if ((scrSplit[i]).length == 1) {
                    newScr.pop();
                    newScr.push(scrSplit[i] + "'");
                }
                else {
                    newScr.pop();
                    newScr.push(scrSplit[i].charAt(0));
                }
            }
            else {
                if (newScr[newScr.length - 1].charAt(0) == scrSplit[i].charAt(0)) {
                    newScr.pop();
                }
                else {
                    newScr.push(scrSplit[i]);
                }
            }
        }
        else {
            newScr.push(scrSplit[i]);
        }
    }
    for (move of newScr) {
        newScrString += move + " ";
    }
    return (newScrString);
}

// (de/in-)crement the number of moves for the first layer trainer scrambles
function decrMoves() {
    var scrlen = parseInt(document.getElementById("scrlenlabel").innerHTML);
    if (scrlen > 1) {
        scrlen -= 1;
        document.getElementById("scrlenlabel").innerHTML = scrlen;
        changescrlen();
    }
}

function incrMoves() {
    var scrlen = parseInt(document.getElementById("scrlenlabel").innerHTML);
    if (scrlen < 7) {
        scrlen += 1;
        document.getElementById("scrlenlabel").innerHTML = scrlen;
        changescrlen();
    }
}

function decrMovesOL() {
    var scrlenOL = parseInt(document.getElementById("scrlenlabelOL").innerHTML);
    if (scrlenOL > 1) {
        scrlenOL -= 1;
        document.getElementById("scrlenlabelOL").innerHTML = scrlenOL;
    }
    changescrlenOL();
}

function incrMovesOL() {
    var scrlenOL = parseInt(document.getElementById("scrlenlabelOL").innerHTML);
    if (scrlenOL < 7) {
        scrlenOL += 1;
        document.getElementById("scrlenlabelOL").innerHTML = scrlenOL;
    }
    changescrlenOL();
}

// when a change of the selected algs has been made by (un-)selecting a set or a whole bunch of sets
// change the style of the toggle buttons and save the correct combination of scrambles as auxscrl
// shuffle them and save them as the scramblelist to be used in further functions
function changescrlen() {
    var scrlen = parseInt(document.getElementById("scrlenlabel").innerHTML);

    if (scrlen === 1) {
        var auxscr1 = newscramble1list.slice(0);
        if (document.getElementById("shufflescrchecker").checked === true) {
            shuffle(auxscr1);
            scramblelist = auxscr1;
        }
        else {
            scramblelist = auxscr1;
        }
    }
    if (scrlen === 2) {
        var auxscr2 = newscramble2list.slice(0);
        if (document.getElementById("shufflescrchecker").checked === true) {
            shuffle(auxscr2);
            scramblelist = auxscr2;
        }
        else {
            scramblelist = auxscr2;
        }
    }
    if (scrlen === 3) {
        var auxscr3 = newscramble3list.slice(0);
        if (document.getElementById("shufflescrchecker").checked === true) {
            shuffle(auxscr3);
            scramblelist = auxscr3;
        }
        else {
            scramblelist = auxscr3;
        }
    }
    if (scrlen === 4) {
        var auxscr4 = newscramble4list.slice(0);
        if (document.getElementById("shufflescrchecker").checked === true) {
            shuffle(auxscr4);
            scramblelist = auxscr4;
        }
        else {
            scramblelist = auxscr4;
        }
    }
    if (scrlen === 5) {
        var auxscr5 = newscramble5list.slice(0);
        if (document.getElementById("shufflescrchecker").checked === true) {
            shuffle(auxscr5);
            scramblelist = auxscr5;
        }
        else {
            scramblelist = auxscr5;
        }
    }
    if (scrlen === 6) {
        var auxscr6 = newscramble6list.slice(0);
        if (document.getElementById("shufflescrchecker").checked === true) {
            shuffle(auxscr6);
            scramblelist = auxscr6;
        }
        else {
            scramblelist = auxscr6;
        }
    }
    if (scrlen === 7) {
        var auxscr7 = newscramble7list.slice(0);
        if (document.getElementById("shufflescrchecker").checked === true) {
            shuffle(auxscr7);
            scramblelist = auxscr7;
        }
        else {
            scramblelist = auxscr7;
        }
    }
}

function changescrlenAlg() {
    // style of the buttons according to the
    // states of the checkboxes
    // placeholder for scrambles
    // NEW: auxscrl shall be placeholder for scrambles AND hints
    var auxscrl = [];
    // default = solved Skewb, trivial scramble
    if (document.getElementById("l4c").checked == false ||
        document.getElementById("l5c").checked == false ||
        document.getElementById("pi3s").checked == false ||
        document.getElementById("pihu").checked == false ||
        document.getElementById("pihz").checked == false ||
        document.getElementById("pio").checked == false ||
        document.getElementById("piswirl").checked == false ||
        document.getElementById("pivu").checked == false ||
        document.getElementById("piwat").checked == false ||
        document.getElementById("pix").checked == false ||
        document.getElementById("pizconj").checked == false ||
        document.getElementById("p3s").checked == false ||
        document.getElementById("phu").checked == false ||
        document.getElementById("phzpure").checked == false ||
        document.getElementById("po").checked == false ||
        document.getElementById("pswirl").checked == false ||
        document.getElementById("pvu").checked == false ||
        document.getElementById("pwat").checked == false ||
        document.getElementById("px").checked == false ||
        document.getElementById("pzconj").checked == false) {
        if (document.body.classList.contains("dark")) {
            document.getElementById("toggleAll").style.color = 'white';
        }
        else {
            document.getElementById("toggleAll").style.color = 'black';
        }
        var buttonsA = document.getElementsByName("btngroupA");
        var buttons = document.getElementsByName("btngroup");
        var atleastonechecked = false;
        for (var i = 0; i < buttonsA.length; i++) {
            if (buttonsA[i].checked === true) {
                atleastonechecked = true;
                break;
            }
        }
        for (var i = 0; i < buttons.length; i++) {
            if (buttons[i].checked === true) {
                atleastonechecked = true;
                break;
            }
        }
        if (atleastonechecked === false) {
            // NEW: push an array of scramble + hint at the same time,
            //      hint should as well carry an image (link) and solutions
            //      scramble, path to png, comma-separated solutions
            auxscrl.push([["R R'", "", "R R'"]]);
            // OLD: auxscrl.push("R R'");
        }
    }
    else {
        document.getElementById("toggleAll").style.color = 'green';

    }
    if (document.getElementById("pi3s").checked == false ||
        document.getElementById("pihu").checked == false ||
        document.getElementById("pihz").checked == false ||
        document.getElementById("pio").checked == false ||
        document.getElementById("piswirl").checked == false ||
        document.getElementById("pivu").checked == false ||
        document.getElementById("piwat").checked == false ||
        document.getElementById("pix").checked == false ||
        document.getElementById("pizconj").checked == false) {
        if (document.body.classList.contains("dark")) {
            document.getElementById("togglePi").style.color = 'white';
        }
        else {
            document.getElementById("togglePi").style.color = 'black';
        }
    }
    else {
        document.getElementById("togglePi").style.color = 'green';

    }
    if (document.getElementById("p3s").checked == false ||
        document.getElementById("phu").checked == false ||
        document.getElementById("phzpure").checked == false ||
        document.getElementById("po").checked == false ||
        document.getElementById("pswirl").checked == false ||
        document.getElementById("pvu").checked == false ||
        document.getElementById("pwat").checked == false ||
        document.getElementById("px").checked == false ||
        document.getElementById("pzconj").checked == false) {
        if (document.body.classList.contains("dark")) {
            document.getElementById("togglePeanut").style.color = 'white';
        }
        else {
            document.getElementById("togglePeanut").style.color = 'black';
        }
    }
    else {
        document.getElementById("togglePeanut").style.color = 'green';

    }
    if (document.getElementById("l4c").checked == false ||
        document.getElementById("l5c").checked == false) {
        if (document.body.classList.contains("dark")) {
            document.getElementById("toggleL").style.color = 'white';
        }
        else {
            document.getElementById("toggleL").style.color = 'black';
        }
    }
    else {
        document.getElementById("toggleL").style.color = 'green';

    }

    // get the correct scrambles

    if (document.getElementById("l4c").checked === true) {
        auxscrl = auxscrl.concat(scrl4c);
    }
    if (document.getElementById("l5c").checked === true) {
        auxscrl = auxscrl.concat(scrl5c);
    }
    if (document.getElementById("p3s").checked === true) {
        auxscrl = auxscrl.concat(scrp3s);
    }
    if (document.getElementById("phu").checked === true) {
        auxscrl = auxscrl.concat(scrphu);
    }
    if (document.getElementById("phzpure").checked === true) {
        auxscrl = auxscrl.concat(scrphzpure);
    }
    if (document.getElementById("pi3s").checked === true) {
        auxscrl = auxscrl.concat(scrpi3s);
    }
    if (document.getElementById("pihu").checked === true) {
        auxscrl = auxscrl.concat(scrpihu);
    }
    if (document.getElementById("pihz").checked === true) {
        auxscrl = auxscrl.concat(scrpihz);
    }
    if (document.getElementById("pio").checked === true) {
        auxscrl = auxscrl.concat(scrpio);
    }
    if (document.getElementById("piswirl").checked === true) {
        auxscrl = auxscrl.concat(scrpiswirl);
    }
    if (document.getElementById("pivu").checked === true) {
        auxscrl = auxscrl.concat(scrpivu);
    }
    if (document.getElementById("piwat").checked === true) {
        auxscrl = auxscrl.concat(scrpiwat);
    }
    if (document.getElementById("pix").checked === true) {
        auxscrl = auxscrl.concat(scrpix);
    }
    if (document.getElementById("pizconj").checked === true) {
        auxscrl = auxscrl.concat(scrpizconj);
    }
    if (document.getElementById("po").checked === true) {
        auxscrl = auxscrl.concat(scrpo);
    }
    if (document.getElementById("pswirl").checked === true) {
        auxscrl = auxscrl.concat(scrpswirl);
    }
    if (document.getElementById("pvu").checked === true) {
        auxscrl = auxscrl.concat(scrpvu);
    }
    if (document.getElementById("pwat").checked === true) {
        auxscrl = auxscrl.concat(scrpwat);
    }
    if (document.getElementById("px").checked === true) {
        auxscrl = auxscrl.concat(scrpx);
    }
    if (document.getElementById("pzconj").checked === true) {
        auxscrl = auxscrl.concat(scrpzconj);
    }
    var group = document.getElementsByName("btngroup");
    for (var i = 0; i < group.length; i++) {
        if (group[i].checked === true) {
            auxscrl.push(allAlgs[i]);
        }
    }
    shuffle(auxscrl);
    scramblelistAlg = auxscrl;
}

function changescrlenOL() {
    var scrlenOL = parseInt(document.getElementById("scrlenlabelOL").innerHTML);
    // grab random L2L scramble
    var auxscrlOL1 = [allAlgs[Math.floor(Math.random() * allAlgs.length)][0]];
    // grab random FL scramble
    var auxscrlOL2 = [];
    if (scrlenOL === 1) {
        var auxscr1OL = [newscramble1list[Math.floor(Math.random() * newscramble1list.length)]];
        //var auxscr1OL = newscramble1list.slice(0);
        auxscrlOL2 = auxscr1OL;
    }
    if (scrlenOL === 2) {
        var auxscr2OL = [newscramble2list[Math.floor(Math.random() * newscramble2list.length)]];
        //var auxscr2OL = newscramble2list.slice(0);
        auxscrlOL2 = auxscr2OL;
    }
    if (scrlenOL === 3) {
        var auxscr3OL = [newscramble3list[Math.floor(Math.random() * newscramble3list.length)]];
        //var auxscr3OL = newscramble3list.slice(0);
        auxscrlOL2 = auxscr3OL;
    }
    if (scrlenOL === 4) {
        var auxscr4OL = [newscramble4list[Math.floor(Math.random() * newscramble4list.length)]];
        //var auxscr4OL = newscramble4list.slice(0);
        auxscrlOL2 = auxscr4OL;
    }
    if (scrlenOL === 5) {
        var auxscr5OL = [newscramble5list[Math.floor(Math.random() * newscramble5list.length)]];
        //var auxscr5OL = newscramble5list.slice(0);
        auxscrlOL2 = auxscr5OL;
    }
    if (scrlenOL === 6) {
        var auxscr6OL = [newscramble6list[Math.floor(Math.random() * newscramble6list.length)]];
        //var auxscr6OL = newscramble6list.slice(0);
        auxscrlOL2 = auxscr6OL;
    }
    if (scrlenOL === 7) {
        var auxscr7OL = [newscramble7list[Math.floor(Math.random() * newscramble7list.length)]];
        //var auxscr7OL = newscramble7list.slice(0);
        auxscrlOL2 = auxscr7OL;
    }
    // add both together
    var completeScr = [];
    completeScr.push(transftoWCA(auxscrlOL1[0]) + auxscrlOL2[0]);
    scramblelistOL = completeScr;
}
// grab new scrambles when button is clicked, if array is empty, get new ones; write scramble and
// colour into corresponding labels
function ScramblePlusColour() {
    if (scramblelist.length == 0) {
        changescrlen();
    }

    var scramblezumanzeigen = scramblelist[scramblelist.length - 1];
    scramblelist.pop();
    document.getElementById("scramblelabel").innerHTML = scramblezumanzeigen;

    if (showscrimageFLT.checked == true) {
        document.getElementById("scrDrawing").style.display = "block";
    }
    else {
        document.getElementById("scrDrawing").style.display = "none";
    }

    ShowScramble(scramblezumanzeigen);

    if (document.getElementById("anycolourchecker").checked === true) {
        var cl = ["w", "y", "g", "r", "b", "o"][Math.floor(Math.random() * 6)];
        if (cl === "w") {
            document.getElementById("colourlabel").style.background = 'white';
        }
        else if (cl === "y") {
            document.getElementById("colourlabel").style.background = 'yellow';
        }
        else if (cl === "g") {
            document.getElementById("colourlabel").style.background = 'green';
        }
        else if (cl === "r") {
            document.getElementById("colourlabel").style.background = 'red';
        }
        else if (cl === "b") {
            document.getElementById("colourlabel").style.background = 'blue';
        }
        else {
            document.getElementById("colourlabel").style.background = 'orange';
        }
    }
    else {
        document.getElementById("colourlabel").style.background = 'white';
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function ScramblePlusColourAlg() {
    if (scramblelistAlg.length == 0) {
        changescrlenAlg();
    }

    // get the whole case, with path to image and solutions
    var caseWithHint = scramblelistAlg[scramblelistAlg.length - 1];
    // the scramble itself is the first element per case
    var scramblezumanzeigenAlg = caseWithHint[0];
    // this could be a place to read the corresponding entry in a DB to looku
    // hints for the case (with scramblezumanzeigenAlg)
    scramblelistAlg.pop();
    // get random int for top site color: 0, 1, 2, 3: /, x, x2, x' | 4, 5: z, z'
    // get random int for side color: 0, 1, 2, 3: /, y, y2, y'
    // if x2y2 do z2 instead
    var firstRotations = ["", "x ", "x2 ", "x' ", "z ", "z' ", "z2 "]
    var firstRotationsInv = ["", " x'", " x2", " x", " z'", " z", " z2"]
    var secondRotations = ["", "y ", "y2 ", "y' "]
    var secondRotationsInv = ["", " y'", " y2", " y"]
    var firstRotationIndex = getRandomInt(6);
    var secondRotationIndex = getRandomInt(4);
    if (firstRotationIndex == 2 && secondRotationIndex == 2) {
        firstRotationIndex = 6;
        secondRotationIndex = 0;
    }
    var firstRotation = firstRotations[firstRotationIndex];
    var secondRotation = secondRotations[secondRotationIndex];
    var firstRotationInv = firstRotationsInv[firstRotationIndex];
    var secondRotationInv = secondRotationsInv[secondRotationIndex];
    var rotations = firstRotation + secondRotation;
    var backRotations = secondRotationInv + firstRotationInv;
    scramblezumanzeigenAlg = rotations + scramblezumanzeigenAlg + backRotations;
    var completeScr = doubleMoveRemover(transftoWCA(scramblezumanzeigenAlg));
    document.getElementById("scramblelabelAlg").innerHTML = completeScr;

    if (showscrimageAlg.checked == true) {
        document.getElementById("scrDrawingAlg").style.display = "block";
    }
    else {
        document.getElementById("scrDrawingAlg").style.display = "none";
    }
    ShowScramble(completeScr);
    // this uses the image and solutions to build the content of the hint
    // hidden by default, can be shown if requested
    BuildHint(caseWithHint[1],caseWithHint[2]);
}

function ScramblePlusColourOL() {
    if (scramblelistOL.length == 0) {
        changescrlenOL();
    }

    var scramblezumanzeigenOL = scramblelistOL[scramblelistOL.length - 1];
    scramblelistOL.pop();
    // get random int for top site color: 0, 1, 2, 3: /, x, x2, x' | 4, 5: z, z'
    // get random int for side color: 0, 1, 2, 3: /, y, y2, y'
    // if x2y2 do z2 instead
    var firstRotations = ["", "x ", "x2 ", "x' ", "z ", "z' ", "z2 "]
    var firstRotationsInv = ["", " x'", " x2", " x", " z'", " z", " z2"]
    var secondRotations = ["", "y ", "y2 ", "y' "]
    var secondRotationsInv = ["", " y'", " y2", " y"]
    var firstRotationIndex = getRandomInt(6);
    var secondRotationIndex = getRandomInt(4);
    if (firstRotationIndex == 2 && secondRotationIndex == 2) {
        firstRotationIndex = 6;
        secondRotationIndex = 0;
    }
    var firstRotation = firstRotations[firstRotationIndex];
    var secondRotation = secondRotations[secondRotationIndex];
    var firstRotationInv = firstRotationsInv[firstRotationIndex];
    var secondRotationInv = secondRotationsInv[secondRotationIndex];
    var rotations = firstRotation + secondRotation;
    var backRotations = secondRotationInv + firstRotationInv;
    scramblezumanzeigenOL = rotations + scramblezumanzeigenOL + backRotations;

    document.getElementById("scramblelabelOL").innerHTML = doubleMoveRemover(scramblezumanzeigenOL + " ");

    if (showscrimageOLT.checked == true) {
        document.getElementById("scrDrawingOL").style.display = "block";
    }
    else {
        document.getElementById("scrDrawingOL").style.display = "none";
    }
    ShowScramble(scramblezumanzeigenOL);
}

// manipulates the initial order of coloured stickers, assigns swaps to moves, displays polygons
// filled with the correct colours
function ShowScramble(scramble) {
    const stickercol = ["o", "o", "o", "o", "o", "g", "g", "g", "g", "g", "y", "y", "y", "y", "y",
                      "w", "w", "w", "w", "w", "r", "r", "r", "r", "r", "b", "b", "b", "b", "b"];
    var scrsplit = scramble.split(" ");

    // This is for AlgT where the last item after splitting is an empty move
    // which would lead to an issue in the very last else case and
    // perform an unwanted B'
    // Ensures we only need one kind of if/else block for all trainers
    if (scrsplit[scrsplit.length - 1] == "") {
        scrsplit.pop();
    }

    for (var i = 0; i < scrsplit.length; i++) {
        if (scrsplit[i] == "x") {
            fourswap(stickercol, 15, 25, 10, 5);
            fourswap(stickercol, 24, 21, 22, 23);
            fourswap(stickercol, 2, 1, 4, 3);
            fourswap(stickercol, 17, 29, 12, 7);
            fourswap(stickercol, 6, 16, 28, 11);
            fourswap(stickercol, 9, 19, 27, 14);
            fourswap(stickercol, 18, 26, 13, 8);
        }
        else if (scrsplit[i] == "x'") {
            fourswap(stickercol, 5, 10, 25, 15);
            fourswap(stickercol, 23, 22, 21, 24);
            fourswap(stickercol, 3, 4, 1, 2);
            fourswap(stickercol, 7, 12, 29, 17);
            fourswap(stickercol, 11, 28, 16, 6);
            fourswap(stickercol, 14, 27, 19, 9);
            fourswap(stickercol, 8, 13, 26, 18);
        }
        else if (scrsplit[i] == "x2") {
            fourswap(stickercol, 5, 10, 25, 15);
            fourswap(stickercol, 23, 22, 21, 24);
            fourswap(stickercol, 3, 4, 1, 2);
            fourswap(stickercol, 7, 12, 29, 17);
            fourswap(stickercol, 11, 28, 16, 6);
            fourswap(stickercol, 14, 27, 19, 9);
            fourswap(stickercol, 8, 13, 26, 18);
            fourswap(stickercol, 5, 10, 25, 15);
            fourswap(stickercol, 23, 22, 21, 24);
            fourswap(stickercol, 3, 4, 1, 2);
            fourswap(stickercol, 7, 12, 29, 17);
            fourswap(stickercol, 11, 28, 16, 6);
            fourswap(stickercol, 14, 27, 19, 9);
            fourswap(stickercol, 8, 13, 26, 18);
        }
        else if (scrsplit[i] == "y") {
            fourswap(stickercol, 19, 16, 17, 18);
            fourswap(stickercol, 14, 13, 12, 11);
            fourswap(stickercol, 25, 20, 5, 0);
            fourswap(stickercol, 21, 6, 1, 26);
            fourswap(stickercol, 29, 24, 9, 4);
            fourswap(stickercol, 23, 8, 3, 28);
            fourswap(stickercol, 27, 22, 7, 2);
        }
        else if (scrsplit[i] == "y'") {
            fourswap(stickercol, 18, 17, 16, 19);
            fourswap(stickercol, 11, 12, 13, 14);
            fourswap(stickercol, 0, 5, 20, 25);
            fourswap(stickercol, 26, 1, 6, 21);
            fourswap(stickercol, 4, 9, 24, 29);
            fourswap(stickercol, 28, 3, 8, 23);
            fourswap(stickercol, 2, 7, 22, 27);
        }
        else if (scrsplit[i] == "y2") {
            fourswap(stickercol, 18, 17, 16, 19);
            fourswap(stickercol, 11, 12, 13, 14);
            fourswap(stickercol, 0, 5, 20, 25);
            fourswap(stickercol, 26, 1, 6, 21);
            fourswap(stickercol, 4, 9, 24, 29);
            fourswap(stickercol, 28, 3, 8, 23);
            fourswap(stickercol, 2, 7, 22, 27);
            fourswap(stickercol, 18, 17, 16, 19);
            fourswap(stickercol, 11, 12, 13, 14);
            fourswap(stickercol, 0, 5, 20, 25);
            fourswap(stickercol, 26, 1, 6, 21);
            fourswap(stickercol, 4, 9, 24, 29);
            fourswap(stickercol, 28, 3, 8, 23);
            fourswap(stickercol, 2, 7, 22, 27);
        }
        else if (scrsplit[i] == "z") {
            fourswap(stickercol, 15, 20, 10, 0);
            fourswap(stickercol, 9, 6, 7, 8);
            fourswap(stickercol, 29, 28, 27, 26);
            fourswap(stickercol, 18, 24, 11, 2);
            fourswap(stickercol, 17, 23, 14, 1);
            fourswap(stickercol, 19, 21, 12, 3);
            fourswap(stickercol, 16, 22, 13, 4);
        }
        else if (scrsplit[i] == "z'") {
            fourswap(stickercol, 0, 10, 20, 15);
            fourswap(stickercol, 8, 7, 6, 9);
            fourswap(stickercol, 26, 27, 28, 29);
            fourswap(stickercol, 2, 11, 24, 18);
            fourswap(stickercol, 1, 14, 23, 17);
            fourswap(stickercol, 3, 12, 21, 19);
            fourswap(stickercol, 4, 13, 22, 16);
        }
        else if (scrsplit[i] == "z2") {
            fourswap(stickercol, 0, 10, 20, 15);
            fourswap(stickercol, 8, 7, 6, 9);
            fourswap(stickercol, 26, 27, 28, 29);
            fourswap(stickercol, 2, 11, 24, 18);
            fourswap(stickercol, 1, 14, 23, 17);
            fourswap(stickercol, 3, 12, 21, 19);
            fourswap(stickercol, 4, 13, 22, 16);
            fourswap(stickercol, 0, 10, 20, 15);
            fourswap(stickercol, 8, 7, 6, 9);
            fourswap(stickercol, 26, 27, 28, 29);
            fourswap(stickercol, 2, 11, 24, 18);
            fourswap(stickercol, 1, 14, 23, 17);
            fourswap(stickercol, 3, 12, 21, 19);
            fourswap(stickercol, 4, 13, 22, 16);
        }
        else if (scrsplit[i] == "r" || scrsplit[i] == "r'2") {
            threeswap(stickercol, 3, 7, 16);
            threeswap(stickercol, 10, 20, 25);
            threeswap(stickercol, 11, 21, 27);
            threeswap(stickercol, 12, 22, 28);
            threeswap(stickercol, 13, 23, 29);
        }
        else if (scrsplit[i] == "r'" || scrsplit[i] == "r2") {
            threeswap(stickercol, 16, 7, 3);
            threeswap(stickercol, 25, 20, 10);
            threeswap(stickercol, 27, 21, 11);
            threeswap(stickercol, 28, 22, 12);
            threeswap(stickercol, 29, 23, 13);
        }
        else if (scrsplit[i] == "R") {
            threeswap(stickercol, 3, 7, 16);
            threeswap(stickercol, 10, 20, 25);
            threeswap(stickercol, 11, 21, 27);
            threeswap(stickercol, 12, 22, 28);
            threeswap(stickercol, 13, 23, 29);
        }
        else if (scrsplit[i] == "R'") {
            threeswap(stickercol, 16, 7, 3);
            threeswap(stickercol, 25, 20, 10);
            threeswap(stickercol, 27, 21, 11);
            threeswap(stickercol, 28, 22, 12);
            threeswap(stickercol, 29, 23, 13);
        }
        else if (scrsplit[i] == "L") {
            threeswap(stickercol, 0, 5, 10);
            threeswap(stickercol, 1, 7, 13);
            threeswap(stickercol, 2, 8, 14);
            threeswap(stickercol, 3, 9, 11);
            threeswap(stickercol, 18, 23, 27);
        }
        else if (scrsplit[i] == "L'") {
            threeswap(stickercol, 10, 5, 0);
            threeswap(stickercol, 13, 7, 1);
            threeswap(stickercol, 14, 8, 2);
            threeswap(stickercol, 11, 9, 3);
            threeswap(stickercol, 27, 23, 18);
        }
        else if (scrsplit[i] == "U") {
            threeswap(stickercol, 0, 25, 15);
            threeswap(stickercol, 1, 27, 16);
            threeswap(stickercol, 3, 29, 18);
            threeswap(stickercol, 4, 26, 19);
            threeswap(stickercol, 9, 13, 21);
        }
        else if (scrsplit[i] == "U'") {
            threeswap(stickercol, 15, 25, 0);
            threeswap(stickercol, 16, 27, 1);
            threeswap(stickercol, 18, 29, 3);
            threeswap(stickercol, 19, 26, 4);
            threeswap(stickercol, 21, 13, 9);
        }
        else if (scrsplit[i] == "B") {
            threeswap(stickercol, 0, 10, 25);
            threeswap(stickercol, 2, 12, 26);
            threeswap(stickercol, 3, 13, 27);
            threeswap(stickercol, 4, 14, 28);
            threeswap(stickercol, 8, 22, 19);
        }
        else {
            threeswap(stickercol, 25, 10, 0);
            threeswap(stickercol, 26, 12, 2);
            threeswap(stickercol, 27, 13, 3);
            threeswap(stickercol, 28, 14, 4);
            threeswap(stickercol, 19, 22, 8);
        }
    }

    if (document.getElementById("AlgT").style.display == "block") {
        var canvas = document.getElementById("scrDrawingAlg");
    }
    else if (document.getElementById("OLT").style.display == "block") {
        var canvas = document.getElementById("scrDrawingOL");
    }
    else {
        var canvas = document.getElementById("scrDrawing");
    }
    var ctx = canvas.getContext('2d');
    ctx.translate(10, 10);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 3;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.fillStyle = corrcol(stickercol, 0);
    ctx.beginPath();
    ctx.moveTo(0.0, 75.0);
    ctx.lineTo(60, 30);
    ctx.lineTo(120, 135);
    ctx.lineTo(60, 180);
    ctx.lineTo(0, 75);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = corrcol(stickercol, 1);
    ctx.beginPath();
    ctx.moveTo(60, 30);
    ctx.lineTo(120, 135);
    ctx.lineTo(120, 60);
    ctx.lineTo(60, 30);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = corrcol(stickercol, 2);
    ctx.beginPath();
    ctx.moveTo(120, 135);
    ctx.lineTo(120, 210);
    ctx.lineTo(60, 180);
    ctx.lineTo(120, 135);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = corrcol(stickercol, 3);
    ctx.beginPath();
    ctx.moveTo(0, 75);
    ctx.lineTo(60, 180);
    ctx.lineTo(0, 150);
    ctx.lineTo(0, 75);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = corrcol(stickercol, 4);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(60, 30);
    ctx.lineTo(0, 75);
    ctx.lineTo(0, 0);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = corrcol(stickercol, 5);
    ctx.beginPath();
    ctx.moveTo(120, 135);
    ctx.lineTo(180, 90);
    ctx.lineTo(240, 195);
    ctx.lineTo(180, 240);
    ctx.lineTo(120, 135);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = corrcol(stickercol, 6);
    ctx.beginPath();
    ctx.moveTo(180, 90);
    ctx.lineTo(240, 120);
    ctx.lineTo(240, 195);
    ctx.lineTo(180, 90);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = corrcol(stickercol, 7);
    ctx.beginPath();
    ctx.moveTo(240, 195);
    ctx.lineTo(240, 270);
    ctx.lineTo(180, 240);
    ctx.lineTo(240, 195);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = corrcol(stickercol, 8);
    ctx.beginPath();
    ctx.moveTo(120, 135);
    ctx.lineTo(180, 240);
    ctx.lineTo(120, 210);
    ctx.lineTo(120, 135);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = corrcol(stickercol, 9);
    ctx.beginPath();
    ctx.moveTo(120, 60);
    ctx.lineTo(180, 90);
    ctx.lineTo(120, 135);
    ctx.lineTo(120, 60);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = corrcol(stickercol, 10);
    ctx.beginPath();
    ctx.moveTo(180, 240);
    ctx.lineTo(240, 345);
    ctx.lineTo(180, 390);
    ctx.lineTo(120, 285);
    ctx.lineTo(180, 240);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = corrcol(stickercol, 11);
    ctx.beginPath();
    ctx.moveTo(180, 240);
    ctx.lineTo(240, 270);
    ctx.lineTo(240, 345);
    ctx.lineTo(180, 240);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = corrcol(stickercol, 12);
    ctx.beginPath();
    ctx.moveTo(240, 345);
    ctx.lineTo(240, 420);
    ctx.lineTo(180, 390);
    ctx.lineTo(240, 345);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = corrcol(stickercol, 13);
    ctx.beginPath();
    ctx.moveTo(120, 285);
    ctx.lineTo(180, 390);
    ctx.lineTo(120, 360);
    ctx.lineTo(120, 285);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = corrcol(stickercol, 14);
    ctx.beginPath();
    ctx.moveTo(120, 210);
    ctx.lineTo(180, 240);
    ctx.lineTo(120, 285);
    ctx.lineTo(120, 210);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = corrcol(stickercol, 15);
    ctx.beginPath();
    ctx.moveTo(180, 90);
    ctx.lineTo(180, 30);
    ctx.lineTo(300, 30);
    ctx.lineTo(300, 90);
    ctx.lineTo(180, 90);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = corrcol(stickercol, 16);
    ctx.beginPath();
    ctx.moveTo(300, 30);
    ctx.lineTo(360, 60);
    ctx.lineTo(300, 90);
    ctx.lineTo(300, 30);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = corrcol(stickercol, 17);
    ctx.beginPath();
    ctx.moveTo(180, 90);
    ctx.lineTo(300, 90);
    ctx.lineTo(240, 120);
    ctx.lineTo(180, 90);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = corrcol(stickercol, 18);
    ctx.beginPath();
    ctx.moveTo(120, 60);
    ctx.lineTo(180, 30);
    ctx.lineTo(180, 90);
    ctx.lineTo(120, 60);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = corrcol(stickercol, 19);
    ctx.beginPath();
    ctx.moveTo(180, 30);
    ctx.lineTo(240, 0);
    ctx.lineTo(300, 30);
    ctx.lineTo(180, 30);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = corrcol(stickercol, 20);
    ctx.beginPath();
    ctx.moveTo(240, 195);
    ctx.lineTo(300, 90);
    ctx.lineTo(360, 135);
    ctx.lineTo(300, 240);
    ctx.lineTo(240, 195);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = corrcol(stickercol, 21);
    ctx.beginPath();
    ctx.moveTo(300, 90);
    ctx.lineTo(360, 60);
    ctx.lineTo(360, 135);
    ctx.lineTo(300, 90);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = corrcol(stickercol, 22);
    ctx.beginPath();
    ctx.moveTo(300, 240);
    ctx.lineTo(360, 135);
    ctx.lineTo(360, 210);
    ctx.lineTo(300, 240);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = corrcol(stickercol, 23);
    ctx.beginPath();
    ctx.moveTo(240, 195);
    ctx.lineTo(300, 240);
    ctx.lineTo(240, 270);
    ctx.lineTo(240, 195);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = corrcol(stickercol, 24);
    ctx.beginPath();
    ctx.moveTo(240, 120);
    ctx.lineTo(300, 90);
    ctx.lineTo(240, 195);
    ctx.lineTo(240, 120);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = corrcol(stickercol, 25);
    ctx.beginPath();
    ctx.moveTo(360, 135);
    ctx.lineTo(420, 30);
    ctx.lineTo(480, 75);
    ctx.lineTo(420, 180);
    ctx.lineTo(360, 135);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = corrcol(stickercol, 26);
    ctx.beginPath();
    ctx.moveTo(420, 30);
    ctx.lineTo(480, 0);
    ctx.lineTo(480, 75);
    ctx.lineTo(420, 30);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = corrcol(stickercol, 27);
    ctx.beginPath();
    ctx.moveTo(420, 180);
    ctx.lineTo(480, 75);
    ctx.lineTo(480, 150);
    ctx.lineTo(420, 180);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = corrcol(stickercol, 28);
    ctx.beginPath();
    ctx.moveTo(360, 135);
    ctx.lineTo(420, 180);
    ctx.lineTo(360, 210);
    ctx.lineTo(360, 135);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = corrcol(stickercol, 29);
    ctx.beginPath();
    ctx.moveTo(360, 60);
    ctx.lineTo(420, 30);
    ctx.lineTo(360, 135);
    ctx.lineTo(360, 60);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.translate(-10, -10);
}

function BuildHint(id, solutions) {
    document.getElementById("hint-alg-img").src=`hints/${id}.png`;
    document.getElementById("hint-alg-id").innerHTML = id;
    solutionsHTML = solutions.split(",");

    for (let i = 0; i < solutionsHTML.length; i++) {
      if (i > 0) {
        solutionsHTML[i] = solutionsHTML[i];
      }
      if (i < solutionsHTML.length - 1) {
        solutionsHTML[i] = solutionsHTML[i] + "<br>";
      }
    }
    solutionsHTML = solutionsHTML.join("");
    document.getElementById("hint-alg-solutions").innerHTML = solutionsHTML;
}
// permute the selected entries of the list cyclically
function threeswap(listname, i, j, k) {
    [listname[j], listname[k]] = [listname[k], listname[j]];
    [listname[i], listname[j]] = [listname[j], listname[i]];
}

function fourswap(listname, i, j, k, l) {
    [listname[k], listname[l]] = [listname[l], listname[k]];
    [listname[j], listname[k]] = [listname[k], listname[j]];
    [listname[i], listname[j]] = [listname[j], listname[i]];
}

function corrcol(list, i) {
    if (list[i] == "o") {
        return 'orange';
    }
    else if (list[i] == "g") {
        return 'green';
    }
    else if (list[i] == "r") {
        return 'red';
    }
    else if (list[i] == "b") {
        return 'blue';
    }
    else if (list[i] == "w") {
        return 'white';
    }
    else {
        return 'yellow';
    }
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// timer
var x;
var startstop = 0;

function startStop() {
    /* Toggle StartStop */

    startstop = startstop + 1;

    if (startstop === 1) {
        start();
        document.getElementById("start").innerHTML = "Stop";
    }
    else if (startstop === 2) {
        document.getElementById("start").innerHTML = "Start";
        startstop = 0;
        stop();
    }

}

function start() {
    x = setInterval(timer, 10);
    document.getElementById("reset").style.visibility = "hidden";
} /* Start */

function stop() {
    clearInterval(x);
    document.getElementById("reset").style.visibility = "visible";
    checkPB();
} /* Stop */

var milisec = 0;
var sec = 0; /* holds incrementing value */
var min = 0;

/* Contains and outputs returned value of  function checkTime */

var miliSecOut = 0;
var secOut = 0;
var minOut = 0;

/* Output variable End */

function timer() {
    /* Main Timer */

    miliSecOut = checkTime(milisec);
    secOut = checkTime(sec);
    minOut = checkTime(min);

    milisec = ++milisec;

    if (milisec === 100) {
        milisec = 0;
        sec = ++sec;
    }
    if (sec == 60) {
        min = ++min;
        sec = 0;
    }

    document.getElementById("milisec").innerHTML = miliSecOut;
    document.getElementById("sec").innerHTML = secOut;
    document.getElementById("min").innerHTML = minOut;
}

/* Adds 0 when value is <10 */

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function reset() {
    /*Reset*/
    milisec = 0;
    sec = 0;
    min = 0

    document.getElementById("milisec").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("pbLabel").style.visibility = "hidden";
    document.getElementById("reset").style.visibility = "hidden";
}

// prompt if you get a pb on a l2l case
var dict = {};

function checkPB() {
    if (document.getElementById("AlgT").style.display != "none") {
        if (dict.hasOwnProperty(document.getElementById("scramblelabelAlg").innerHTML)) {
            if (miliSecOut + secOut * 100 + minOut * 60 * 100 <= dict[document.getElementById("scramblelabelAlg").innerHTML]) {
                dict[document.getElementById("scramblelabelAlg").innerHTML] = miliSecOut + secOut * 100 + minOut * 60 * 100;
                document.getElementById("pbLabel").innerHTML = "That's a PB!";
                document.getElementById("pbLabel").style.visibility = "visible";
            }
            else {
                document.getElementById("pbLabel").innerHTML = "&nbsp;";
                document.getElementById("pbLabel").visibility = "hidden";
            }
        }
        else {
            dict[document.getElementById("scramblelabelAlg").innerHTML] = miliSecOut + secOut * 100 + minOut * 60 * 100;
            document.getElementById("pbLabel").innerHTML = "That's a PB!";
            document.getElementById("pbLabel").style.visibility = "visible";
        }
    }
}

function key(event) {
    let key = event.key;

    if (document.getElementById("FLT").style.display != "none") {
        if (key == " ") {
            event.preventDefault();
            startStop();
        }

        if (key == "r") {
            event.preventDefault();
            reset();
        }

        if (key == "Enter") {
            event.preventDefault();
            ScramblePlusColour();
        }
    }
    if (document.getElementById("AlgT").style.display != "none") {
        if (key == " ") {
            event.preventDefault();
            startStop();
        }

        if (key == "r") {
            event.preventDefault();
            reset();
        }

        if (key == "Enter") {
            event.preventDefault();
            ScramblePlusColourAlg();
        }
    }
    if (document.getElementById("OLT").style.display != "none") {
        if (key == " ") {
            event.preventDefault();
            startStop();
        }

        if (key == "r") {
            event.preventDefault();
            reset();
        }

        if (key == "Enter") {
            event.preventDefault();
            ScramblePlusColourOL();
        }
    }
}

window.addEventListener("keydown", key, false);

// Getting hints via a modal box
// Get the modal
var hintModal = document.getElementById("hintModal");

// Get the button that opens the modal
var hintBtn = document.getElementById("hintBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
hintBtn.onclick = function() {
    if (hintModal.style.display == "none") {
        hintModal.style.display = "block";
    }
    else {
        hintModal.style.display = "none";
    }
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  hintModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == hintModal) {
    hintModal.style.display = "none";
  }
}

/*
          IDEAS TO STORE DATA FOR EACH CASE, MAYBE AS OBJECTS OF A CLASS CASE

          case.id, case.group, case.subGroup, case.scramble, case.mySolution,
          case.currentPersJudgement, case.numBadJudge, case.numMediumJudge, case.numGoodJudge,
          case.PB, case.movecount, case.tpsPB,
*/

function findNextCaseByPersonalJudgement() {
    // find the currently selected Algs
    // if there are cases without judgement, show them in random order until all cases have been shown once

    // now that cases have been shown once or all cases have their judgement, choose randomly from the bad ones, the medium ones and the good ones,
    // but more likely bad than medium, more likely medium than good

    // e.g. roll dice, if result is 1, 3 or 5 --> use a bad case, if result is 2 or 4 use a medium case, if result is 6, use a good case

}

function applyPersonalJudgement() {
    // assign judgement to the case that is currently selected
}
