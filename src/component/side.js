import $ from 'jquery';
import 'malihu-custom-scrollbar-plugin';
import 'jquery-mousewheel';

$(document).ready(function () {
  $("#sidebar").mCustomScrollbar({ 
    theme: "minimal" 
  });
  $('#dismiss, #dismis')
    .on('click', function () {
      $('#sidebar').removeClass('active');
    });

  $('#sidebarCollapse').on('click', function () {
    $('#sidebar').addClass('active');
    $('a[aria-expanded=true]').attr('aria-expanded', 'false');
  });
});
