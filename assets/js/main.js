$(document).ready(function(){
	// Clicking on project image
	$('.proj-img').click(function(event){
		// stops default action when clicking link
		event.preventDefault();
		// if image you clicked has the class landing, then show earth hour modal
		if ($(this).hasClass('landing')){
			$('#earth_hour').slideDown('slow');
			// click exit button to close modal
			$('.exit').click(function(event){
				event.preventDefault();
				$('#earth_hour').slideUp('slow');
			});
		} else if ($(this).hasClass('movie')){
			$('#inception').slideDown('slow');
			$('.exit').click(function(event){
				event.preventDefault();
				$('#inception').slideUp('slow');
			});
		} else if ($(this).hasClass('festival')){
			$('#coca-cola').slideDown('slow');
			$('.exit').click(function(event){
				event.preventDefault();
				$('#coca-cola').slideUp('slow');
			});
		} else if ($(this).hasClass('brand')){
			$('#air_jordan').slideDown('slow');
			$('.exit').click(function(event){
				event.preventDefault();
				$('#air_jordan').slideUp('slow');
			});
		}

	});

	// When clicking on next button, takes user to next section
	$('.next').click(function(event){
		event.preventDefault();
		
	})

	// When clicking on nav item smoothly scrolls to section
	$(".nav_butt").click(function(event){		
		event.preventDefault();
		$('html,body').animate({
			scrollTop:$(this.hash).offset().top - 99}, 
			800
		);
	});
});