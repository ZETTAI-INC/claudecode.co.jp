
function BrowserW() {
		return $(window).width();
}
function sp_maxW() {
		return BrowserW() <= 767;
}

/* animetion
---------------------------------------------------------------------------- */
	/* scroll */
	$(".js-anime").on("inview", function () {
		$(this).addClass("is-animeted");
	});

/* header
---------------------------------------------------------------------------- */
$(window).on('load resize', function() {
	var w = $(window).width();
	var headerH = $('.l-header').outerHeight();
	$('.main_cnts').css({'padding-top': headerH});
});

window.addEventListener("scroll", function () {
  const elm = document.querySelector(".fixed-wrap");
  const scroll = window.pageYOffset;
  if (scroll > 200) {
    elm.style.opacity = "1";
		elm.style.visibility= "visible";
    // console.log(scroll);
  } else {
    elm.style.opacity = "0";
		elm.style.visibility= "hidden";
    // console.log(scroll);
  }
});

/* smoothscroll
---------------------------------------------------------------------------- */
$(function(){
	var urlHash = location.hash;
	var headerH = $('.l-header').height();

	if(urlHash) {
		$('body,html').stop().scrollTop(0);
		setTimeout(function(){
				var target = $(urlHash);
				var position = target.offset().top - headerH;
				$('body,html').stop().animate({scrollTop:position}, 700);
		}, 1000);
	}

	$('.smoothscroll').click(function() {
		var href= $(this).attr("href");
		var target = $(href);
		if (target.length) {
			var position = target.offset().top - headerH;
		}
		$('body,html').stop().animate({scrollTop:position}, 700);
	})

/* タブ切り替え
---------------------------------------------------------------------------- */
	$('#tab_list li').click(function() {
		var index = $('#tab_list li').index(this);
		$('#tab_content li').hide();
		$('#tab_content li').eq(index).fadeIn();
		$('#tab_list li').removeClass('active');
		$(this).addClass('active');
	});

	$('.to_tab1').click(function() {
		$('#tab_content li').hide();
		$('.tab1').fadeIn();
		$('#tab_list li').removeClass('active');
		$('.tab_list1').addClass('active');
	});
	$('.to_tab2').click(function() {
		$('#tab_content li').hide();
		$('.tab2').fadeIn();
		$('#tab_list li').removeClass('active');
		$('.tab_list2').addClass('active');
	});
	$('.to_tab3').click(function() {
		$('#tab_content li').hide();
		$('.tab3').fadeIn();
		$('#tab_list li').removeClass('active');
		$('.tab_list3').addClass('active');
	});
	$('.to_tab4').click(function() {
		$('#tab_content li').hide();
		$('.tab4').fadeIn();
		$('#tab_list li').removeClass('active');
		$('.tab_list4').addClass('active');
	});

	var hash = location.hash;
	if(hash.length){
	if(hash.match(/#tab/)){
	$('#tab_content li').hide();
	$('#tab_list li').removeClass('active');
	var tabname = hash.slice(4.1);
	tabname = tabname - 1;
	$('#tab_content li').eq(tabname).fadeIn();
	$('#tab_list li').eq(tabname).addClass('active');
	}else{
	$('#tab_list li').eq(0).addClass('active');
	$('#tab_content li').hide();
	$('#tab_content li').eq(0).fadeIn();
	}
	}else{
	$('#tab_list li').eq(0).addClass('active');
	$('#tab_content li').hide();
	$('#tab_content li').eq(0).fadeIn();
	}


/* ボタン非活性
---------------------------------------------------------------------------- */
	$('#submit').attr('disabled', 'disabled'); //①
			$('#chkbox').click(function() { //②
			if ( $(this).prop('checked') == false ) {　//③
					$('#submit').attr('disabled', 'disabled');　//④
			} else {
					$('#submit').removeAttr('disabled');　//⑤
			}
	});


});


/* slider
---------------------------------------------------------------------------- */
var $sliders = $(".case-slider");

$(".slider-wrap").each(function(){
	var $this = $(this);
	var slick = $this.find( $sliders ).slick({
		autoplay: false,
		autoplaySpeed: 3000,
		speed: 1000,
		arrows: true,
		appendArrows: $('.slider__nav'),
		prevArrow: '<div class="slide-arrow prev-arrow"></div>',
		nextArrow: '<div class="slide-arrow next-arrow"></div>',
		dots: false,
//		adaptiveHeight: true,
	});

});

/* css swicher
---------------------------------------------------------------------------- */
function css_browser_selector(u){
	var ua=u.toLowerCase(),
	is=function(t){return ua.indexOf(t)>-1},
	e='edge',g='gecko',w='webkit',s='safari',o='opera',m='mobile',
	h=document.documentElement,
	b=[
		( !(/opera|webtv/i.test(ua)) && /msie\s(\d)/.test(ua))? ('ie ie'+RegExp.$1) :
			!(/opera|webtv/i.test(ua)) && is('trident') && /rv:(\d+)/.test(ua)? ('ie ie'+RegExp.$1) :
			is('edge/')? e:
			is('firefox/2')?g+' ff2':
			is('firefox/3.5')? g+' ff3 ff3_5' :
			is('firefox/3.6')?g+' ff3 ff3_6':is('firefox/3')? g+' ff3' :
			is('gecko/')?g:
			is('opera')? o+(/version\/(\d+)/.test(ua)? ' '+o+RegExp.$1 :
			(/opera(\s|\/)(\d+)/.test(ua)?' '+o+RegExp.$2:'')) :
			is('konqueror')? 'konqueror' :
			is('blackberry')?m+' blackberry' :
			is('android')?m+' android' :
			is('chrome')?w+' chrome' :
			is('iron')?w+' iron' :
			is('applewebkit/')? w+' '+s+(/version\/(\d+)/.test(ua)? ' '+s+RegExp.$1 : '') :
			is('mozilla/')? g:
			'',
			is('j2me')?m+' j2me':
			is('iphone')?m+' iphone':
			is('ipod')?m+' ipod':
			is('ipad')?m+' ipad':
			is('mac')?'mac':
			is('darwin')?'mac':
			is('webtv')?'webtv':
			is('win')? 'win'+(is('windows nt 6.0')?' vista':''):
			is('freebsd')?'freebsd':
			(is('x11')||is('linux'))?'linux':
			'',
			'js'];
	c = b.join(' ');
	h.className += ' '+c;
	return c;
};
css_browser_selector(navigator.userAgent);

/*iPad pro */
$(function(){
	var ua = window.navigator.userAgent.toLowerCase();
	if(ua.indexOf('ipad') > -1 
	|| ua.indexOf('macintosh') > -1 && 'ontouchend' in document){
		$('html').addClass('ipad')
	} 
});
// android
if ( navigator.userAgent.indexOf('Android') > 0 ) {
		$("body").addClass("android");
};


/* accordion
---------------------------------------------------------------------------- */
$('.acd_btn').click(function(){
	$(this).next('.acd_cnts').slideToggle();
	$(this).toggleClass("open");
	$(this).next('.acd_cnts').next('.acd_close_btn').toggleClass("active");
});

$('.acd_close_btn').click(function(){
	$(this).prev('.acd_cnts').prev('.acd_btn').trigger("click");

});







