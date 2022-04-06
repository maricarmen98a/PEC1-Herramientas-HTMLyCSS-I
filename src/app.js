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

preloadImages("src/img/personajes.jpg", "src/img/money-heist.jpg", "src/img/berlin.png", "src/img/denver.png", "src/img/dinero.png", "src/img/dni.png", "src/img/heroe.png", "src/img/hospital.png", "src/img/money-heist2.jpg", "src/img/profesor.png", "src/img/raquel.png", "src/img/rio.png", "src/img/tokio.png", "src/img/amigos.png", "src/img/amor.jpg", "src/img/anillos.png", "src/img/busqueda.png", "src/img/cena.png", "src/img/coche.png", "src/img/esposas.png", "src/img/huella.jpg", "src/img/ladron.png", "src/img/lisboa.png", "src/img/llamada.png", "src/img/madre.png", "src/img/muerto.png", "src/img/mujer-policia.png", "src/img/pastillas.jpg", "src/img/pastillas2.png", "src/img/phone.jpg", "src/img/prision.png", "src/img/programas.jpg", "src/img/puerta.png", "src/img/puño.png", "src/img/robo.png", "src/img/tokio.png");


