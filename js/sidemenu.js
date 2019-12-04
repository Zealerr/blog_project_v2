var x = 0;

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
  
