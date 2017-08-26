$(function() {
    // variables
    var slider = $('#slider-wrapper');
    var slideContainer = $('#slide-container');
    var slides = $(".slide");
    var isMoving = false;

    // fonctions
    var move = function(direction){
        if (direction == "next") {
            if (slideContainer.position().left > - (slides.length - 1) * 600 && !isMoving){
                isMoving = true;
                slideContainer.animate({"left" : "-=600"}, function(){
                    isMoving = false;
                });
            }
        } else {
            if (slideContainer.position().left < 0 && !isMoving){
                isMoving = true;
                slideContainer.animate({"left" : "+=600"}, function(){
                    isMoving = false;
                });
            }
        }
    }

    // écouteurs
    $(".open-slider").on('click', function(e) {
        e.preventDefault();
        var slideNumber = $(this).data("slide");
        //var slideNumber = $(this).attr("data-slide");
        var containerLeft = slideNumber * 600;
        slideContainer.css({"left" : -containerLeft});
        console.log(slideNumber +" "+ containerLeft);
        $("#shadow").fadeIn();
    });

    $("#shadow").on('click', function(e){
        var target = $(e.target); // récupère la cible de l'élément

        if (target.is("#shadow")) {
            $(this).fadeOut();
        }
    });

    $(".btn-prev, .btn-next").on('click', function(e) {
        e.preventDefault();

        var direction = $(this).data("direction");
        move(direction);
    })

    // exécution
    var containerWidth = slides.length * 600;
    slideContainer.css({"width" :containerWidth});

});
