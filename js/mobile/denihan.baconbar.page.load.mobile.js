jQuery(document).ready(function () {
    jQuery("div#main nav>div").denihanToggleMobile();
    jQuery("div.content").slideUp(200);
    jQuery("div#main div.content div.contact-form>div a:link").denihanEmailSignUpForm({
        firstName: "div.contact-form input#fname",
        lastName: "div.contact-form input#lname",
        email: "div.contact-form input#email",
        zip: "div.contact-form input#zip",
        apiCall: "../api/api.aspx"
    });
    jQuery("div.hero div#galleria").denihanSlideGallery({ "theme": "../js/mobile/galleria/galleria.classic.min.js", "autoplay": 5000 });
});

; (function ($) {
    $.fn.denihanToggleMobile = function () {
        function initialize($el) {
            $el.attr("data-denihan-mode", "off");
            
            $el.find("div.header").click(function() {
                var mode = $el.attr("data-denihan-mode");
                $("div.content").slideUp(200);
                $("div#main nav>div").attr("data-denihan-mode", "off");
                
                if(mode === "off") {
                    $el.find("div.content").slideDown(400);
                    $el.attr("data-denihan-mode", "on");
                }
                else {
                    $el.attr("data-denihan-mode", "off");
                }

                fillInMap();
            });
        }

        return this.each(function () {
            var $this = $(this);
            initialize($this);
        });
    };
})(jQuery);