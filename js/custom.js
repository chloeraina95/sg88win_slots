// temp session
function login(){
  if( !$("#uname").val() ) {
    callAlert();
  }else{
    $(".euroImg-right").css('display','none');
    $(".changes-left-cont").css('display','block');
    $(".login-btn").css('display','none');
    $(".logout-btn").css('display','flex');
    $('#loginModal').modal('hide');
    $('body').removeClass('modal-open');
    $('.modal-backdrop').remove();
  }
}
function logout(){
  $(".euroImg-right").css('display','block');
  $(".changes-left-cont").css('display','none');
  $(".login-btn").css('display','flex');
  $(".logout-btn").css('display','none');
}


// alert
function callAlert(x){
  swal({
      title: "Error",
      text: "Please enter any character",
      icon: "error",
      button: "OK",
  });
}

// game
function play(){
  // clear prize modal
  $(".showPrize").removeClass("show");
  // bring back transition
  $(".slot-strip").removeClass("notransition");

  // START
  // initial spin
  $(".slot-strip-cont").addClass("spin");
  // result spin
  var randNum = 1 + Math.floor(Math.random() * 6);
  setTimeout(function(){
    $(".slot-strip-cont").addClass("result-" + randNum);
  }, 6000);

  // prize modal
  $(".showPrize-" + randNum).addClass("show");
  setTimeout(function(){
    $('#prizeModal').modal('show');
    reset();
  }, 10000);

}
function reset(){
  // remove transition on reset
  $(".slot-strip").addClass("notransition");
  // remove machine classes
  $(".slot-strip-cont").removeClass("spin");
  $(".slot-strip-cont").removeClass("result-1 result-2 result-3 result-4 result-5 result-6");
}
