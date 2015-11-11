function changepage() {
  if ($('#page_1').is(':visible')) {
    // $('#page_1').replaceWith($('#page_2'));
    $('#page_2').show();
    // $('#page_2').add();
    $('#page_1').hide();
    // $( "#page_1" ).remove();
    console.log('Hid page 1')
  } else if ($('#page_2').is(':visible')) {

    $('#page_3').show();
    // $('#page_3').add();
    $('#page_2').hide();
    // $( "#page_2" ).remove();
    // $('#page_2').replaceWith($('#page_3'));
    console.log('Hid page 2')
  } else if ($('#page_3').is(':visible')) {

    $('#page_4').show();
    $('#page_3').hide();

    console.log('Hid page 3')
  } else if ($('#page_4').is(':visible')) {
    // $('#page_2').replaceWith($('#page_3'));
    $('#page_1').show();

    $('#page_4').hide();
    // $( "#page_3" ).remove();
    // $('#page_1').add();
    console.log('Hid page 4')
  }

}





//why can't I juse jQuery here?
// if (playingpage3 === true){
//       $('video')[0].loop();
// }