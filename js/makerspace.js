var menuClosed = true;

function menuFunctionality() {topMenuToggle(); burgerbtnAnim();}

function topMenuToggle() {
    document.getElementById("menu").classList.toggle("menuOpen");
}

function burgerbtnAnim() {
    document.getElementById("burgerbtn").classList.toggle("closed");
    document.getElementById("burgerbtn").classList.toggle("open");
}

var open1 = 0;
var open2 = 0;
var open3 = 0;
function fafa(letter) {
    if (letter == '1') {
        if (open == 0) {
            document.getElementById("fafa-1").setAttribute("class", "fa fa-caret-up");
            open = 1;
        } else {
            document.getElementById("fafa-1").setAttribute("class", "fa fa-caret-down");
            open = 0;
        }
    }
    
    if (letter == '2') {
        if (open2 == 0) {
            document.getElementById("fafa-2").setAttribute("class", "fa fa-caret-up");
            open2 = 1;
        } else {
            document.getElementById("fafa-2").setAttribute("class", "fa fa-caret-down");
            open2 = 0;
        }
    }

    if (letter == '3') {
        if (open3 == 0) {
            document.getElementById("fafa-3").setAttribute("class", "fa fa-caret-up");
            open3 = 1;
        } else {
            document.getElementById("fafa-3").setAttribute("class", "fa fa-caret-down");
            open3 = 0;
        }
    }
}