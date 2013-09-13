jQuery(document).ready(function () {
    jQuery("span.current_year").denihanGetYear();

    jQuery("header#primary nav div a").denihanToggle({
        target: "header#primary nav div.sub_section",
        additionalTrigger: function (on, off, target, $trigger) {
            jQuery(target).mouseleave(function (e) {
                var targetId = e.toElement.id;
                
                if (targetId != "about_dropdown" && targetId != "about_menu") {
                    off($trigger, target);
                }
            });
        }
    });

    modernizr();
});

function modernizr() {
    if (!Modernizr.input.placeholder) {
        jQuery("[placeholder]").focus(function () {
            var input = jQuery(this);
            if (input.val() == input.attr("placeholder")) {
                input.val("");
                input.removeClass("placeholder");
            }
        }).blur(function () {
            var input = jQuery(this);
            if (input.val() == "" || input.val() == input.attr("placeholder")) {
                input.addClass("placeholder");
                input.val(input.attr("placeholder"));
            }
        }).blur();
        jQuery("[placeholder]").parents("form").submit(function () {
            jQuery(this).find("[placeholder]").each(function () {
                var input = $(this);
                if (input.val() == input.attr("placeholder")) {
                    input.val('');
                }
            })
        });
    }
}