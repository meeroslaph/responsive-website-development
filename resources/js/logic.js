var source = $("#numrow-template").html();
var numrow_template = Handlebars.compile(source);
var html = numrow_template(keys_data);
$(".numrow").html(html);

source = $("#first-row-template").html();
var first_row_template = Handlebars.compile(source);
html = first_row_template(keys_data);
$("div[name='first-row']").html(html);

source = $("#first-numpad-row-template").html();
var first_numpad_row_template = Handlebars.compile(source);
html = first_numpad_row_template(keys_data);
$("div[name='first-numpad-row']").html(html);

source = $("#second-row-template").html();
var second_row_template = Handlebars.compile(source);
html = second_row_template(keys_data);
$("div[name='second-row']").html(html);

source = $("#second-numpad-row-template").html();
var second_numpad_row_template = Handlebars.compile(source);
html = second_numpad_row_template(keys_data);
$("div[name='second-numpad-row']").html(html);

source = $("#third-row-template").html();
var third_row_template = Handlebars.compile(source);
html = third_row_template(keys_data);
$("div[name='third-row']").html(html);

source = $("#third-numpad-row-template").html();
var third_numpad_row_template = Handlebars.compile(source);
html = third_numpad_row_template(keys_data);
$("div[name='third-numpad-row']").html(html);

source = $("#fourth-row-template").html();
var fourth_row_template = Handlebars.compile(source);
html = fourth_row_template(keys_data);
$("div[name='fourth-row']").html(html);

source = $("#fourth-numpad-row-template").html();
var fourth_numpad_row_template = Handlebars.compile(source);
html = fourth_numpad_row_template(keys_data);
$("div[name='fourth-numpad-row']").html(html);

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
