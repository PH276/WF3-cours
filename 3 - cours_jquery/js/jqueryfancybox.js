$(function(){
    /* This is basic - uses default settings */


	/* Using custom settings */
    var columnWidth = $("#wrapper").width()/5;
    var grid = $("#wrapper").masonry({itemSelector : ".item", columnWidth : columnWidth, transitionDuration :0});

    grid.imagesLoaded().progress(function(){
        grid.masonry("layout");
    });
    $("a.single_image").fancybox();

})
