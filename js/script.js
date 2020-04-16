'use strict';

$(document).on('click','a[href="#"]', function(e){
    e.preventDefault();
});


// fix header
var scrollTop = 0;
scrollTop =$(document).scrollTop();
fixHeader();

// when you control window size... 
$(window).on('scroll resize',function(){
    scrollTop = $(document).scrollTop();
    fixHeader();
});

//fixedheader function 
function fixHeader(){
    if(scrollTop > 150){
        $('header').addClass('on');
    } else {
        $('header').removeClass('on');
    }
}


// scroll animation effect..
$(function(){
    $('.animate').scrolla({
        mobile: false,
        once: false
    });
});

// go to top script
$(function(){
    $('.gotop').on('click',function(){
        $('html,body').animate({
            scrollTop : 0}, 2000);
    });
});


//  hero image slide animation 
$(function(){
    $(".hero .slide").slick({
        arrow: true, //화살표
        dots: false, // 하단에 paging 버튼 노출
        fade: true,  // fade in effect
        autoplay: true, // 자동으로 플레이 될건지
        autoplaySpeed: 4000, //다음이미지로 넘어갈 시간
        pauseOnHover: false,
        pauseOnFocus: false
    }); 
});


