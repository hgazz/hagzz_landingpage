// splide js initialize slider
// Logo sliders (academy logos marquee)
function splideLogos() {
    let logoSliders = document.querySelectorAll('.splide.logos-slide');
    for (let i = 0; i < logoSliders.length; i++) {
        new Splide(logoSliders[i], {
            type: 'loop',
            autoWidth: true,
            gap: '2rem',
            arrows: false,
            pagination: false,
            drag: false,
            autoScroll: {
                speed: 1,
                pauseOnHover: false
            }
        }).mount(window.splide.Extensions);
    }
}

// Text/testimonial sliders
function splideTeam() {
    let splides3 = $('.splide.text-slide');
    for (let i = 0, splideLength = splides3.length; i < splideLength; i++) {
        new Splide(splides3[i], {
            type: 'loop',
            gap: '5rem',
            autoWidth: true,
            arrows: false,
            pagination: false,
            drag: false,
            autoScroll: {
                speed: 1,
                pauseOnHover: false
            }
        }).mount(window.splide.Extensions);
    }
}

splideLogos();
splideTeam();