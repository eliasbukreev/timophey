import 'expose-loader?$!jquery';
import 'expose-loader?jQuery!jquery';
//import 'expose-loader?Util!bootstrap/js/dist/util';

import './style.scss';
import './media.scss';
import '../node_modules/open-iconic/sprite/open-iconic.svg';
import './computer-support.svg';
import './computer-repair.jpg';
import './favicon.ico';
import 'bootstrap/js/src/util';
import 'bootstrap/js/src/modal';
import './bodytest_apple.jpg';
import "./logo.png"

//ModalImg
import './modalCompRepair.jpg'
import './modalNoteRepair.jpg'
import './modalWind.jpg'
import './modalNet.jpg'
import './modalBugs.jpg'
import './modalHard.jpg'







jQuery(document).ready(function($){


function HTMLReady (){
$("#header").load("header.html");
$("#footer").load("footer.html");
$("#modals").load("modals.html");
};
HTMLReady();



// Example starter JavaScript for disabling form submissions if there are invalid fields

    (function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})(); 


    // when the form is submitted
    $('#contact-form').on('submit', function (e) {

        // if the validator does not prevent form submit



       if ($('#contact-form')[0].checkValidity()) {

            var url = "contact.php";
            // POST values in the background the the script URL
            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data)
                {
                    // data = JSON object that contact.php returns

                    // we recieve the type of the message: success x danger and apply it to the 
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    // let's compose Bootstrap alert box HTML
                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable">' + messageText + '</div>';
                    
                    // If we have messageAlert and messageText
                    if (messageAlert && messageText) {
                        // inject the alert to .messages div in our form
                        var contactForm = $('#contact-form'); 
                        contactForm.find('.messages').html(alertBox);
                        // empty the form
                        contactForm[0].reset();
                        if (contactForm.hasClass('was-validated')) {
                            contactForm.removeClass('was-validated');
                        }
                    }
                }
            });
            return false;
        }
    });	
});