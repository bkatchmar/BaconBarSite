function fillInMap() {
    jQuery('#googlemap').gmap3({
        map: {
            options: {
                streetViewControl: false,
                mapTypeControl: false,
                zoomControlOptions: {
                    position: google.maps.ControlPosition.LEFT_CENTER
                },
                zoom: 16, center: [41.89287, -87.62543]
            }
        },
        marker: {
            latLng: [41.89287, -87.62543],
            options: {
                icon: new google.maps.MarkerImage("../img/bbb_marker.png")
            }
        }
    });
}