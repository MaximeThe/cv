// On récupere l'element sur lequel on veut placer un espion
const buttonTheme = document.querySelector("#clickTheme");

// on attache un écouteur d'evenement (on embauche un espion pour surveiller le click sur le bouton) avec addEventListener()
// https://developer.mozilla.org/fr/docs/Web/API/EventTarget/addEventListener
// prend en paramètre :
//  - 1 : le type d'évènement à écouter (liste des evenements ici : https://developer.mozilla.org/fr/docs/Web/Events#listing_des_%C3%A9v%C3%A9nements)
//  - 2 : le handler -> la fonction qui sera appelée par l'espion si l'evenement à lieu !
// bonne pratique on donne à l fonction une nom qui commence par handle..Quelquechose
// on ne met pas les parenthèses sinon la fonction s'execute tout de suite et nous on veux l'executer que si l'evenement à lieu

buttonTheme.addEventListener("click", handleClick);

// on ecrit le code du handler
function handleClick(event) {
    event.preventDefault();

    // On recupére l'intérieur de la class 'body'
    const newsletter = document.querySelector('#theme');
    //on rajoute la class 'dark__theme' à notre valeur 'body'
    newsletter.classList.toggle('theme--dark');

};


zzzz
