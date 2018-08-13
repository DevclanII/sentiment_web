import react from 'react'
import $ from 'jquery'
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
        $('#dismiss')
          .on('click', function () {
            // hide sidebar
            $('#sidebar').removeClass('active');
          });

        $('#sidebarCollapse').on('click', function () {
          // open sidebar
          $('#sidebar').addClass('active');
          $('a[aria-expanded=true]').attr('aria-expanded', 'false');
        });
      });