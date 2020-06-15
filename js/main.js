//jQuery Active Code

$('#slider-area').bxSlider({
  auto: true,
      onSliderAfter: function() {
          slSlider: startAuto();
      }
});


$(document).ready(function(){
  $('.slider').bxSlider();
  $.scrollUp();
  });

  
  $(function(){
    $('#menu').slicknav();
});