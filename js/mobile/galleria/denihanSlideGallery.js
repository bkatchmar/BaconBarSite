// Used for gallery scrolling, we're using Galleria to achieve this
// Website: http://galleria.io/
; (function ($) {
    $.fn.denihanSlideGallery = function (options) {
        var settings = $.extend( {
            "theme": ""
        }, options);

        function initialize($el) {
            var documentId = "#" + $el.attr("id");

            Galleria.configure({
                swipe: true,
                thumbnails: 'empty',
                transition: 'slide',
                touchTransition: 'slide',
                showInfo: false,
                imagePosition: 'left top',
                imageCrop: 'width',
                layerFollow: false,
                height: 0.75,
                fullscreenDoubleTap: false,
                showCounter: false,
                initialTransition: 'flash',
                autoplay: options.autoplay
            });

            Galleria.loadTheme(settings.theme);
            Galleria.run(documentId);

            $el.removeAttr("class");
        }

        return this.each(function () {
            var $this = $(this);
            initialize($this);
        });
    };
})(jQuery);