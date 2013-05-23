$(document).ready(function () {
    $("#new").keypress(function (e) {
        if (e.keyCode == 13) {
            var newElement = document.createElement("li");
            var text = $("#new").val();
            newElement.innerHTML = text;
            $("ul").append(newElement);
            return false;
        }
    });

    $("#clear").click(function () {
        $("ul").empty();
    });
});