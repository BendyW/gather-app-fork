
// Global variables for Meetup request

window.onload = function(){
    console.log('Js is live.');
    // get_location();
    getLocationJSON();
}

var undfCheck = undefined;
var gatheredEvents = [];
var gatheredEventsMarkers = [];
var category = "";
var userLocQuery = "";
var userLatLon = [];
var userCityName = "";
var userGeoLocation = {lat: 0, lng: 0};

// --------------------

// Get user location

// var locationRequest = function () {
//
//     console.log('LOCATION REQUEST$$$$$$$$$$$$$$$$$')
//     userLocQuery = $('#userCity').val();
//
//     $.ajax({
//         url: 'https://api.meetup.com/find/locations?&sign=true&photo-host=public&query=' + userLocQuery + '&key=ba297c563351295a94119496d95d&callback=?',
//         type: 'Get',
//         crossDomain: true,
//         dataType: 'JSON',
//         success: function(data){
//
//             console.log(data.data[0]);
//             console.log('----------------------------');
//             userLatLon.push(data.data[0].lat, data.data[0].lon);
//             console.log(userLatLon[0]);
//             console.log(userLatLon[1]);
//             console.log('----------------------------');
//
//             console.log('Pushed data successfully');
//
//         }, error: function(err) {
//             console.log('ERROR processing user location');
//         }
//     });
// }

// ---------------------

// Meetup AJAX Request

function Event(name, lat, lng, id) {
    this.name = name;
    // this.venue = venue;
    this.lat = lat;
    this.lng = lng;
    this.id = id;
};
var meetupRequest = function (){

    category = $('#categories-menu option:selected').val();
    console.log('This is the beginning of the Meetup request');

    console.log(userLatLon);

    var checkAmountEvents = function() {
        $('#sidebar').prepend(
            '<br>' + '<br>' + '<p id="events-found">' + (gatheredEvents.length + 1) + ' gatherings found in your area!' +'</p>'
        );
    }

    $.ajax({
        url: 'https://api.meetup.com/2/open_events?&sign=true&photo-host=public&lat=' + userGeoLocation.lat + '&category=' + category + '&lon=' + userGeoLocation.lng + '&page=50&key=ba297c563351295a94119496d95d&callback=?',
        type: 'Get',
        crossDomain: true,
        dataType: 'JSON',
        success: function(data){
            console.log(data);
            for(var i=0; i < data.results.length; i++) {

                if(data.results[i].venue === undefined) {
                    console.log('-----------------------------------------');
                    // $('#sidebar').append(
                    //     '<article class=' + '"results-box">' +
                    //     '<h2>' + (i + 1) + '.' + '</h2>' +
                    //     '<h3>' + data.results[i].name + '</h3>' +
                    //     '<button id="save-event-button">Save</button>' +
                    //     '</article>' +
                    //     '<hr>'
                    // );
                    console.log('-----------------------------------------');
                } else {

                    console.log(data.results[i]);
                    gatheredEvents.push(new Event(data.results[i].name, data.results[i].venue.lat, data.results[i].venue.lon, i));
                    console.log('Object ' + [i] + ' successfully added');

                    $('#sidebar').append(
                        '<article data-id=' + i + ' class=' + '"results-box">' +
                        '<hr>' + '<br/>' +
                        '<h2 class="number">' + (i + 1) + '.' + '</h2>' +
                        '<h3>' + data.results[i].name + '</h3>' +
                        '<h4>' + data.results[i].venue.name + '</h4>' +
                        '<br />' +
                        '<button id="save-event-button">Save</button>' +
                        '</article>'
                    );

                } // end of if statement
            }

            checkAmountEvents();

            console.log('API call finished');

            $('#sidebar').append(
              '<a href=".">' +
              '<article class="results-box-end">' +
              '<h4 class="results-box-end-h">Try again?</h4>' +
              '</article>' +
              '</a>'
            );

            makeMarkers();

        }, error: function(err) {
            console.log('error');
        }
    });
}

// --------------------

