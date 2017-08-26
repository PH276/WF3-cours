window.onload = function() {
    var nav = document.getElementById ("main-nav");
    var btn = document.getElementById ("toggle-nav");

    function toggleNav(e) {
        e.preventDefault();
        // nav.style.right = "0";
        nav.classList.toggle("opened");
    }
    // ajoute un écoutreur dse click
    btn.addEventListener ("click", toggleNav);


    // supprime un écoutreur dse click
    // btn.removeEventListener ("click", toggleNav);
}
