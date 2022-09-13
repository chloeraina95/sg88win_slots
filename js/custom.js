// banner
loadSlider();
function loadSlider(){
    $('.general_banner').slick({
      infinite: true,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: true,
    });
  }
  function callbanner(x){
    swal({
        title: "Sample Alert",
        text: "You clicked banner " + x,
        icon: "error",
        button: "OK",
    });
  }