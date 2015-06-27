(function ($, window, document, undefined) {
  'use strict';

  var formTemplate =
    '<form id=\'register\' name=\'myForm\'>' +
    '<div ng-hide=\'cookies\'>'+
    '<div class=\'row collapse\'>' +
    '<label>Enter an email to get started</label>'+
    '<div class=\'small-10 columns\'>' +
    '<input class=\'register\' name=\'email\' type=\'email\' placeholder=\'Enter your email to sign-up\' ng-model=\'user.email\' required>' +
    '</div>' +
    '<div class=\'small-2 columns\'>' +
    '<button ng-disabled="creating || myForm.$invalid || myForm.$pristine" class="submit button postfix success" id=""><span></span><span class="creating">Go</span></button>'+
    '</div>' +
    '</div>' +
    '</div>' +
    '</form>';

  var successTemplate =
    '<div class=\'alert-box success\' style=\'text-align: center; margin: 0 auto;\'>'+
    '<p>You\'ve been invited, please go check your email.<br> If it doesn\'t arrive, <b class="reset">click here</b> to try again.</p>'+
    '</div>';

  var email;
  var url = 'https://api.polkaspots.com';

  var regForm = function() {
    $('.register-user').append('<div id=\'main-form\'></div><div id=\'success\'></div>');
    var cookies = $.cookie('invited');
    if (cookies) {
      cookies = JSON.parse(cookies);
      $('#success').html(successTemplate);
    } else {
      $('#main-form').append(formTemplate);
    }

    var beforeSend = function() {
      $('button').prop('disabled', true);
      $('.creating').html('<i class="fa fa-cog fa-spin"></i>');
    };

    var success = function() {
      var a = { d: new Date().getTime(), e: email };
      cookies = JSON.stringify(a)
      $.cookie('invited', cookies, { expires: 1, path: '/' });
      $('#main-form').html('');
      $('#success').html(successTemplate);
    };

    $( "#register" ).submit(function( event ) {
      event.preventDefault();
      var values = $(this).serialize();
      email = $('input[name="email"]').val();

      $.ajax({
          type: 'POST',
          url: url + '/api/v1/holding_accounts',
          data: $(this).serialize(),
          beforeSend: beforeSend,
          error: function(){
            // alert('failure');
          },
          success: success,
      });
    });

    $( ".reset" ).click(function( event ) {
      $.removeCookie('invited', { path: '/' });
      $('#main-form').html(formTemplate);
      $('#success').html('');
      event.preventDefault();
    });

  }

  $.fn.ct = function () {

    if ( $('.register-user').length ) {
      // $('.register-user').each(function(index, element) {
        regForm();
      // });
    };


  };

}(jQuery, window, window.document));
