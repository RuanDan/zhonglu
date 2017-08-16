$('.phone-icon').on('click',function(){
    $(this).toggleClass('cur');
    if($(this).hasClass('cur')){
        $('.head-box').slideDown();
        $('.head-box').css('overflow-y',"scroll");
    }else {
        $('.head-box').slideUp();
    }
})
$('.box-right').on('click',function(){
    $(this).toggleClass('cur');
    if($(this).hasClass('cur')){
        $(this).next().slideDown();
        $(this).next().css('overflow-y',"scroll");
    }else {
        $(this).next().slideUp();
    }
})
$('.tab-nav a').on('click',function(){
	$(this).addClass('on').siblings().removeClass('on');
	$('.tab-cnt .tab-cnt-d').eq($(this).index()).addClass('block').siblings().removeClass('block');
})
