function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}
var images = new Array();
function preloadImages() {
    for(i = 0; i < preloadImages.arguments.length; i++){
        images[i] = new Image();
        images[i].src = preloadImages.arguments[i];
    }
    console.log(arguments);
}
preloadImages("personajes.jpg", "money-heist.jpg", "berlin.png", "denver.png", "dinero.png", "dni.png", "heroe.png", "hospital.png", "money-heist2.jpg", "profesor.png", "raquel.png", "rio.png", "tokio.png", "amigos.png", "amor.jpg", "anillos.png", "busqueda.png", "cena.png", "coche.png", "esposas.png", "huella.jpg", "ladron.png", "lisboa.png", "llamada.png", "madre.png", "muerto.png", "mujer-policia.png", "pastillas.jpg", "pastillas2.png", "phone.jpg", "prision.png", "programas.jpg", "puerta.png", "puño.png", "robo.png", "tokio.png");

//# sourceMappingURL=enlaces.816e7b21.js.map
