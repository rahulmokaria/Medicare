function openLoginPortal(openTab, closeTab) {
  if (closeTab == "patient") {
    document.getElementById("patient").style.display = "none";
    document.getElementById("doctor").style.display = "block";
    document.getElementById("patient-line").style.borderBottomWidth="1px";
    document.getElementById("doctor-line").style.borderBottomWidth="3px";
    // document.getElementById("patient-line").style.border-bottom-width :1px ;

  } else {
    document.getElementById("doctor").style.display = "none";
    document.getElementById("patient").style.display = "block";
    document.getElementById("doctor-line").style.borderBottomWidth="1px";
    document.getElementById("patient-line").style.borderBottomWidth="3px";
  }

}

// $(".nav-tabs a").on("click", function (e) {
//   e.preventDefault();

//   $(this).parent().addClass("active");
//   $(this).parent().siblings().removeClass("active");

//   target = $(this).attr("href");

//   $(".nav-content > div").not(target).hide();

//   $(target).fadeIn(600);
// });
