$(document).ready(function() {

	$('#scrollUp').css('left',$('.header').width()/2 - $('#scrollUp').width()/2);
	/*var animateMe = function(targetElement){
		$(this).css('top',19);
		$(this).animate({top: '20%'},{duration: 400,complete: function(){
			animateMe(this);}
		});
	};

	animateMe('#scrollUp');*/

	

	$('#resumelink').hover(function(){
		$(this).addClass("switchLinkColor");
	}, function() {
		$(this).removeClass("switchLinkColor");
	});

	$('#contactlink').hover(function(){
		$(this).addClass("switchLinkColor");
	}, function() {
		$(this).removeClass("switchLinkColor");
	});

	$('#scrollUp').one('click',function(){
		/*var resumecontact = "<div id=\"resumecontact\" class=\"buttonCenter\">" +  
						"<a href=\"#\" id=\"resumelink\" class=\"resumecontactlink\">Resume</a>"+
						"<div class=\"divider\"/>"+ 
						"<a href=\"#\" id=\"contactlink\" class=\"resumecontactlink\">Contact</button>"+ 
						"</div>";*/
		$('.header').animate({bottom: '60%'});//height: $('.header').height()/2},1000);
		$('.mainPage').show();
		$('#scrollUp').hide();
		$('#resumecontact').show();
		$('#headerReplacer').css('left','+=100');
		$('#resumecontact').css('left',$('.header').width()/2 - $('#resumecontact').width()/2);
		
	});


});