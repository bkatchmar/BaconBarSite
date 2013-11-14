jQuery(document).ready(function () {
    jQuery("main#page_content div.panels span.panel_column span.panel img.enter-email").click(function () {
        jQuery("div.form-lightbox, div.contact-form.lightbox").css("display", "block");
        jQuery("div.form-lightbox").animate({ opacity: "0.8" }, 700);
        jQuery("div.contact-form.lightbox").animate({ opacity: "1" }, 700);

        // Pre Fill In Email Field
        var inputtedEmail = jQuery("table.enter-email-form input").val();
        jQuery("div.contact-form.lightbox input#email").val(inputtedEmail);
    });

    jQuery("div.form-lightbox, div.contact-form.lightbox div.close-btn").click(function () {
        jQuery("div.form-lightbox").animate({ opacity: "0" }, 700, function () { jQuery("div.form-lightbox").css("display", "none"); });
        jQuery("div.contact-form.lightbox").animate({ opacity: "0" }, 700, function () { jQuery("div.contact-form.lightbox").css("display", "none"); });
    });

    // Click Event
    jQuery("div.contact-form a").denihanEmailSignUpForm();
});

;  (function ($) {
    $.fn.denihanEmailSignUpForm = function () {
        function initialize($el) {
            $el.click(function() {
                emailEnter();
            });
        }

        function emailEnter() {
            var firstName = jQuery("div.contact-form.lightbox input#fname").val();
            var lastName = jQuery("div.contact-form.lightbox input#lname").val();
            var email = jQuery("div.contact-form.lightbox input#email").val();
    
            firstName = firstName.replace(new RegExp("'", "g"), "\\'");
            lastName = lastName.replace(new RegExp("'", "g"), "\\'");
            email = email.replace(new RegExp("'", "g"), "\\'");

            if (Contact.FormValidateAndSubmit(firstName, lastName, email)) {
                Denihan.Utils.updateStatusMessage("div.contact-form.lightbox div.first-name-validation", "One Moment...");

                var submitData = {
                    requestName: "SubmitFrontPageForm", 
                    requestFirstName: firstName,
                    requestLastName: lastName,
                    requestEmail: email
                }

                jQuery.post("api/api.aspx", submitData).done(function (data) {
                    var response = jQuery(data);
                    var result = response.find("div#answer").text();
                    
                    if (result === "existed") {
                        Denihan.Utils.updateStatusMessage("div.contact-form.lightbox div.first-name-validation", "This Email Already Exists");
                    }
                    else {
                        Denihan.Utils.updateStatusMessage("div.contact-form.lightbox div.first-name-validation", "You Have Been Signed Up");
                    }
                });
            }
        }

        return this.each(function () {
            var $this = $(this);
            initialize($this);
        });
    };
})(jQuery);

var Contact = {
    FormValidateAndSubmit: function (fName, lName, email) {
        var status = true;
    
        if (Denihan.Utils.stringIsEmpty(fName) || Denihan.Utils.stringIsBlank(fName)) {
            status = false;
            Denihan.Utils.updateStatusMessage("div.contact-form.lightbox div.first-name-validation", "First Name Required");
        }
        else {
            jQuery("div.contact-form.lightbox div.first-name-validation").css("display", "none");
        }
        
        if (Denihan.Utils.stringIsEmpty(lName) || Denihan.Utils.stringIsBlank(lName)) {
            status = false;
            Denihan.Utils.updateStatusMessage("div.contact-form.lightbox div.last-name-validation", "Last Name Required");
        }
        else {
            jQuery("div.contact-form.lightbox div.last-name-validation").css("display", "none");
        }
        
        if (Denihan.Utils.emailIsInvalid(email)) {
            status = false;
            Denihan.Utils.updateStatusMessage("div.contact-form.lightbox div.email-validation", "Valid Email Required");
        }
        else {
            jQuery("div.contact-form.lightbox div.email-validation").css("display", "none");
        }
        
        return status;
    }
};