$(function() {
    // variables
    var links = $("#main-nav a");
    var lastScrollPos = $(document).scrollTop();

    // fonctions

    // écouteurs
    links.on("click", function(e) {
        e.preventDefault();

        var target = $(this).attr('href');
        var targetTop = $(target).position().top;

        // alert(targetTop);

        // window.scrollTo(0, targetTop);
        // $(document).scrollTop(targetTop);
        // $("body").scrollTop(targetTop);

        $("html, body").animate({scrollTop : targetTop});

    });
    $(document).on('scroll', function(e){
        if ($("html, body").is(":animated") == false){ //vérifie que html ou body ne sont pas en cours d'animation
        var pageIndex = $(document).scrollTop() / $(window).height();
        if ($(document).scrollTop() > lastScrollPos){
            // a défilé vers le bas
            // alert( "vers le bas" );
            pageIndex = Math.ceil(pageIndex);

        }else{
            // a défilé vers le haut
            // alert( "vers le haut" );
            pageIndex = Math.floor(pageIndex);
        }
        var pagePosition = $(".page").eq(pageIndex).position().top;
        $("html, body").animate({scrollTop : pagePosition}, function(){
            lastScrollPos = $(document).scrollTop();
        });



        }
    })

    // exécution

});
