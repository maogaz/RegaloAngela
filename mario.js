/* GLOBOS Y FONDO  */


window.open = function() {};
window.print = function() {};
// Support hover state for mobile.
if (false) {
    window.ontouchstart = function() {};
}



if (document.location.search.match(/type=embed/gi)) {
    window.parent.postMessage('resize', "*");
}

