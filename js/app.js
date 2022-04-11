
const app = {// module global
    init: function () {
        theme.init();
        navBar.init();
        sectionAnimation.init();
    },
};

document.addEventListener("DOMContentLoaded", app.init());
