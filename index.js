$(window).on('scroll', function(){
	var scrollAmount = $(window).scrollTop();
  var windowHeight = $(window).height();
  var halfHeight = $(window).height() / 2;
  var topOfHiddenDiv = $('#back-to-top-button').offset().top;
	if((scrollAmount > (windowHeight * 2)) && !$('#back-to-top-button').hasClass('show')) {
    $('#back-to-top-button').addClass('show');
  }
});
