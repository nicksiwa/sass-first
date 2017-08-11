$('#toggle').click(function() {
  $('#sidebar').toggleClass(' --show');
});

$('#heartLink').click(function() {
  $('#subMenu').toggle("up");
});

$('#moreInfo').click(function() {
  $('#hideInfo').toggle("up");
});
