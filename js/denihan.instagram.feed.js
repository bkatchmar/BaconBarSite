; (function ($) {
    $.fn.denihanInstagramPage = function (options) {
        var settings = $.extend({
            ClientId: "c23c51b3f0384a00ad9805b31f20c445",
            UserId: "712883252",
            ImageCount: "20",
            accessToken: "712883252.c23c51b.d4da4db5dd15424994613361359a588f",
            buildApiCallUrl: function(userId, clientId, imageCount, accessToken) { return "https://api.instagram.com/v1/users/" + userId + "/media/recent/?client_id=" + clientId + "&count=" + imageCount; },
            onObjectRetrieval: function($el, imagesFromInstagram) {
                $.each(imagesFromInstagram, function(index, value) {
                    console.log(value);
                });
            }
        }, options);

        function initialize($el) {
            var instagramUrl = settings.buildApiCallUrl(settings["UserId"], settings["ClientId"], settings["ImageCount"], settings["accessToken"]);

            $.ajax({
                dataType: "jsonp",
                url: instagramUrl,
                data: "{}",
                success: function (images) {
                    settings.onObjectRetrieval($el, images["data"]);
                }
            });
        }

        return this.each(function () {
            var $this = $(this);
            initialize($this);
        });
    };
})(jQuery);