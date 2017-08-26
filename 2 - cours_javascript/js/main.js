// on attend que le document soit entièrement chargé
window.onload = function () {
    var myForm = document.getElementById('my-form');

    var number1 = document.getElementById('number-1');
    var number2 = document.getElementById('number-2');
    var resultField = document.getElementById('result-field');


    // var calculate = function (){};
    // ou
    function calculate(val1, val2){
        return val1 + val2;
    }
    //    var value1= parseInt(number1.value, 10);
    //    var value2= parseInt(number2.value, 10);

    //    resultField.value = calculate(value1, value2);

    // myForm.onsubmit = function() {
    //
    // };
    myForm.addEventListener("submit", function(e) {
        // alert("envoi du formulaire");

        e.preventDefault();
        var value1 = parseFloat(number1.value, 10);
        var value2 = parseFloat(number2.value, 10);
        if (!Number.isNaN(value1) && !Number.isNaN(value2))
        {
            resultField.value = calculate(value1, value2);
        } else {
            alert ("erreur");
        }

    });


};
