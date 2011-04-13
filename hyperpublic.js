jQuery(document).ready(function(){

	jQuery('#colophon').html(jQuery('.menu-header').html());

	jQuery('#site-description').html('<span>A SYMPOSIUM ON DESIGNING PRIVACY AND PUBLIC SPACE</span><br/><span>IN THE CONNECTED WORLD</span><br/><span>JUNE 9–10, 2011</span>');

	jQuery('#site-title').bind({
		click: function(){
			//TODO: fix this.
			window.location.href = '/hyperpublic';
		},
		mouseover: function(){
			jQuery(this).css({cursor: 'pointer'});
		}
	});
	
});
