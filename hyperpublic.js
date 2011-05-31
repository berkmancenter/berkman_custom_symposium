jQuery(document).ready(function(){

	jQuery('#colophon').html(jQuery('.menu-header').html());

	jQuery('#site-description').html('<span>A SYMPOSIUM ON DESIGNING PRIVACY AND PUBLIC SPACE</span><br/><span>IN THE CONNECTED WORLD</span><br/><span>JUNE 9–10, 2011</span><br/><span><a href="http://www.harvard.edu/">HARVARD UNIVERSITY</a></span>');

	if(jQuery('body.home').length > 0){
		// This URL works only on the homepage. Need a better pattern if we're going to use this elsewhere on the site.
		jQuery.ajax({
			type: 'GET',
			cache: false,
			url: 'speakers/',
			success: function(html){
				var interiorHTML = jQuery(html).find('ul.participants-items').html();
				jQuery('ul.xoxo').prepend('<li class="widget-container"><h3 class="widget-title">Participants</h3><ul class="slideshow">' + interiorHTML + '</ul></li>').find('ul.slideshow').cycle();
			},
			complete: function(){
				jQuery('ul.slideshow a').attr('href','http://www.hyperpublic.org/speakers/');
			}
		});
	}

	jQuery('#site-title').bind({
		click: function(){
			//TODO: fix this when we start working under the "real" domain.
			window.location.href = 'http://www.hyperpublic.org/';
		},
		mouseover: function(){
			jQuery(this).css({cursor: 'pointer'});
		}
	});
	
});
