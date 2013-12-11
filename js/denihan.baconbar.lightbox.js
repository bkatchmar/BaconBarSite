jQuery(document).ready(function () {
    jQuery("main#page_content div.panels span.panel_column span.panel img.enter-email").click(function () {
        jQuery("div.form-lightbox, div.contact-form.lightbox").css("display", "block");
        jQuery("div.form-lightbox").animate({ opacity: "0.8" }, 700);
        jQuery("div.contact-form.lightbox").animate({ opacity: "1" }, 700);
        
        s.events = "event28";
        s.eVar29 = "Bacon Bar Newsletter Sign Up Form";
        s.track();

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