$(document).ready(function(){
  // Initialise parallax effect on application page
  $('.parallax').parallax();

  // Initialise the ability for the mobile nav bar to appear
  $(".button-collapse").sideNav({
    menuWidth: 200,
    edge: 'right',
    closeOnClick: true,
    draggable: true
  });
});
