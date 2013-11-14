jQuery(document).ready(function () {
    jQuery("main#page_content article section div.contact-form").denihanCateringForm();
});

; (function ($) {
    $.fn.denihanCateringForm = function () {
        function initialize($el) {
            $el.find("div a").click(function() {
                submit();
            });
        }

        function submit() {
            var name = jQuery("div.contact-form. input#name").val();
            var email = jQuery("div.contact-form input#email").val();
            var phone = jQuery("div.contact-form input#phone").val();
    
            name = name.replace(new RegExp("'", "g"), "\\'");
            phone = phone.replace(new RegExp("'", "g"), "\\'");
            email = email.replace(new RegExp("'", "g"), "\\'");

            if(Catering.FormValidateAndSubmit(name, email, phone)) {
                var submitData = {
                    requestName: "CateringForm", 
                    requestFullName: name,
                    requestPhone: phone,
                    requestEmail: email
                }

                // Submit AJAX Request
                jQuery.post("api/api.aspx", submitData).done(function (data) {
                    Denihan.Utils.updateStatusMessage("div.contact-form div.name-validation", "Request Sent");
                });
            }
        }

        return this.each(function () {
            var $this = $(this);
            initialize($this);
        });
    };
})(jQuery);

var Catering = {
    FormValidateAndSubmit: function (name, email, phone) {
        var status = true;
    
        if (Denihan.Utils.stringIsEmpty(name) || Denihan.Utils.stringIsBlank(name)) {
            status = false;
            Denihan.Utils.updateStatusMessage("div.contact-form div.name-validation", "Name Required");
        }
        else {
            jQuery("div.contact-form div.name-validation").css("display", "none");
        }
        
        if (Denihan.Utils.emailIsInvalid(email)) {
            status = false;
            Denihan.Utils.updateStatusMessage("div.contact-form div.email-validation", "Valid Email Required");
        }
        else {
            jQuery("div.contact-form div.email-validation").css("display", "none");
        }

        if (Denihan.Utils.stringIsEmpty(phone) || Denihan.Utils.stringIsBlank(phone)) {
            status = false;
            Denihan.Utils.updateStatusMessage("div.contact-form div.phone-validation", "Phone Required");
        }
        else {
            jQuery("div.contact-form div.phone-validation").css("display", "none");
        }
        
        return status;
    }
};