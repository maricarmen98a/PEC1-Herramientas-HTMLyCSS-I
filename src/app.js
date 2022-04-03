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

preloadImages("personajes.jpg", "money-heist.jpg", "berlin.png", "denver.png", "dinero.png", "dni.png", "heroe.png", "hospital.png", "money-heist2.jpg", "profesor.png", "raquel.png", "rio.png", "tokio.png");