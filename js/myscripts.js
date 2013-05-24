$(document).ready(function () {

    $("#all").hide();
    $("#clear").hide();

    $("#new").keypress(function (e) {
        if (e.keyCode == 13) {
            $(".alert").hide();
            var text = $("#new").val();
            $("#new").val("");
            $("#list").append("<hr />");
            $("#list").append('<div class="element"><input type="checkbox" class="checkbox" id=""> ' + text + '</input><button class="btn btn-mini btn-success remove" id=""><i class="icon-ok icon-white"></i> remove</button></div>');
            $("#all").show();
            return false;
        }
    });

    $("#all").click(function () {
        $(".checkbox").prop("checked", true);
        $("#clear").show();
        return false;
    });

    $("#clear").click(function () {
        //удалить divы, внутри которых есть отмеченные checkbox? (если удалять отмеченные checkbox, то текст и кнопка remove остаются)
        return false;
    });

    $(".remove").click(function () {
        //var a = $(this);
        //var div = a.parents(".element");
        //div.remove();
        //удалить родительский div со всем содержимым
        return false;
    });
});