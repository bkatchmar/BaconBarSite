jQuery(document).ready(function () {
    jQuery("div#main nav>div").denihanToggleMobile();
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