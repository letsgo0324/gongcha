$(document).ready(function(){
	$('.slide').bxSlider({
		mode: 'horizontal',
		auto: true,
		speed: 500,
		pause: 2500,
		pager: false,
		infiniteLoop: true,
		nextSelector: '.btn_next',
		prevSelector: '.btn_prev',
		nextText: 'Prev',
		prevText: 'Next'
	});
});