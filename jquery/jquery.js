$(document).ready(function() {

	$('#scrollUp').css('left',$('.header').width()/2 - $('#scrollUp').width()/2);
	

	/*var animateMe = function(targetElement){
		$(this).css('top',19);
		$(this).animate({top: '20%'},{duration: 400,complete: function(){
			animateMe(this);}
		});
	};

	animateMe('#scrollUp');*/

	$('#scrollUp').one('click',function(){
		var resumeButton="<div class=\"buttonCenter\"> <button>Resume</button> <button>Contact</button> </div>";	
		$('.header').animate({bottom: '50%'});//height: $('.header').height()/2},1000);
		$('.mainPage').show();
		$('#headerReplacer').replaceWith(resumeButton);
		$('#headerReplacer').css('left','+=100');

	});
});