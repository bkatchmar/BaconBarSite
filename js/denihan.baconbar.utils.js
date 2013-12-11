var Denihan = {
    Utils: {
        emailIsInvalid: function (email) {
            var status = false;
            var emailRegEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,6}$/i;

            if (Denihan.Utils.stringIsEmpty(email) || Denihan.Utils.stringIsBlank(email)) { status = true; }
            else if (email.search(emailRegEx) == -1) { status = true; }
            else { status = false; }

            return status;
        },
        stringIsEmpty: function (str) {
            return (!str || 0 === str.length);
        },
        stringIsBlank: function (str) {
            return (!str || /^\s*$/.test(str));
        },
        updateStatusMessage: function (target, message) {
            jQuery(target).text(message);
            jQuery(target).css("display", "block");
        },
        getPageNameForOmniture: function () {
            var pages = {
                "index": { "omnName": "Home" },
                "about": { "omnName": "About" },
                "catering": { "omnName": "Catering", "formName": "Bacon Bar Catering Form" },
                "contact": { "omnName": "Contact" },
                "delivery": { "omnName": "We Deliver" },
                "gallery": { "omnName": "Gallery" },
                "gift-cards": { "omnName": "Gift Cards" },
                "legal": { "omnName": "Privacy Policy" },
                "location": { "omnName": "Location" },
                "menus": { "omnName": "Menus" },
                "press": { "omnName": "Press" },
                "sitemap": { "omnName": "Site Map" }
            };

            var currentPageUrl = window.location.toString().toLowerCase();
            currentPageUrl = currentPageUrl.replace(new RegExp(".htm", "g"), "");
            currentPageUrl = currentPageUrl.replace(new RegExp(".html", "g"), "");

            var sectionsInUrl = currentPageUrl.split("/");
            var pageName = sectionsInUrl[sectionsInUrl.length - 1];
            return (pages[pageName] ? pages[pageName] : pages["index"]);
        }
    }
};