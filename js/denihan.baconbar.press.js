jQuery(document).ready(function () {
    jQuery("main#page_content article.press section header img").each(function () {
        if (jQuery(this).attr("data-denihan-height")) {
            jQuery(this).css("top", jQuery(this).attr("data-denihan-height") + "px");
        }
    });
});