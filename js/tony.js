function init () {
  $.getScript("/js/jquery.cookie.js", function(){
    cookieMonster();
  });
}

function getUrlParams(sParam) {
  var sPageURL = window.location.search.substring(1);
  var sURLVariables = sPageURL.split('&');
  for (var i = 0; i < sURLVariables.length; i++)
  {
    var sParameterName = sURLVariables[i].split('=');
    if (sParameterName[0] == sParam)
      {
        return sParameterName[1];
      }
  }
}

function cookieMonster() {
  referral = getUrlParams('dst');
  if (referral) {
    var ctCookie = $.cookie('_ct');
    if ( ctCookie === undefined ) {
      var unique_id = generateId();
      var time = new Date().getTime();
      $.cookie('_ct', 'R.' + unique_id + '.' + time + '.' + referral );
    }
  }
}

function clickHandler() {
  $(document).on("click", ".dst", function( event ) {
    var ctCookie = $.cookie('_ct');
    if (ctCookie) {
      var href = $(this).attr('href');
      $(this).attr("href", href + '?dst=' + ctCookie);
    }
    // event.preventDefault();
  });
}

$( document ).ready(function() {
  clickHandler();
});

var generateId = function() {
  return Math.random().toString(36).substr(2, 9).toUpperCase();
};

init();
