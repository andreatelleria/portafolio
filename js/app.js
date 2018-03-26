 $('body').scrollspy({ target: '#navigation' })
 
    $(".navigation ul li a[href^='#']").on('click', function(e) {
	    
	    target = this.hash;
       // prevenir click behavior
       e.preventDefault();

       // animate
       $('html, body').animate({
           scrollTop: $(this.hash).offset().top - 10 
         }, 300, function(){
   
           window.location.hash = target;
         });

    });
	
	$(window).scroll(function() {
		$('#aboutMe, #work, #contact').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+800) {
				$(this).addClass("animated fadeInUp visibile");
			}
		});
	});
	
	$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 40
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});