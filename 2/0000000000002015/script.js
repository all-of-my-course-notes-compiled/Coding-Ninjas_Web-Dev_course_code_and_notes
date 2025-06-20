// $('p').css('color', "red');
// $('p').css('fontSize', '30px');

$("p").css({
  fontSize: "30px",
  color: "red",
});

$("div").css({
  width: "100px",
  height: "100px",
  backgroundColor: "cyan",
});

// $('div').click(function(){
// alert("Div Clicked");
// });

$("div").on("click", function () {
  var elenent = $(this);
  elenent.width(element.width() + 10 + "px");
  //alert("Div Clicked");
});

$("a").on("click", function (event) {
  event.preventDefault();
  alert("Anchor tag Clicked");
});
