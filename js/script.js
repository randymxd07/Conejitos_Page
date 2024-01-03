document.addEventListener('DOMContentLoaded', function() {
            
    // Parallax //
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems);

    // Sidenav //
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);

    // Material Box //
    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems);

    window.sr = ScrollReveal();

    sr.reveal('.efecto1', {
        duration: 3000,
        origin: 'bottom',
        distance: '-100px',
        reset: true
    });

    sr.reveal('.efecto2',{
        duration: 3000,
        reset: true
    });

});