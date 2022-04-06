function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}

var images = new Array();

function preloadImages(){

    for (i=0; i < preloadImages.arguments.length; i++){

        images[i] = new Image();

        images[i].src = preloadImages.arguments[i];

    }
}

preloadImages("img/personajes.jpg", "img/money-heist.jpg", "img/berlin.png", "img/denver.png", "img/dinero.png", "img/dni.png", "img/heroe.png", "img/hospital.png", "img/money-heist2.jpg", "img/profesor.png", "img/raquel.png", "img/rio.png", "img/tokio.png", "img/amigos.png", "img/amor.jpg", "img/anillos.png", "img/busqueda.png", "img/cena.png", "img/coche.png", "img/esposas.png", "img/huella.jpg", "img/ladron.png", "img/lisboa.png", "img/llamada.png", "img/madre.png", "img/muerto.png", "img/mujer-policia.png", "img/pastillas.jpg", "img/pastillas2.png", "img/phone.jpg", "img/prision.png", "img/programas.jpg", "img/puerta.png", "img/puño.png", "img/robo.png", "img/tokio.png");


