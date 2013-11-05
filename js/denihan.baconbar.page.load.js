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
            pagination: {
				container: "#foo2_pag",	
			}
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

var clicked = false;
$(".img-swap").click(function(){
  if(!clicked)
    $(this).addClass("clicked")
  else
    this.src.replace("-off","-on");
});


jQuery(function(){
	$("#pig1").attr("src","img/core/pig-1-on.png"); 
	$("#pig2").click(function() {
		$("#pig3").attr("src","img/core/pig-3-off.png");
		$("#pig1").attr("src","img/core/pig-1-off.png");
		$("#pig1").removeClass("clicked");
		$("#pig3").removeClass("clicked");
		$("#hero-main").fadeOut(200, function() {
			$("#hero-main").attr("src",$("#hero2").attr("href"));
		}).fadeIn(200);
		return false;
	});
	$("#pig1").click(function() {
		$("#pig3").attr("src","img/core/pig-3-off.png");
		$("#pig2").attr("src","img/core/pig-2-off.png");
		$("#pig2").removeClass("clicked");
		$("#pig3").removeClass("clicked");
		$("#hero-main").fadeOut(200, function() {
			$("#hero-main").attr("src",$("#hero1").attr("href"));
		}).fadeIn(200);
		return false;
	});
	$("#pig3").click(function() {
		$("#pig1").attr("src","img/core/pig-1-off.png");
		$("#pig2").attr("src","img/core/pig-2-off.png");
		$("#pig2").removeClass("clicked");
		$("#pig1").removeClass("clicked");
		$("#hero-main").fadeOut(200, function() {
			$("#hero-main").attr("src",$("#hero3").attr("href"));
		}).fadeIn(200);
		return false;
	});
});

//only do this if we're on the home page

$(document).ready(function(){
var docName = returnDocument();
if (docName=="index.htm") {
	var d = new Date();    // defaults to the current time in the current timezone
	if (d.getHours() >= 19  && d.getHours() < 7 ) {
		//show nightime pig hero
		$("#pig1").attr("src","img/core/pig-1-off.png"); 
		$("#hero-main").attr("src","img/hero-home-night.jpg");
		$("#pig2").attr("src","img/core/pig-2-on.png");
	} else {
		//show daytime pig hero
		$("#hero-main").attr("src","img/hero-home-day.jpg");
		$("#pig1").attr("src","img/core/pig-1-on.png");
	}
}
});


function returnDocument() {
        var file_name = document.location.href;
        var end = (file_name.indexOf("?") == -1) ? file_name.length : file_name.indexOf("?");
        return file_name.substring(file_name.lastIndexOf("/")+1, end);
 }

$(".img-swap").hover(function () {
      this.src = this.src.replace("-off","-on");
  }, function () {
     if(!$(this).hasClass("clicked"))	 
       this.src = this.src.replace("-on","-off");
 });
 

function preload(arrayOfImages) {
    $(arrayOfImages).each(function(){
        new Image().src = this;
    });
}

$(function(){
	$('#googlemap').gmap3({
	map:{
		options:{
				streetViewControl: false,
				mapTypeControl: false,
				zoomControlOptions: {
					position: google.maps.ControlPosition.LEFT_CENTER
				},
			zoom: 16, center:[41.89287,-87.62543]
		}
	},
	marker:{
		latLng: [41.89287,-87.62543],
		options: {
				icon: new google.maps.MarkerImage("img/bbb_marker.png")
			}
	}
});
});