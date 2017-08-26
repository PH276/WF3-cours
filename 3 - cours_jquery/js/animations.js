$(function(){
    $(".toggle-dropdown").on("click", function (e){
        e.preventDefault();

        var btnToggle = $(this);
        var parentBlock = btnToggle.parents('.dropdown-wrapper');
        var contentBlock = parentBlock.find(".dropdown-content");

        // contentBlock.show(); // affiche
        // contentBlock.hide(); // masque

        // contentBlock.show(800);

        // contentBlock.toggle(800); // affiche / masque

        // contentBlock.slideDown(); // ouvre vers le bas
        // contentBlock.slideUp(); // ferme vers le haut

       contentBlock.slideToggle(2000); // ouvre / ferme

        //element.is(".test"); // vérifie que l'élément element correspond au sélecteur .test

        /*
        if (contentBlock.is(":visible")) { // :visible est utilisable avec jquery et non avec css
            contentBlock.hide();
        } else {
            contentBlock.show();
        }*/

        //        contentBlock.fadeIn(); // fait apparaître un élément en augmentant progessivement l'opacité
        //        contentBlock.fadeOut(); // fait disparaître un élément en augmentant progessivement l'opacité

        //contentBlock.fadeToggle();




    });

    $(".popin-down").on("click", function (e){
        e.preventDefault();


        $(".popin").show();
    });

    $(".popin-up").on("click", function (e){
        e.preventDefault();


        $(".popin").hide();
    });

    $(".toggle-popin").on("click", function (e){
        e.preventDefault();


        $(".shadow").fadeToggle();
    });


});
