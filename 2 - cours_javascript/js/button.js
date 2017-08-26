function toggleBackgroundColor (color) {
    // document.body.style.backgroundColor = color;
    var paragraphe = document.createElement("p");
    paragraphe.innerHTML = "text1 <strong>texte2</strong>";
    paragraphe.style.color = color;
    document.body.appendChild(paragraphe);
}

window.onload = function () {
    btnBlue = document.getElementById("btn-blue");
    btnBlue.addEventListener("click", function () {
        toggleBackgroundColor ("blue");
    });
}