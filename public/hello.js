$(function() {
  var menuVisible = false;
  $('#myMenu').css({'display':'none'});
  $('#menuBtn').click(function() {
    if (menuVisible) {
      $('#myMenu').slideUp({'display':'none'});
            menuVisible = false;
      return;
    }
      $('#myMenu').slideDown({'display':'block'});
    menuVisible = true;
  });
  
});