$(document).ready(function(){

$(".question").click(function(){
	$(this).next().slideToggle();
	$(this).toggleClass("open");
});

  $('.cross').on('click', function(){
    $(this).toggleClass('active')
  })

  $('#burger').click(function(){
  	$('#menu').slideToggle();
  });

});