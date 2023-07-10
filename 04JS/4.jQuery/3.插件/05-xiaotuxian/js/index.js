;(function () {
  // 1.轮播图
  $('.xtx_banner ul').slick({
    prevArrow: '.prev',
    nextArrow: '.next',
    autoplay: true,
    dots: true,
    appendDots: '.indicator',
  })

  // 2.图片懒加载
  $('.lazyload').lazyload()
})()
 