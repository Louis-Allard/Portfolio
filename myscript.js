const openNav = () => {
  $("body").toggleClass("openNav");
  $(".sidenav").toggleClass("openNav");
};

const closeNav = () => {
  $("body").removeClass("openNav");
  $(".sidenav").removeClass("openNav");
};

$("#openArrow").click(function() {
  openNav();
});
$("#closebtn").click(function() {
  closeNav();
});

jQuery(function() {
  $(function() {
    $(window).scroll(function() {
      //Fonction appelée quand on descend la page
      if ($(this).scrollTop() > 100) {
        $("#scrollUp").css("right", "10px");
      } else {
        $("#scrollUp").removeAttr("style");
      }
    });
  });
});
