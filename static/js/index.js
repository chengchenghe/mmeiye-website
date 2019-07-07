!(function () {
  $(function () {
    var $dom = {
      $tabForm: $('.form'),
      $tabResult: $('.submit-success'),
      $name: $('#name'),
      $phone: $('#phone'),
      $submit: $('#dosubmit'),
    }
    var valid = function () {
      if (!$dom.$name.val()) {
        $dom.$name.parent().addClass('has-error')
        $dom.$name.next().show()
        return false
      } else {
        $dom.$name.parent().removeClass('has-error')
        $dom.$name.next().hide()
      }
      if (!$dom.$phone.val()) {
        $dom.$phone.parent().addClass('has-error')
        $dom.$phone.next().text('请输入手机号码').show()
        return false
      } else {
        $dom.$phone.parent().removeClass('has-error')
        $dom.$phone.next().hide()
      }
      if (!/^1\d{10}$/.test($dom.$phone.val())) {
        $dom.$phone.parent().addClass('has-error')
        $dom.$phone.next().text('请输入正确的手机号码').show()
        return false
      } else {
        $dom.$phone.parent().removeClass('has-error')
        $dom.$phone.next().hide()
      }
      return true
    }

    // event
    $dom.$submit.on('click', function () {
      if (valid()) {
        $dom.$tabForm.hide()
        $dom.$tabResult.show()
        var ajaxOption = {
          url: '',
          data: { name: $dom.$name.val(), phone: $dom.$phone.val() },
          method: 'post'
        }
        $.ajax(ajaxOption)
      }
    })
  })
}())