
$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});
var csrfToken = $('[name="csrf_token"]').attr('content');

setInterval(refreshToken, 3600000); // 1 hour

function refreshToken() {
    $.get('refresh-csrf').done(function(data) {
        csrfToken = data; // the new token
    });
}

setInterval(refreshToken, 3600000); // 1 hour

$(document).ajaxComplete(function(event, xhr, settings) {
    if (xhr.status == 400) {
        location.reload();
    }
});