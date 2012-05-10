function horizontalSlider() {
	$('a[href^="#"]').click(function(){ 
		var the_id = $(this).attr("href");
		$('#viewport').animate({
			scrollLeft: $(the_id).position().left - $('#scroll_1').position().left
		}, 'slow');
	  return false;
	});	
}
