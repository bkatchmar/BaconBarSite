; (function ($) {
    $.fn.denihanGetYear = function () {
        function initialize($el) {
            $el.text((new Date).getFullYear());
        }

        return this.each(function () {
            var $this = $(this);
            initialize($this);
        });
    };
})(jQuery);