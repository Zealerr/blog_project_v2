var x = 0;
function openMenu() {
    if (x == 0) {
        sideMenuOpen();
        burgerbtnOn();
        window.setTimeout(itemContShow, 300);
        x= 1;
    } else {
        itemContInvi();
        window.setTimeout(sideMenuClose, 300);
        window.setTimeout(burgerbtnOff, 300);
        x = 0;
    }
}

function sideMenuOpen() {
    document.getElementById("sideMenu").classList.add("sidemenuwidth");
}

function sideMenuClose() {
    document.getElementById("sideMenu").classList.remove("sidemenuwidth");
}

function burgerbtnOn() {
    document.getElementById("burgerbtn").setAttribute("class", "blueborder");
}

function burgerbtnOff() {
    document.getElementById("burgerbtn").setAttribute("class", "blackborder");
}

function itemContShow() {
    document.getElementById("item-container").style.opacity = "1"
}

function itemContInvi() {
    document.getElementById("item-container").style.opacity = "0"
}

var y1 = 0;
var y2 = 0;
var y3 = 0;
function sideMenufafa(letter) {
    if (letter == 'B') {
        if (y1 == 0) {
            document.getElementById("fafa-B").setAttribute("class", "fa fa-caret-up");
            y1 = 1;
        } else {
            document.getElementById("fafa-B").setAttribute("class", "fa fa-caret-down");
            y1 = 0;
        }
    }
    
    if (letter == 'B-A') {
        if (y2 == 0) {
            document.getElementById("fafa-B-A").setAttribute("class", "fa fa-caret-up");
            y2 = 1;
        } else {
            document.getElementById("fafa-B-A").setAttribute("class", "fa fa-caret-down");
            y2 = 0;
        }
    }

    if (letter == 'B-B') {
        if (y3 == 0) {
            document.getElementById("fafa-B-B").setAttribute("class", "fa fa-caret-up");
            y3 = 1;
        } else {
            document.getElementById("fafa-B-B").setAttribute("class", "fa fa-caret-down");
            y3 = 0;
        }
    }
}
var isjpg = 0;
function litoGif() {
    if (isjpg == 0) {
        document.getElementById("litorun").setAttribute("src", "../../img/Lito_run_right_gif.gif");
        isjpg = 1;
    } else {
        document.getElementById("litorun").setAttribute("src", "../../img/Lito_run_right_jpg.png");
        isjpg = 0;
    }
}