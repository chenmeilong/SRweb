;(function () {
  function clear() {
    $('.dialog-wrap').fadeOut(function () {
      $('.form')[0].reset()
      $('.form span').text('')
    })
  }

  let $editTr = undefined
  // 1. 点击弹框
  $('.add').click(function () {
    $('.dialog-wrap h3').text('新增')
    $editTr = undefined
    $('.dialog-wrap').fadeIn()
  })
  // 2.日期选择器
  $('.birthday').datepicker({
    language: 'zh-CN',
    autoHide: true,
  })
  // 3.表单校验
  $('.form').validate({
    sendForm: false,
    description: {
      nickname: {
        required: '姓名不能为空!',
      },
      mobile: {
        required: '手机不能为空!',
        pattern: '手机格式有误!',
      },
      birthday: {
        required: '生日不能为空!',
      },
    },
    valid() {
      console.log('校验成功')
      if ($editTr === undefined) {
        let $tr = $('tbody tr').first().clone()
        let nickname = $('.nickname').val()
        let mobile = $('.mobile').val()
        let birthday = $('.birthday').val()
        $tr.find('.td-name').text(nickname)
        $tr.find('.td-mobile').text(mobile)
        $tr.find('.td-birth').text(birthday)
        $('tbody').append($tr)
        $tr.show()
        clear()
      } else {
        console.log('编辑')
        let nickname = $('.nickname').val()
        let mobile = $('.mobile').val()
        let birthday = $('.birthday').val()
        $editTr.find('.td-name').text(nickname)
        $editTr.find('.td-mobile').text(mobile)
        $editTr.find('.td-birth').text(birthday)
        clear()
      }
    },
  })

  // 4.点击取消
  $('.cancel').click(function () {
    clear()
  })

  // 5.点击关闭
  $('.close').click(function () {
    clear()
  })

  // 6.删除
  $('tbody').on('click', '.del', function () {
    console.log('this:', this)
    let $tr = $(this).parent().parent()
    console.log('$tr:', $tr)
    $tr.fadeOut(function () {
      $tr.remove()
    })
  })

  // 7. 进入编辑状态
  $('tbody').on('click', '.edit', function () {
    let $tr = $(this).parent().parent()
    console.log('$tr:', $tr)
    let name = $tr.find('.td-name').text()
    let mobile = $tr.find('.td-mobile').text()
    let birth = $tr.find('.td-birth').text()
    console.log(name, mobile, birth)
    $('.dialog-wrap h3').text('编辑')
    $('.nickname').val(name)
    $('.mobile').val(mobile)
    $('.birthday').val(birth)
    $('.dialog-wrap').fadeIn()

    $editTr = $tr
  })
})()
