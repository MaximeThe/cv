const theme = {
  init: function(){
    const buttonTheme = document.querySelector("#clickTheme");
    buttonTheme.addEventListener("click", theme.handleTheme);
  },
  handleTheme: function(event) {
    event.preventDefault();

    const theme = document.querySelector("body");
    const icon = document.querySelector("#iconTheme");
    
     if (theme.classList.contains("theme-dark")) { // Pas de thème         
      theme.classList.remove("theme-dark");
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");

     } else { // si y'a pas 'theme-dark' 
         theme.classList.add("theme-dark");
         icon.classList.remove("fa-moon");
         icon.classList.add("fa-sun");

     }

    // On recupére l'intérieur de la class de l'icon moon
    //
    //fa-sun est caché par défaut, on ajoute une class pour annuler le display: none.
    //

      // On recupére l'intérieur de la class de l'icon moon
    //
      //on rajoute une class avec display none 
    //
  },
}