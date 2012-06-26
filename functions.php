<?php 
wp_enqueue_script('jquerycycle', get_bloginfo('stylesheet_directory') . '/jquery.cycle.all.min.js', array('jquery'));
wp_enqueue_script('hyperpublic.js', get_bloginfo('stylesheet_directory') . '/hyperpublic.js', array('jquery'));

function hyperpublic_twitter_shortcode( $atts ) {
		return "<script src='http://widgets.twimg.com/j/2/widget.js'></script> 
              <script type='text/javascript' language='javascript'> 
new TWTR.Widget({
  version: 2,
  type: 'search',
  search: '#hyperpublic',
  interval: 6000,
  title: 'Hyperpublic',
  subject: '#hyperpublic ',
  width: 188,
  height: 300,
  theme: {
    shell: {
      background: '#5FA1D0',
      color: '#ffffff'
    },
    tweets: {
      background: '#ffffff',
      color: '#444444',
      links: '#1985b5'
    }
  },
  features: {
    scrollbar: false,
    loop: true,
    live: true,
    hashtags: true,
    timestamp: true,
    avatars: true,
    behavior: 'default'
  }
}).render().start();
</script>";
}
add_shortcode( 'hyperpublic_twitter', 'hyperpublic_twitter_shortcode' );
add_filter('widget_text', 'do_shortcode');


?>
