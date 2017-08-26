var myArr = ["pomme", "banana", "figue"];

var myObject = {
    "nom"       : "huitorel",
    "prenom"    : "Pascal",
    "age"       : 51
}

alert(myArr.length); // nombre d'éléments du tableau

myObject.prenom
myObject["prenom"] //idem

// fonctions

function myFonction (var1, var2) {};

var myFonction = function (var1, var2) {};

// conditions
// switch : utiliser default même quand non nécessaire (donc vide) ; cela permet d'optimiser la RAM (A VERIFIER)

// boucles

var myArr= ["chat", "chien", "poney"];
for (item in myArr){
    alert (myArr[item]);
}

var myObj= {"n":"nn", 'p':'pp'};
for (property in myObj){
    alert (property);
    alert (myObj[property]);
}