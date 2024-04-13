$(document).ready(function() {
    $('#mobile-btn').on('click', function() {
        $('#mibile-menu').toggleClass('active');
        $('#mibile-btn').find('i').toggleClass('fa-x');
    });
});