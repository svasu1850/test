$(document).ready(function(){
  var flag = 0;  
  $(".material-hamburger").click(function(){
    if(flag == 0) {
      $(".material-btn").addClass("active");
      $(".material-menu-wrapper").addClass("active");
      $(".material-hamburger").addClass("material-close");
      $("nav > ul > li").addClass("active");
      $(".logo img").delay(1000).attr('src',"images/logo_black.png");
     
      flag = 1;
    }
    else if(flag == 1) {
      $(".material-btn").removeClass("active");
      $(".material-menu-wrapper").removeClass("active");
      $(".material-hamburger").removeClass("material-close");
      $("nav > ul > li").removeClass("active");
      $(".logo img").delay(1000).attr('src',"images/logo_white.png");
     
      flag = 0;
    }
  });
});