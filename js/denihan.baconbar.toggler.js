; (function ($) {
    $.fn.denihanToggle = function (options) {
        // Create some defaults, extending them with any options that were provided
        var settings = $.extend({
            defaultMode: "off",
            target: "div.bookingengine div.best_rate_promise",
            onMode: function($trigger,target) { $(target).css("display", "block"); $(target).animate({ opacity: 1 }, { duration: 200 }); $trigger.attr("data-denihan-mode", "on"); $("header#primary nav div a#about_menu").addClass("mouseover"); },
            offMode: function($trigger,target) { $(target).animate({ opacity: 0 }, { duration: 200 }); $trigger.attr("data-denihan-mode", "off"); $(target).css("display", "none"); $("header#primary nav div a#about_menu").removeClass("mouseover"); },
            additionalTrigger: function(on,off,target,$trigger) { }
        }, options);

        function initialize($el) {
            $el.attr("data-denihan-mode", settings["defaultMode"]);

            //For older browsers, I notice setting Opacity:0 doesn't really cut it. But setting the animation actually will do the trick
            if(settings["defaultMode"] === "off") {
                settings.offMode($el,settings.target);
            }

            settings.additionalTrigger(settings.onMode,settings.offMode,settings.target,$el);

            $el.mouseover(function () {
                var mode = $(this).attr("data-denihan-mode");

                if (mode === "off") {
                    settings.onMode($(this),settings.target);
                }
            });
        }

        return this.each(function () {
            var $this = $(this);
            initialize($this);
        });
    };
})(jQuery);