window.onload = function (){
    var links = document.getElementsByTagName('a');

    links[2].style.color = "darkred";

    var activeLinks = document.getElementsByClassName ("active-link");

    activeLinks[0].style.color = "";

    console.log(activeLinks);

    // ajoute une className
    links[0].className += " test";

    var lastLink = links[links.length - 1];



    // ajoute une className
    links[1].classList.add("test");
     // supprime une className
    console.log(lastLink.classList.contains("active-link"));
    lastLink.classList.remove("active-link");
    console.log(lastLink.classList.contains("active-link"));

    links[2].classList.toggle("test"); // supprime la class qui existe déjà
    links[3].classList.toggle("test"); // ajoute la class qui n'existe pas

    // sélectionne le premier élément qui correspond au sélectoeur
    var elem = document.querySelector(".active-link");
    // sélectionne tous les éléments qui correspondent au sélectoeur
    var elems = document.querySelectorAll(".active-link");

    // création d'un nouvel élément a
    var newLink = document.createElement('a');
    newLink.href = "#";
    newLink.textContent = "Nouveau lien";

    // ajoute un élément à la fin (ici du body)
    document.body.appendChild(newLink);

    var nav = document.getElementById ("main-nav");
    document.body.insertBefore(newLink, nav);

    console.log(newLink.nextSibling);
    





}
