$(document).ready(function(){
	// Clicking on project image
	$('.proj-img').click(function(event){
		// stops default action when clicking link
		event.preventDefault();
		// if image you clicked has the class landing, then show earth hour modal
		if ($(this).hasClass('landing')){
			$('#earth_hour').show('slow');
			// click exit button to close modal
			$('.exit').click(function(event){
				event.preventDefault();
				$('#earth_hour').hide('slow');
			});
		} else if ($(this).hasClass('movie')){
			$('#inception').show('slow');
			$('.exit').click(function(event){
				event.preventDefault();
				$('#inception').hide('slow');
			});
		} else if ($(this).hasClass('festival')){
			$('#coca-cola').show('slow');
			$('.exit').click(function(event){
				event.preventDefault();
				$('#coca-cola').hide('slow');
			});
		} else if ($(this).hasClass('brand')){
			$('#air_jordan').show('slow');
			$('.exit').click(function(event){
				event.preventDefault();
				$('#air_jordan').hide('slow');
			});
		}

	});
	// When clicking on nav item smoothly scrolls to section
	$(".nav_butt").click(function(event){		
		event.preventDefault();
		$('html,body').animate({
			scrollTop:$(this.hash).offset().top - 99}, 
			800
		);
	});
});