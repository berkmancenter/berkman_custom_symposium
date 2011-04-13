jQuery(document).ready(function(){

	jQuery('#colophon').html(jQuery('.menu-header').html());

	jQuery('#site-description').html('<span>A SYMPOSIUM ON DESIGNING PRIVACY AND PUBLIC SPACE</span><br/><span>IN THE CONNECTED WORLD</span><br/><span>JUNE 9–10, 2011</span><br/><span><a href="http://www.harvard.edu/">HARVARD UNIVERSITY</a></span><a href="http://cyber.law.harvard.edu"><img src="/hyperpublic/wp-content/themes/berkman_custom_symposium/images/3d_web_shield.png" alt="Berkman Center for Internet &amp; Society" /></a>');

	jQuery('#site-title').bind({
		click: function(){
			//TODO: fix this when we start working under the "real" domain.
			window.location.href = '/hyperpublic';
		},
		mouseover: function(){
			jQuery(this).css({cursor: 'pointer'});
		}
	});
	
});
