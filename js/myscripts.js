$(document).ready(function () {

    $("#new").keypress(function (e) {
        if (e.keyCode == 13) {
            $(".alert").hide();
            var newLi = document.createElement("li");
            var text = $("#new").val();
            newLi.innerHTML = text;
            $("ul").append(newLi);
//            if ($("clear").length > 0) {
//                $("#buttonsGroup").append("<button class=\"btn\" id=\"clear\">Clear N completed items</button>")
//            }
            return false;
        }
    });

    $("#clear").click(function () {
        $("ul").empty();
    });
});