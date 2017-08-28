$(document).on('click', '.accordion', function () {
  $(this).next('.panel').toggle( "slow", function(){
  });
});
