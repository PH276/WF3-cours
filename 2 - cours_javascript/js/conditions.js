

window.onload = function (){
    var myForm = document.getElementById('my-form');
    var saisie = document.getElementById('saisie');    
    
    myForm.addEventListener("submit", function(e) {
        e.preventDefault();
        var val = saisie.value;
        if (val == "bonjour") {
            alert ("Bienvenue");
        // } else if (!Number.isNaN(val)) {
        } else if (Number(val) == val) {
            alert ("chiffre");
        } else {
            alert ("erreur");
        }
        
    });
}