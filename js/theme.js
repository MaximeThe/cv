const theme = {
  init: function(){
    //Theme-dark
    const buttonTheme = document.querySelector("#iconTheme");
    buttonTheme.addEventListener("click", theme.handleTheme);
    theme.applyLocalStorageTheme();
    
  },
  handleTheme: function(event) {
    event.preventDefault();
    const theme = document.querySelector("body");
    const icon = document.querySelector("#iconTheme");
    let darkTheme;
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
         
     };
  },
  setThemeToLocalStorage: function (darkTheme) {//entrée dans local storage 
    const stringifyDarkTheme = JSON.stringify(darkTheme);
    localStorage.setItem("darkTheme", stringifyDarkTheme);
  },
  applyLocalStorageTheme: function () {//récupère l'entrée 'dark_theme' dans le local storage 
      const StringifyIsDark = localStorage.getItem("darkTheme");
      const isDark = JSON.parse(StringifyIsDark); 
      if (isDark) {
          theme.handleTheme();
      }
  },
  
}
