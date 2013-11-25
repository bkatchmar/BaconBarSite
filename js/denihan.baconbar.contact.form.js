; (function ($) {
    $.fn.denihanEmailSignUpForm = function (options) {
        // Create some defaults, extending them with any options that were provided
        var settings = $.extend({
            firstName: "div.contact-form.lightbox input#fname",
            lastName: "div.contact-form.lightbox input#lname",
            email: "div.contact-form.lightbox input#email",
            apiCall: "api/api.aspx"
        }, options);

        function initialize($el) {
            $el.click(function () {
                emailEnter();
            });
        }

        function emailEnter() {
            var firstName = jQuery(settings.firstName).val();
            var lastName = jQuery(settings.lastName).val();
            var email = jQuery(settings.email).val();

            firstName = firstName.replace(new RegExp("'", "g"), "\\'");
            lastName = lastName.replace(new RegExp("'", "g"), "\\'");
            email = email.replace(new RegExp("'", "g"), "\\'");

            if (Contact.FormValidateAndSubmit(firstName, lastName, email)) {
                Denihan.Utils.updateStatusMessage("div.first-name-validation", "One Moment...");

                var submitData = {
                    requestName: "SubmitFrontPageForm",
                    requestFirstName: firstName,
                    requestLastName: lastName,
                    requestEmail: email
                }

                jQuery.post(settings.apiCall, submitData).done(function (data) {
                    var response = jQuery(data);
                    var result = response.find("div#answer").text();

                    if (result === "existed") {
                        Denihan.Utils.updateStatusMessage("div.first-name-validation", "This Email Already Exists");
                    }
                    else {
                        Denihan.Utils.updateStatusMessage("div.first-name-validation", "You Have Been Signed Up");
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
            Denihan.Utils.updateStatusMessage("div.first-name-validation", "First Name Required");
        }
        else {
            jQuery("div.first-name-validation").css("display", "none");
        }

        if (Denihan.Utils.stringIsEmpty(lName) || Denihan.Utils.stringIsBlank(lName)) {
            status = false;
            Denihan.Utils.updateStatusMessage("div.last-name-validation", "Last Name Required");
        }
        else {
            jQuery("div.last-name-validation").css("display", "none");
        }

        if (Denihan.Utils.emailIsInvalid(email)) {
            status = false;
            Denihan.Utils.updateStatusMessage("div.email-validation", "Valid Email Required");
        }
        else {
            jQuery("div.email-validation").css("display", "none");
        }

        return status;
    }
};