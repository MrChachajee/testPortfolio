/* function toggle() {
  let e = document.getElementById("nav-list");
  (e.style.height === "0rem") ? e.style.height = "15rem": e.style.height = "0rem";
}

*/
$(document).ready(function() {
  const typed = new Typed("#typed", {
    strings: ["Developer", "Freelancer", "Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

  $("#burger").click(function() {
    $("#burger-label").toggleClass("open")
    $("#right").toggleClass("h-15")
    if ($(window).scrollTop() < 50){
      $("#nav").toggleClass("grey")
    }
  });
  
  
  $(window).scroll(function(){
    if ($(window).scrollTop() > 50){
      $("#nav").removeClass("grey")
      $("#nav").addClass("sticky")
    } 
    else {
      $("#nav").removeClass("sticky")
      if ($("#right").hasClass("h-15")) {
        $("#nav").addClass("grey")
      }
    }
  });
});