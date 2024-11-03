// splide js initialiaze slider 
// slider-1
function splideTeam() {
    let splides3 = $('.splide.text-slide');
    for (let i = 0, splideLength = splides3.length; i < splideLength; i++) {
        // Ouvre les paramètres du slider
        new Splide(splides3[i], {
            // Personnalisez les options souhaitées ici
            type: 'loop',
            gap: '5rem',
            autoWidth: '500px',
            arrows: false,
            pagination: false,
            drag: false,
            autoScroll: {
                speed: 1,
                pauseOnHover: false // Disable pausing on hover
            }
        }).mount(window.splide.Extensions);
    }
}
splideTeam();