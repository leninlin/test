/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

$.validator.setDefaults({
  debug: true,
  success: "valid"
});

$( "#hardathonRegisterForm" ).validate({
  rules: {
    hardathonUserEmail: {
      required: true,
      email: true
    },
    hardathonUsername: {
      required: true
    }
  },
});

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

$("#hardathonRegisterForm").submit(function(event) {
  event.preventDefault();
  var hardathonFormData = {'username':$('#hardathonUsername').val(), 'email' : $('#hardathonUserEmail').val()};
  var form = $( "#hardathonRegisterForm" );

  if (form.valid() === true) {
  $.ajax({
            url: "http://localhost:4567/api/v1/register",
            type: "POST",
            crossDomain: true,
            data: hardathonFormData,
            dataType: "json",
            success: function (response) {
                alert(response.status);
            },
            error: function (xhr, status) {
                alert("error");
            }
        });
  }
});

ymaps.ready(init);

function init () {
  var myMap = new ymaps.Map('map', {
    center: [55.746293, 37.584994],
    zoom: 13
  });
  myMap.behaviors.disable('scrollZoom');
}
