$(document).ready(function(){

// NAV SHRINK AND CHEVRON-DOWN AUTO

	if ( $(window).width() > 450 ) {

		$(window).scroll(function(){

			if ( $(this).scrollTop() > 100 ) {

				$('.navigation').css({'height' : '60px'})
				$('.logo').addClass('logo-shrink')
				$('.nav > ul > li > a').addClass('nav-a-shrink')
				$('.mobile-trigger').addClass('mobile-trigger-shrink')
				$('.dropdown').parent().removeClass('chevron-down')

			} else {

				$('.navigation').css({'height' : '102px'})
				$('.logo').removeClass('logo-shrink')
				$('.nav > ul > li > a').removeClass('nav-a-shrink')
				$('.mobile-trigger').removeClass('mobile-trigger-shrink')
				$('.dropdown').parent().addClass('chevron-down')

			}

		});

	} else {
    			$('.navigation').css({'height' : '60px'})
				$('.logo').addClass('logo-shrink')
				$('.nav > ul > li > a').addClass('nav-a-shrink')
				$('.mobile-trigger').addClass('mobile-trigger-shrink')
				$('.dropdown').parent().removeClass('chevron-down')
	}

// CHEVRON-DOWN DROPDOWN BIG

	$('.dropdown').parent().addClass('chevron-down')

// MOBILE NAV + DROPDOWN

	$('.mobile-trigger').click(function(){

		if ( $('.navigation').hasClass('.navigation-animation') ) {

			$('.mobile-trigger').toggleClass('fa-toggle-off green');
			$('body').toggleClass('overflow');
			$('.mobile-nav').toggle();
			$('.navigation').toggleClass('navigation-animation');
			$('.mobile-nav > li').addClass('animated pulse');

		} else {

			$('.mobile-trigger').toggleClass('fa-toggle-on green');
			$('body').toggleClass('overflow');
			$('.navigation').toggleClass('navigation-animation');
			$('.mobile-nav').toggle();
			$('.mobile-nav > li').addClass('animated pulse');

		}

	});

	$('.mobile-nav > li').click(function(){

		$(this).siblings().find('ul').slideUp(200);
		$(this).find('ul').slideToggle(200);

	});

// CHEVRON-DOWN MOBILE + UP/DOWN CHANGE

	$('.mobile-nav li').has('ul').append('<i class="fa fa-chevron-down"></i>')
	$('.mobile-nav li').has('i').css({'padding' : '15px 0 5px'})

	$('.mobile-nav li').has('ul').click(function(){

		if ( $('.mobile-nav li').find('ul').not(':visible') ) {

			$(this).find('i').removeClass('fa-chevron-down')
			$(this).find('i').addClass('fa-chevron-up')

		} else {

			$(this).find('i').addClass('fa-chevron-down')
			$(this).find('i').removeClass('fa-chevron-up')

		}


	});

	$('.fa-chevron-down').css({'color' : '#FD363B', 'position' : 'relative', 'top' : '-10px'});

// BACK TO TOP

	$(window).scroll(function(){

		if ( $(this).scrollTop() > 400 ) {
			$('#up').fadeIn()
		} else {
			$('#up').fadeOut()
		}

	});

	$('#up').click(function(){

		$('html, body').animate({'scrollTop' : '0'}, '200');

	});

// Z-INDEX FIX

	$(window).scroll(function(){
		if ( $(this).scrollTop() > 450 ) {

			$('.slideshow').css({'zIndex' : '-200'})

		} else {

			$('.slideshow').css({'zIndex' : '50'})

		};
	});

// DROPDOWN MENU

	$('.dropdown').hide();

	$('.nav > ul > li').hover(function(){
		$(this).find('.dropdown').fadeToggle(200);
	});

	$('.slideshow').click(function(){
		$('.dropdown').fadeOut()
	});

// SLIDESHOW

	$('.slide').hide();
	$('.slide').last().show();

    setInterval(function() {
	    $('.slide-wrap').children(':last').fadeOut(2000, function(){
		    $(this).prependTo('.slide-wrap');
		    }).prev().fadeIn(2000);
	  }, 7000);

// PARALLAX

	$('.parallax-window').parallax({imageSrc: 'http://217.199.187.195/deniszsebi.com/images/poziarna-ochrana.jpg'});

// FANCYBOX IMAGES

	$(document).ready(function() {
		$(".fancybox-thumb").fancybox({
			padding : 0,
			prevEffect	: 'none',
			nextEffect	: 'none',
			helpers	: {
				title	: {
					type: 'outside'
				},
				thumbs	: {
					width	: 50,
					height	: 50
				}
			}
		});
	});

// FANCYBOX INLINE

	$(document).ready(function() {
		$(".various").fancybox({
			padding 	: 0,
			maxWidth	: 450,
			maxHeight	: 900,
			fitToView	: false,
			width		: 'auto',
			height		: 'auto',
			autoSize	: true,
			closeClick	: false,
			openEffect	: 'none',
			closeEffect	: 'none'
		});
	});


// OPTION CHANGE

	$('select').change(function(){
		$(this).css({'backgroundColor' : '#FD363B', 'color' : '#fff'})
	});

// KONTAKTUJTE SCROLL DOWN

	$('.parallax a, .scroll').click(function(){

		$('.navigation').removeClass('navigation-animation')
		$('.mobile-nav').hide()
		$('body').removeClass('overflow')

		var bottom = $(document).height();
		$('html,body').animate({

			scrollTop: $('#kontakt').offset().top - 50

		}, 400);
		return false;
	});

// COUNTER UP

	$('.count').counterUp({
	    delay: 10,
	    time: 3500
	});

});









































