$(document).ready(function () {

    $("#all").hide();
    $("#clear").hide();

    $("#new").keypress(function (e) {
        if (e.keyCode == 13) {
            $(".alert").hide();
            var text = $("#new").val();
            $("#new").val("");
            $("#list").append("<hr />");
            $("#list").append('<input type="checkbox" class="checkbox" id=""> ' + text + '<button class="btn btn-mini btn-success remove" id=""><i class="icon-ok icon-white"></i> remove</button>');
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
        if ($('#mycheckbox').is(':checked')) {
            
        }
    });
});