$(function(){
    var sliders = $(".slider-wrapper");

    sliders.each(function(){
        //pour chaque elt de sliders
        var container = $(this).find('.slide-container');

        var slides = $(this).find(".slide");

        var containerWidth = slides.length * 400;

        var isMoving = false; //variable de blocage pour savoir si l'animation est en cours ou non

        container.css("width", containerWidth);

        $(this).find(".btn-prev").on("click", function(e) {
            e.preventDefault();
            // alert("1");
            if (container.position().left < 0 && !isMoving){
                isMoving = true;
                container.animate({"left": "+=400"}, function (){
                    // fonction de callback de la fonction animate
                    // alert ("fini");
                    isMoving = false;
                });
            }
             else {
                container.animate({"left": "-800"});
            }
        })

        $(this).find(".btn-next").on("click", function(e) {
            e.preventDefault();
            // alert("2");
            if (container.position().left > -(slides.length - 1) * 400 && !isMoving){
                isMoving = true;
                container.animate({"left": "-=400"}, function (){
                    // fonction de callback de la fonction animate
                    // alert ("fini");
                    isMoving = false;
                });
            }
             else {
                container.animate({"left": "0"});
            }
        })


    });
});
