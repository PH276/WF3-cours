$(function() {
    $("#toggle-nav").on("click", function (e){
        e.preventDefault();

        $("#main-nav").toggleClass("opened"); // autre fonctio
    });
    //$("#toggle-nav").off("click"); //supprime l'écouteur d'événement
});
