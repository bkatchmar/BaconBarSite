jQuery(document).ready(function () {
    jQuery("span#slider-wrapper span#slider").denihanInstagramPage({
        onObjectRetrieval: function ($el, imagesFromInstagram) {
            $.each(imagesFromInstagram, function (index, value) {
                $el.append(Denihan.Utils.addNewSpSpanTagToFeedGallery(value["images"]["low_resolution"]["url"]));
            });

            // Call the gallery plugin now to set the functionality up, all the images are there
            Denihan.Utils.setUpImageGallery();
        }
    });
});