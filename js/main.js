$('.navbar-gnb, .navSub_shadow').on('mouseenter mouseleave',function(ev){

    if( $(window).width() > 1169){ 
        
        if(ev.type=='mouseenter'){
            $('.navSub_shadow').stop().slideDown();
            $('.sub').stop().fadeIn();
        }
        else{
            $('.navSub_shadow').stop().slideUp(250,function(){
                $(this).removeAttr('style'); 
            });            
            $('.sub').stop().fadeOut(250,function(){
                $(this).removeAttr('style');    
            });
        }
    } else { 

    }
});  


var $mainBtn = $('.navbar-gnb > li > a');


$mainBtn.click(function(){
    if( $(window).width() < 1170){   
   
        if( !$(this).parents('li').is('.act') ) {
            $('.navbar-gnb > li').removeClass('act'); 
            $(this).parents('li').addClass('act');  
            $('.icon').removeClass('on');
            $(this).siblings('.icon').addClass('on'); 

        } 
        else {    
            $('.navbar-gnb > li').removeClass('act');
            $('.icon').removeClass('on');
        }       
    
    } 
});





$('.trigger').click(function(){
    $(this).toggleClass('open');

    if($(this).hasClass('open')){
        $('.side-gnb').animate({right:0},500);
        $('.navbar-wrap').animate({left:-250},500);
    } else {
        $('.side-gnb').animate({right:-250},500);
        $('.navbar-wrap').animate({left:0},500);
    }
})







