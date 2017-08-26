$(document).ready(function(){ //équivalent à $(function() {
    $("body").css("background", "red");

    //sélectionner un élément (sélecteur CSS)
    var body = $("body");
    var contentBlock = $("#content"); //
    var articles = $(".text"); // liste d'éléments
    var firstArticle = articles.eq(0); // articles index 0

    var parentBlock = firstArticle.parent(); // récupère le parent

    var childBlocks = contentBlock.children(); // récupère tous les éléments enfants directs

    var paragraph = contentBlock.find("p"); //
    // $("#content p") est plus lent que $("#content").find("p")

    var pParent = paragraph.parents("#content"); // sélectionne tous les parents de paragraph ici qui correspondent au sélecteur #content

    var secondArticle = firstArticle.next(); // sélectionne élément suivant

    var reFirstArticle = secondArticle.prev(); // sélectionne élément précédent


});

// evenement
// contentBlock.on ("click", function(){});
//
// fonctions avec les class
// $("sélecteur").addClass();
// $("sélecteur").removeClass();
// $("sélecteur").toggleClass();
