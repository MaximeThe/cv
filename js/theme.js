const theme = {
  init: function(){
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
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");
      darkTheme = false;

     } else { // si y'a pas 'theme-dark' 
         theme.classList.add("theme-dark");
         icon.classList.remove("fa-moon");
         icon.classList.add("fa-sun");
         darkTheme = true;
         
     };
     theme.setThemeToLocalStorage(darkTheme);
     
  },
  setThemeToLocalStorage: function (darkTheme) {//entrée dans local storage 
    const stringifyDarkTheme = JSON.stringify(darkThemeA);
    localStorage.setItem("dark_theme", stringifyDarkTheme);
  },
  applyLocalStorageTheme: function () {//récupère l'entrée 'dark_theme' dans le local storage 
      const StringifyIsDark = localStorage.getItem("dark_theme");
      const isDark = JSON.parse(StringifyIsDark); 
      if (isDark) {
          theme.changeTheme();
      }
      const colorTheme = localStorage.getItem("colorTheme");
      if (colorTheme) {
          theme.changeColorTheme(colorTheme);
      }
  },
  
}
