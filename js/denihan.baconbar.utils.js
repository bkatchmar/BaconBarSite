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
        }
    }
};