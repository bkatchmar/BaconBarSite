jQuery(document).ready(function () {
    jQuery("div#main nav>div").denihanToggleMobile();
    jQuery("div#main div.content div.contact-form>div a:link").denihanEmailSignUpForm({
        firstName: "div.contact-form input#fname",
        lastName: "div.contact-form input#lname",
        email: "div.contact-form input#email",
        zip: "div.contact-form input#zip",
        apiCall: "../api/api.aspx"
    });
});

; (function ($) {
    $.fn.denihanToggleMobile = function () {
        function initialize($el) {
            $el.find("div.header").click(function() {
                $("div.content").slideUp(200);
                $el.find("div.content").slideDown(400);
                fillInMap();
            });
        }

        return this.each(function () {
            var $this = $(this);
            initialize($this);
        });
    };
})(jQuery);