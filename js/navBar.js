const navBar ={
    
    init: function (){
        
        window.addEventListener("scroll", navBar.handleScroll);
    },
    handleScroll:  function (event) {
        const header = document.querySelector("#navBar");
        const sticky = header.offsetTop;
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    },

}
