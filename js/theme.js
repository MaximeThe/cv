// On récupere l'element sur lequel on veut placer un espion

const buttonTheme = document.querySelector("#clickTheme");

buttonTheme.addEventListener("click", handleClick);

// on ecrit le code du handler

function handleClick(event) {
    event.preventDefault();

    // On recupére l'intérieur de la class 'body'
    const newsletter = document.querySelector('.theme');
    //on rajoute la class 'dark__theme' à notre valeur 'body'
    newsletter.classList.toggle('theme--dark');

    // On recupére l'intérieur de la class de l'icon moon
    const sun = document.querySelector('.fa-sun');
    //fa-sun est caché par défaut, on ajoute une class pour annuler le display: none.
    sun.classList.toggle('fa-sun-on');

    // On recupére l'intérieur de la class de l'icon moon
    const moon = document.querySelector('.fa-moon');
    //on rajoute une class avec display none 
    moon.classList.toggle('fa-moon-off');
    


};