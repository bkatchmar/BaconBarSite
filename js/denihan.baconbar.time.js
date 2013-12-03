jQuery(document).ready(function () {
    var currentHour = new Date().getHours();
    
    if (currentHour >= 6 && currentHour < 18) {
        var imgLocation = "img/hero-home-day.jpg";
        jQuery("main#page_content div.hero img.main").attr("src", imgLocation);
    }
    else {
        var imgLocation = "img/hero-home-night.jpg";
        jQuery("main#page_content div.hero img.main").attr("src", imgLocation);
    }
});