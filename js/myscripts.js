$(document).ready(function () {

    $("#all").hide();
    $("#clear").hide();

    $("#new").keypress(function (e) {
        if (e.keyCode == 13) {
            $(".alert").hide();
            var text = $("#new").val();
            $("#new").val("");
            $("#list").append("<hr />");
            $("#list").append('<input type="checkbox" id="element"> ' + text);
            $("#all").show();
            return false;
        }
    });

    $("#clear").click(function () {
        $("#list").empty();
    });
});