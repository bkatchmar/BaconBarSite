jQuery(document).ready(function () {
    jQuery("span#slider-wrapper").each(function () {
        jQuery("span.sp").first().addClass("active");
        jQuery("span.sp").hide();
        jQuery(".active").show();

        jQuery("img.button-next").click(function () {
            jQuery("span#slider-wrapper").find(".active").removeClass("active").addClass("oldActive");

            if (jQuery("span#slider-wrapper").find('.oldActive').is(':last-child')) {
                jQuery("span#slider-wrapper").find('.sp').first().addClass('active');
            }
            else {
                jQuery("span#slider-wrapper").find('.oldActive').next().addClass('active');
            }

            jQuery("span#slider-wrapper").find(".oldActive").removeClass("oldActive");
            jQuery("span#slider-wrapper").find("span.sp").css("display", "none");
            jQuery("span#slider-wrapper").find("span.sp.active").css("display", "inline");
        });

        jQuery("img.button-previous").click(function () {
            jQuery("span#slider-wrapper").find('.active').removeClass('active').addClass('oldActive');

            if (jQuery("span#slider-wrapper").find('.oldActive').is(':first-child')) {
                jQuery("span#slider-wrapper").find('.sp').last().addClass('active');
            }
            else {
                jQuery("span#slider-wrapper").find('.oldActive').prev().addClass('active');
            }

            jQuery("span#slider-wrapper").find(".oldActive").removeClass("oldActive");
            jQuery("span#slider-wrapper").find("span.sp").css("display", "none");
            jQuery("span#slider-wrapper").find("span.sp.active").css("display", "inline");
        });
    });
});