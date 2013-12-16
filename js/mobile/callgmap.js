function fillInMap() {
    jQuery('#googlemap').gmap3({
        map: {
            options: {
                streetViewControl: false,
                mapTypeControl: false,
                zoomControlOptions: {
                    position: google.maps.ControlPosition.LEFT_CENTER
                },
                zoom: 16,
                center: [41.892946, -87.625533]
            }
        },
        marker: {
            latLng: [41.892946, -87.625533],
            options: {
                icon: new google.maps.MarkerImage("../img/bbb_marker.png")
            },
            events: {
                click: function () {
                    window.open("https://www.google.com/maps/preview#!q=610+NORTH+RUSH+ST+CHICAGO,+IL+60611&data=!4m15!2m14!1m13!1s0x880e2cacf9746299%3A0xc06f947a9405b496!3m8!1m3!1d893!2d-87.625409!3d41.892944!3m2!1i1680!2i924!4f13.1!4m2!3d41.892946!4d-87.625533");
                }
            }
        }
    });
}