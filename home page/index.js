$(document).ready(function () {
    $("#b1").click(function () {
        $("#r2,#r3,#r4").css({"display":"none"},"slow");
        $("#r1").css({"display":"inline-block"},"slow")

    });
    $("#b2").click(function () {
        $("#r1,#r3,#r4").css({"display":"none"},"slow");
        $("#r2").css({"display":"inline-block"},"slow");
    });
    $("#b3").click(function () {
        $("#r1,#r2,#r4").css({"display":"none"},"slow");
        $("#r3").css({"display":"inline-block"},"slow");
    });
    $("#b4").click(function () {
        $("#r1,#r2,#r3").css({"display":"none"},"slow");
        $("#r4").css({"display":"inline-block"},"slow");
    });

});








$(document).ready(function () {

    $('.items').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1
    });
  });









  
$(document).ready(function(){
    $("img").click(function(){
    var t = $(this).attr("src");
    $(".modal-body").html("<img src='"+t+"' class='modal-img'>");
    $("#myModal").modal();
  });
  
  
  });
  
  
  


  // $(document).ready(function(){
  //   $(window).scroll(function(){
  //     var scroll = $(window).scrollTop();
  //     if (scroll == 0) {
  //       $("#jsup").css("display" , "none");
  //       }
  //     if (scroll >= 50) {
  //       $("#jsup").css("display" , "inline-block");
  //       }
    
  
  //     else{
  //       $("#jsup").css("display" , "none");
  //     }
  //   })
  
    
  // });
  
  
  
  















  
 $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true
  });
          







  function contact() {
    document.body.scrollTop = 4600;
    document.documentElement.scrollTop = 4600;
  }

  function FEATURED() {
    document.body.scrollTop = 600;
    document.documentElement.scrollTop = 600;
  }
  function home() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  function Gallery() {
    document.body.scrollTop = 3000;
    document.documentElement.scrollTop = 3000;
  }