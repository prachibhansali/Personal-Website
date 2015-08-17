
	var $window = $(window);

	function check_if_in_view()
	{
		var animation_elements = $('.animation-element');
		console.log('here');
		var wheight = $window.height();
		var window_top_position = $window.scrollTop();
		var window_bottom_position = (window_top_position+wheight);
		console.log(animation_elements.size());
			
		$.each(animation_elements,function(){
			console.log('inside');
			console.log((element_top_position <= window_bottom_position) && (element_bottom_position >= window_top_position));
			var element = $(this);
			var elementheight = element.outerHeight();
			var element_top_position = element.offset().top;
			var element_bottom_position = (element_top_position + elementheight);
			if((element_top_position <= window_bottom_position) && (element_bottom_position >= window_top_position))
				element.addClass('in-view');
			else element.removeClass('in-view');
		});
	}

	$window.on('scroll resize',check_if_in_view);
