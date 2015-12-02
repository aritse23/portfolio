$(document).ready(function(){
	// Clicking on project image
	$('.proj-img').click(function(event){
		// stops default action when clicking link
		event.preventDefault();
		// if image you clicked has the class landing, then show earth hour modal
		if ($(this).hasClass('landing')){
			$('#earth_hour').slideDown('slow');
			//makes graph expand
			$('.bar1').animate({
				width: 160
			},2000);
			$('.bar2').animate({
				width: 180
			},2000);
			$('.bar3').animate({
				width: 140
			},2000);
			$('.bar4').animate({
				width: 100
			},2000);
			// click exit button to close modal			
			$('.exit').click(function(event){
				event.preventDefault();
				$('#earth_hour').slideUp('slow');
				$('.bar1, .bar2, .bar3, .bar4').animate({
					width: 0
				},200);

			});

		} else if ($(this).hasClass('movie')){
			$('#inception').slideDown('slow');
			$('.bar5').animate({
				width: 100
			},2000);
			$('.bar6').animate({
				width: 180
			},2000);
			$('.bar7').animate({
				width: 160
			},2000);
			$('.bar8').animate({
				width: 180
			},2000);
			$('.exit').click(function(event){
				event.preventDefault();
				$('#inception').slideUp('slow');
				$('.bar5, .bar6, .bar7, .bar8').animate({
					width: 0
				},200);
			});
		} else if ($(this).hasClass('festival')){
			$('#coca-cola').slideDown('slow');
			$('.bar9').animate({
				width: 145
			},2000);
			$('.bar10').animate({
				width: 120
			},2000);
			$('.bar11').animate({
				width: 180
			},2000);
			$('.bar12').animate({
				width: 150
			},2000);
			$('.exit').click(function(event){
				event.preventDefault();
				$('#coca-cola').slideUp('slow');
				$('.bar9, .bar10, .bar11, .bar12').animate({
					width: 0
				},200);
			});
		} else if ($(this).hasClass('brand')){
			$('#air_jordan').slideDown('slow');
			$('.bar13').animate({
				width: 180
			},2000);
			$('.bar14').animate({
				width: 160
			},2000);
			$('.bar15').animate({
				width: 140
			},2000);
			$('.bar16').animate({
				width: 155
			},2000);
			$('.exit').click(function(event){
				event.preventDefault();
				$('#air_jordan').slideUp('slow');
				$('.bar13, .bar14, .bar15, .bar16').animate({
					width: 0
				},200);
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






	//skill bars
	// $('.skillbar').each(function(){
	// 	$(this).find('.skillbar-bar').animate({
	// 		width:$(this).attr('data-percent')
	// 	},6000);
	// });
	// if($('.bar1').visible(true)){
	// 	$('.bar1').animate({
	// 		width: 200
	// 	},3000);
	// }
	

	// $.fn.isOnScreen = function(){
    
	//     var win = $(window);
	    
	//     var viewport = {
	//         top : win.scrollTop(),
	//         left : win.scrollLeft()
	//     };
	//     viewport.right = viewport.left + win.width();
	//     viewport.bottom = viewport.top + win.height();
	    
	//     var bounds = this.offset();
	//     bounds.right = bounds.left + this.outerWidth();
	//     bounds.bottom = bounds.top + this.outerHeight();
	    
	//     return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
	    
	// };
			
	// $(window).scroll(function() {
	//    	if ($('.modal').isOnScreen() == true) {
	//    		$('.bar1').animate({
	// 			width: 200
	// 		},3000);
	//    	}
	// });
	
