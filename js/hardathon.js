/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

$(function() {
    $('a.move-section-down').bind('click', function(event) {
        $.fn.fullpage.moveSectionDown();
        event.preventDefault();
    });
});

// fullPage initialization
$(document).ready(function() {
    $('#fullpage').fullpage({
        autoScrolling:false,
        normalScrollElements: '#main, #about, #how, #where, #faq, #contacts',
    	responsiveWidth: 300,
        responsiveHeight: 400,
        paddingBottom: '10px',
        paddingTop: '10px',
        controlArrowColor: '#424242',
        menu: '#menu',
        anchors: ['main', 'about', 'how', 'where', 'faq', 'contacts']
    });

    var count=0;
    $("body").on('keypress', function(e) {
          if (e.which == 1099 ||  e.which == 1067 ||  e.which ==  83 ||  e.which == 115) {
              count++;
              if(count===5) {
                $('.kitty').addClass('active');
                setTimeout(function() { $('.kitty').removeClass('active') }, 5000);
                count=0;
              }
          }
     });
});

ymaps.ready(init);

function init () {
  var myMap = new ymaps.Map('map', {
    center: [55.746293, 37.584994],
    zoom: 13
  });
  myMap.behaviors.disable('scrollZoom');
}
