$(document).ready(function() {
  // Get the current URL
  var currentPath = window.location.pathname;

  // Get the span you want with a combination class and attribute and child jQuery selector
  var currentMenuItem = $(".page-link[href='" + currentPath + "']");

  // Then add your class
  currentMenuItem.addClass("current-page");
});
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