// Let's Make Some Markers
// var mMart = {lat: 41.888543, lng: -87.6354435}; // reference for Gmaps marker

var labels = "";
var labelIndex = 0;

var makeLabels = function() {

    for(var i=0; gatheredEvents.length; i++) {
        labels += [i];
        console.log('made labels');
    }
}


var makeMarkers =  function () {

    for (var i = 0; i < gatheredEvents.length; i++) {



        var marker = new google.maps.Marker({
            position: {lat: gatheredEvents[i].lat, lng: gatheredEvents[i].lng},
            map: map,
            title: gatheredEvents[i].name,
            id: i,
            label: gatheredEvents.id
            // icon: { url: '../images/geo-tag-active.svg',
            //         size: new google.maps.Size(15, 20),
            //         scaledSize: new google.maps.Size(15, 20),
            //         origin: new google.maps.Point(15, 0)
            // }
        })
        // set event

        // var eventsListDom = $('article[data-id]');
        // for (var el in eventsListDom) {
        //     console.log('woosh')
        //     var article = $(eventsListDom[el]);
        //     console.log(article);
        //     $(article).on('click', function(event) {
        //        //   $(this).css({'background':'lime'});
        //     });
        //     // add events to each sidebar entry to highlight marker
        // };

        // var eventsListDom = $('article[data-id]');
        // for (var el in eventsListDom) {
        //     console.log('woosh')
        //     var article = $(eventsListDom[el]);
        //     console.log(article);
        //     $(article).on('click', function(event) {
        //         var id = $('article').data('id');
        //         // maybe parseInt id? check typeof
        //         gatheredEventsMarkers[id].setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png');
        //
        //     });
        //     // add events to each sidebar entry to highlight marker
        // };

        marker.addListener('click', function(event) {
            var m = this;
            console.log(m);
            var eventId = m['id'];
            // select the dom element @ this position
            var eventsListDom = $('article[data-id]');
            var eventEl = eventsListDom[eventId];
            console.log('Our event is');
            console.log(eventEl);
            //.addClass() + then setTime to .removeClass
            //console.log('y u click me');
            //console.log(event);
            //alert('ben is sleepy')
        });

        gatheredEventsMarkers.push(marker); // end of push

    } // end of For Loop

}

// var makeMarkersEvtList = function() {
//
//     for(var i = 0; i < gatheredEventsMarkers.length; i++) {
//
//         console.log('event marker ' + i + ' added')
//     }
// }
//
// makeMarkersEvtList();

// --------------------

// Get User Location via API

// var get_location = function() {
//     navigator.geolocation.getCurrentPosition(show_map);
// }
//
// function show_map(position) {
//     userLatLon.push(position.coords.latitude, position.coords.longitude);
//     console.log('Geo call back successful, good job.');
//     getLocationJSON();
// }

var getLocationJSON = function() {

    $.getJSON('https://geoip-db.com/json/geoip.php?jsonp=?')
        .done(function (location) {
            $('#country').html(location.country_name);
            $('#state').html(location.state);
            $('#city').html(location.city);
            $('#latitude').html(location.latitude);
            $('#longitude').html(location.longitude);
            $('#ip').html(location.IPv4);

            $('#location-input').attr("placeholder", location.city);
            $('#location-input').prop('disabled', true);

            userGeoLocation.lat = location.latitude;
            userGeoLocation.lng = location.longitude;

            console.log('Forced user location');

        });
}


// --------------------


// Google Maps Initializer

$('#gatherUp').click(function() {
    $('#main').addClass('hide');
    $('#bgvid-container').addClass('hide');
    $('#map-container').removeClass('hide');
    meetupRequest();
    initMap(userGeoLocation);
    makeMarkers();
});

// --------------------

if( $('#logged > a').html() !== ""){
    $('#notLogged > a:nth-child(1)').addClass('hide');
    $('#notLogged > a:nth-child(2)').addClass('hide');
    $('#notLogged').addClass('hide');
    $('#logged').removeClass('hide');
    $('#logged > form > button').removeClass('hide');
}