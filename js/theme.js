const theme = {
  init: function(){
    //Theme-dark
    const buttonTheme = document.querySelector("#iconTheme");
    buttonTheme.addEventListener("click", theme.handleTheme);
    theme.applyLocalStorageTheme();
    
  },
  handleTheme: function() {
    
    let darkTheme;
    const theme = document.querySelector("body");
    const icon = document.querySelector("#iconTheme");
    
     if (theme.classList.contains("theme-dark")) { // Pas de thème         
      theme.classList.remove("theme-dark");
      icon.classList.remove("fa-toggle-on");
      icon.classList.add("fa-toggle-off");
      darkTheme = false;

     } else { // si y'a pas 'theme-dark' 
         theme.classList.add("theme-dark");
         icon.classList.remove("fa-toggle-off");
         icon.classList.add("fa-toggle-on");
         darkTheme = true;
         
     }
     theme.setThemeToLocalStorage(darkTheme);
  },
  setThemeToLocalStorage: function (darkTheme) {
    const stringifyDarkTheme = JSON.stringify(darkTheme);
    localStorage.setItem("dark_theme", stringifyDarkTheme);
},
 applyLocalStorageTheme: function () {
        // on récupère l'entrée 'dark_theme' dans le local storage si elle existe
        const StringifyIsDark = localStorage.getItem("dark_theme");

        // typeof StringifyIsDark => STRING
        const isDark = JSON.parse(StringifyIsDark); // on traduit le JSON en type JS (ici booléen)
        // typeof isDark => BOOLEAN

        // si la valeur de isDark est true, on change le thème
        if (isDark) {
            theme.handleTheme();
        }


      
    },
};
