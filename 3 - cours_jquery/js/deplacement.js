$(function() {
    var leftField = $("#left");
    var topField = $("#top");
    var block = $("#block");

    $("#my-form").on("submit", function(e){
        e.preventDefault();

        var leftValue = parseInt(leftField.val());
        var topValue = parseInt(topField.val());

        if ($.isNumeric(leftValue) && $.isNumeric(topValue)) {
            block.stop().animate({"left" : leftValue, "top" : topValue}, 10000);
            // block.animate("top", topValue);
            // block.css("left", leftValue);
            // block.css("top", topValue);
        }
    });
});
