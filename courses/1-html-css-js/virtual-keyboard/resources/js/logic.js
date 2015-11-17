var button = $("button");
button.each(function () {
    if ($(this).attr("name") != "space") {
        $(this).html($(this).attr("name"));
    }
});

var screen = $("#screen");
button.click(function () {
    var symbolToAdd = $(this).attr("name");
    if ($(this).attr("name") == "space") {
        symbolToAdd = " ";
    }
    screen.val(screen.val() + symbolToAdd);
});