$( document ).ready(function() {
    $( "#phoneImage" ).hover(
  function() {
    $( this ).animate({"top": "-=45px"}, "slow");
  }, function() {
    $( this ).animate( {"top":"+=45px"}, "slow");
  }
);
});
