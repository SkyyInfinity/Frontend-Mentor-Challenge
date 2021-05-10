$(document).ready(function () {
    // Variables
    var menu = $('#js_menu');
    var burger = $('#js_burger');
    var body = $('body');

    // Quand on clic sur "burger" on ajoute la class "is-active"
    burger.on('click', function() {
        menu.toggleClass('is-active');
        burger.toggleClass('is-active');
        body.toggleClass('overflow-hidden');
    });
    
    // Si on clique partout sauf sur navLinks et hamburger, alors navLinks se ferme.
    $(document.body).click(function(e) {
        if(!$(e.target).is(menu) && !$.contains(menu[0],e.target) && !$(e.target).is(burger) && !$.contains(burger[0],e.target)) {
            menu.removeClass('is-active');
            burger.removeClass('is-active');
            body.removeClass('overflow-hidden');
        };
    });
});