if( $('#logged > a').html() !== ""){
    $('#notLogged > a:nth-child(1)').addClass('hide');
    $('#notLogged > a:nth-child(2)').addClass('hide');
    $('#logged > form > button').removeClass('hide');
}
