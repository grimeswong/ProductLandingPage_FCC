/* This function is for toggling mobile menu */

function toggleMenu() {
  var disElement = $("#nav-list-right").css("display");
  if(disElement == "none") {
    $("#nav-list-right").css("display", "flex");
  } else {
    $("#nav-list-right").css("display", "none");
  }
}

$(window).resize(function() {
    if($(window).outerWidth() > 576) {
      $("#nav-list-right").css("display", "flex");
    } else if($(window).width() <= 576){
      $("#nav-list-right").css("display", "none");
    }
});
