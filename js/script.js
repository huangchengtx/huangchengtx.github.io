var swiperV = new Swiper('.swiper-container-v', {
    direction: 'vertical',
    mousewheel: true,
    on:{
        init: function(){
            swiperAnimateCache(this); //隐藏动画元素
            swiperAnimate(this); //初始化完成开始动画
        },
        slideChangeTransitionEnd: function(){
            swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
        }
    }
});
var swiperH = new Swiper('.swiper-container-h', {
    slidesPerView: 4,
    pagination: {
        el: '.swiper-pagination-h',
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
            slidesPerGroup: 2,
        },
        414: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
    },
    on:{
        init: function(){
            swiperAnimateCache(this); //隐藏动画元素
            swiperAnimate(this); //初始化完成开始动画
        },
        slideChangeTransitionEnd: function(){
            swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
        }
    }
});
swiperH.pagination.bullets.css('background','#000');