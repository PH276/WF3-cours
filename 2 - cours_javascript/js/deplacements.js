window.onload = function () {
    var myDiv = document.getElementById('my-div');
    var myForm = document.getElementById('my-form');
    var gauche = document.getElementById('gauche');
    var haut = document.getElementById('haut');
    var timer;
    // var gaucheChamp = document.

    var move = function (e) {
        e.preventDefault();
        clearInterval(timer); // on supprime l'interval s'il existe

        var leftValue = parseFloat(gauche.value);
        var topValue = parseFloat(haut.value);

        if (Number.isNaN(leftValue) || Number.isNaN(topValue)){
            alert ("Bien saisir des chiffres");
            gauche.value='';
            haut.value='';
        } else {
            timer = setInterval (function(){
                var blocPosY = myDiv.offsetTop;
                var blocPosX = myDiv.offsetLeft;

                if (topValue > blocPosY) {
                    myDiv.style.top = blocPosY + 1 + "px";
                } else if (topValue < blocPosY) {
                    myDiv.style.top = blocPosY - 1 + "px";
                }
                
                if (leftValue > blocPosX) {
                    myDiv.style.left = blocPosX + 1 + "px";
                } else if (leftValue < blocPosX) {
                    myDiv.style.left = blocPosX - 1 + "px";
                }

            }, 50); // répéter toutes les 500 milisecondes



            // myDiv.style.left = gauche.value+"px";
            // myDiv.style.top = haut.value+"px";
        }
    }
    myForm.addEventListener ('submit', move);
}
