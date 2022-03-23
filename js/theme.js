// On récupere l'element sur lequel on veut placer un espion

const buttonTheme = document.querySelector("#clickTheme");


/* On attache un écouteur d'evenement (on embauche un espion pour surveiller le click sur le bouton) avec addEventListener() https://developer.mozilla.org/fr/docs/Web/API/EventTarget/addEventListener prend en paramètre :

- 1 : le type d'évènement à écouter (liste des evenements ici : https://developer.mozilla.org/fr/docs/Web/Events#listing_des_%C3%A9v%C3%A9nements)

 2 : le handler -> la fonction qui sera appelée par l'espion si l'evenement à lieu !Bonne pratique on donne à la fonction un nom qui commence par handle..Quelquechose on ne met pas les parenthèses sinon la fonction s'execute tout de suite et nous on veux l'executer que si l'evenement à lieu*/

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