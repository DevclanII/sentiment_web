import $ from 'jquery';
import 'malihu-custom-scrollbar-plugin';
import 'jquery-mousewheel';

$(document).ready(function () {
  $("#sidebar").mCustomScrollbar({ 
    theme: "minimal" 
  });
  $("#scrol").mCustomScrollbar({
    scrollButtons: { enable: true },
    theme: "dark-thick",
    scrollbarPosition: "inside"
  });
  $("#history").mCustomScrollbar({
    scrollButtons: { enable: true, scrollType: "stepped" },
    keyboard: { scrollType: "stepped" },
    mouseWheel: { scrollAmount: 188 },
    theme: "rounded-light",
    autoExpandScrollbar: true,
    snapAmount: 188,
    snapOffset: 65
  })
  $('#dismiss, #dismis')
    .on('click', function () {
      $('#sidebar').removeClass('active');
    });

  $('#sidebarCollapse').on('click', function () {
    $('#sidebar').addClass('active');
    $('a[aria-expanded=true]').attr('aria-expanded', 'false');
  });
});
