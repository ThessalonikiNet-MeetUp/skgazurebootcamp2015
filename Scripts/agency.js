/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    function initialize() {
        var latlng = new google.maps.LatLng(40.621132, 22.955198);
        var mapCanvas = document.getElementById('map-canvas');
        var mapOptions = {
            center: latlng,
            zoom: 17
        }
        var map = new google.maps.Map(mapCanvas, mapOptions);

        new google.maps.Marker({
            position: latlng,
            map: map,
            title: 'Coho'
        });
    }
    google.maps.event.addDomListener(window, 'load', initialize);

});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function () {
    $('.navbar-toggle:visible').click();
});
