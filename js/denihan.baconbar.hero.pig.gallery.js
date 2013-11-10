; (function ($) {
    $.fn.denihanPigGallery = function (options) {
        // Create some defaults, extending them with any options that were provided
        var settings = $.extend({
            target: "main#page_content div.hero img.main"
        }, options);

        function initialize($el) {
            $el.find("img").first().denihanPigTurn();
            $el.find("img").click(function() {
                $(this).denihanPigTurn();

                var targetSource = $(this).attr("data-denihan-source-image");
                $(settings.target).attr("src", targetSource);
            });
        }

        return this.each(function () {
            var $this = $(this);
            initialize($this);
        });
    };
})(jQuery);

; (function ($) {
    $.fn.denihanPigTurn = function (options) {
        // Create some defaults, extending them with any options that were provided
        var settings = $.extend({
            mode: "on",
            className: "pig-on"
        }, options);

        function initialize($el) {
            // Get the pig image we are using
            var imgSrc = $el.attr("src");
            imgSrc = imgSrc.replace("-off","-on");
            
            // Get rid of previously selected items
            $("img." + settings.className).each(function() {
                var changedSrc = $(this).attr("src");
                changedSrc = changedSrc.replace("-on","-off");
                $(this).removeClass(settings.className);
                $(this).attr("src", changedSrc);
            });
            
            // Replace off with on min image source
            $el.addClass(settings.className);
            $el.attr("src", imgSrc);
        }

        return this.each(function () {
            var $this = $(this);
            initialize($this);
        });
    };
})(jQuery);