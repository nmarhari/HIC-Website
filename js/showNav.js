/* toggle between addingh and removing the responsive class to navbar
when the user clicks on the icon */
function showNav() {
    var x = document.getElementById("top-navbar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
};