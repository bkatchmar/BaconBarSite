jQuery(document).ready(function () {
    jQuery("span.current_year").denihanGetYear();

    jQuery("header#primary nav div#about_dropdown a").denihanToggle({
        target: "header#primary nav div#about_dropdown_section",
        additionalTrigger: function (on, off, target, $trigger) {
            $trigger.mouseleave(function (e) {
                var rolledTo = jQuery(e.toElement);
                if (rolledTo) { rolledTo = jQuery(e.relatedTarget) }
                if (rolledTo.attr("class") != "sub_section" && rolledTo.attr("class") != "item" && rolledTo.attr("class") != "dropdownTrigger") {
                    off($trigger, target);
                }
            });

            jQuery(target).mouseleave(function (e) {
                var rolledTo = jQuery(e.toElement);
                if (rolledTo) { rolledTo = jQuery(e.relatedTarget) }
                if (rolledTo.attr("class") != "sub_section" && rolledTo.attr("class") != "item" && rolledTo.attr("class") != "dropdownTrigger") {
                    off($trigger, target);
                }
            });
        }
    });

   // Gallery Plugin
    if (jQuery("div#foo2").length > 0) {
        jQuery("div#foo2").carouFredSel({
            circular: false,
            infinite: false,
            auto: false,
            prev: {
                button: "#foo2_prev",
                key: "left"
            },
            next: {
                button: "#foo2_next",
                key: "right"
            },
            pagination: "#foo2_pag"
        });

        jQuery("div.image_carousel div#foo2 img").changeHero();
    }

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