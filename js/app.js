
const app = {// module global
    init: function () {
        theme.init();
        navBar.init();
    },
};

document.addEventListener("DOMContentLoaded", app.init());
