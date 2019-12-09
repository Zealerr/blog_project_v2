var x = 0;
var y = 0;
var z = 0;
function openMenu() {
    if (x == 0) {
        document.getElementById("mysidemenu").classList.add("sidemenuwidth");
        document.getElementById("burgerbtn").setAttribute("class", "blueborder");
        x = 1;
    } else {
        document.getElementById("mysidemenu").classList.remove("sidemenuwidth");
        document.getElementById("burgerbtn").setAttribute("class", "blackborder");
        x = 0;
    }
}

function openDropdown() {
    if (y == 0) {
        document.getElementById("dropdown1").classList.add("open");
        document.getElementById("dropdown1").classList.remove("closed");
        document.getElementById("fafa").setAttribute("class", "fa fa-caret-up")
        
        y = 1;
    } else {
        document.getElementById("dropdown1").classList.add("closed");
        document.getElementById("dropdown1").classList.remove("open");
        
        document.getElementById("fafa").setAttribute("class", "fa fa-caret-down")
        y = 0;
    }
}


function openDropdown1() {
    if (z == 0) {
        document.getElementById("dropdown2").classList.add("open");
        document.getElementById("dropdown2").classList.remove("closed");
        document.getElementById("fafa1").setAttribute("class", "fa fa-caret-up")
        
        z = 1;
    } else {
        document.getElementById("dropdown2").classList.add("closed");
        document.getElementById("dropdown2").classList.remove("open");
        
        document.getElementById("fafa1").setAttribute("class", "fa fa-caret-down")
        z = 0;
    }
}
