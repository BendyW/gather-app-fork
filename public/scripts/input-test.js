console.log('Js is live!');
var userCity = [];
var userCoors = {};
var lat;
var lng;

$('button').on('click', function () {
    console.log('Button works.');

    var city = $('#userCity').val()

    var city = $.ajax({
        url: 'https://api.meetup.com/2/cities?&sign=true&query=' + city,
        type: 'Get',
        crossDomain: true,
        dataType: 'jsonp',
        success: function (data) {
            console.log(data.results[0]);
            userCity.push(data.results[0]);
            userCoors.lat = userCity[0].lat;
            userCoors.lng = userCity[0].lon;
            localStorage.setItem('lat', userCity[0].lat);
            localStorage.setItem('lng', userCity[0].lon);
            console.log('lat = ' + userCity[0].lat);
            console.log('lon = ' + userCity[0].lon);
            return data.results[0];

        }, error: function (err) {
            console.log('Hmm... I couldn\'t find that city.');
            console.log(err);
        }
    });
});