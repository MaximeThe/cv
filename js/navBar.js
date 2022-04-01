const navBar ={
    
    init: function (){
        const header = document.querySelector("#navBar");
        header.addEventListener("scroll", navBar.scroll);
    },
    scroll:  function () {
        const sticky = header.offsetTop;
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    },

}
