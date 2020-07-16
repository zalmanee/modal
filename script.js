// Popup effect with Magnific Popup
// http://dimsemenov.com/plugins/magnific-popup/

function openPopup(){
  $.magnificPopup.open({
    items: {
      src: '#popup',
    }, 
    mainClass: 'mfp-newspaper'
  });
  $("button").prop("disabled", false);
}

$("button").on("click", function(){
  setTimeout(openPopup, 00);
  $(this).prop("disabled", true);
});
