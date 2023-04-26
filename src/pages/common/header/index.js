// 头部的js代码
import "./index.less";
import "swiper/css/swiper.min.css";
import "wowjs/css/libs/animate.css";


$(".m-header .menu-btn").on("click", function(){
    $(".m-header .nav-container").slideToggle();
})
$(".m-header .nav-item .icon").on("click", function(){
    const that = $(this).parents(".nav-item");
    that.find(".nav-sublist").slideToggle();
})