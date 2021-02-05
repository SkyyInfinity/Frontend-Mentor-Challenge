$(document).ready(function() {
    // open at click
    $('#js_burger').on('click', function() {
        $('#js_burger').toggleClass('is-active');
        $('#js_navigation').toggleClass('is-opened');
        $('#js_btnActive').removeClass('btn-primary').addClass('btn-secondary');
    })
    
});