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
    	scrollingSpeed: 500,
    	responsiveWidth: 300,
        responsiveHeight: 400,
        paddingBottom: '10px',
        paddingTop: '10px',
        navigation:true,
        controlArrowColor: '#424242',
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
