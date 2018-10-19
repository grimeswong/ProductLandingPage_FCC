/* This function is for toggling mobile menu */

function toggleMenu() {
  var disElement = $("#nav-list-right").css("display");
  if(disElement == "none") {
    $("#nav-list-right").css("display", "flex");
  } else {
    $("#nav-list-right").css("display", "none");
  }
}
