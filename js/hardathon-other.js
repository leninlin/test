/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0
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
});

$("#hardathonRegisterForm").submit(function(event) {
  event.preventDefault();
  var hardathonFormData = { 'user' : {'name':$('#hardathonUsername').val(), 'email' : $('#hardathonUserEmail').val()}};
  var form = $( "#hardathonRegisterForm" );

  if (form.valid() === true) {
  $.ajax({
            url: "http://cabinet.hardathon.ru/api/users",
            type: "POST",
            crossDomain: true,
            data: hardathonFormData,
            success: function (response) {
                console.log(response);
                $(window).attr('location','/success');
            },
            error: function (xhr, status) {
                console.log(xhr);
                alert("error " + status);
            }
        });
  }
});
