        // 自调用函数(自执行函数)
        ;(function () {
          // 1. 顶部高亮
          $(window).scroll(function () {
              // console.log('scroll')
              let top = $('html').scrollTop()
              // console.log('top:', top)
              if (top === 0) {
              $('.header').removeClass('scrolled')
              } else {
              $('.header').addClass('scrolled')
              }
          })
          // 2.返回顶部
          $(window).scroll(function () {
              console.log('执行啦!')
              let top = $('html').scrollTop()
              if (top > 200) {
              // 显示 无动画
              // $('.gotop').css('display', 'block')
              // 显示
              // $('.gotop').show(1000)
              // 淡入
              // $('.gotop').fadeIn(1000)
              // 展开
              $('.gotop').stop().slideDown(1000)
              } else {
              // 隐藏 无动画
              // $('.gotop').css('display', 'none')
              // 隐藏
              // $('.gotop').hide(1000)
              // 淡出
              // $('.gotop').fadeOut(1000)
              // 收起
              $('.gotop').stop().slideUp(1000)   
              }
          })
          // 3.返回顶部 - 点击返回
          $('.gotop').click(function () {
              // $('html').scrollTop(0)
              $('html').animate({
              scrollTop: 0
              })
          })
          })()