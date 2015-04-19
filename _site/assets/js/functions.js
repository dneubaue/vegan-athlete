$(window).scroll(function() {
  var scrollTop = $(this).scrollTop();

  $('.logo').css({
    'transform': 'translate(0px, ' + scrollTop / 2 + 'px)'
  });
  if (scrollTop >= $('.hero').height()) {
    $('.menu-bar').css({
      'position': 'fixed',
      'top': '0px'
    });
    $('.page-content').css({
      'margin-top': '112px'
    });
  } else {
    $('.menu-bar').css({
      'position': 'relative'
    });
    $('.page-content').css({
      'margin-top': '40px'
    });
  }
});
