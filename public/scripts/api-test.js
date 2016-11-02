var map;
var space = {lat: 41.8906528, lng: -87.6269877};
var nyc = {lat: 40.7128, lng: -74.0059};
var portland = {lat: 43.6615, lng: -70.2553};

var chicago = {lat: 41.8781, lng: -87.6298};
var mMart = {lat: 41.888543, lng: -87.6354435};
var tribuneTower = {lat: 41.8904377, lng: -87.6235843};
var userLocation = {lat: parseFloat(localStorage.lat), lng: parseFloat(localStorage.lng)};




function initMap(userLocation) {

    map = new google.maps.Map(document.getElementById('map'), {
        center: userLocation,
        zoom: 10,
        styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#a0d6d1"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#dedede"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#dedede"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f1f1f1"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
    });


    console.log('We made it here');

}
//
// localStorage.getItem("lat");
// localStorage.getItem("lng");



// Style


