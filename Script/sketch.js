$(document).ready(function () {
    var $el = $('div'),
        text = $el.text(),
        speed = 1000; //ms

    $el.empty();

    var wordArray = text.split(' '),
        i = 0;

    INV = setInterval(function () {
        if (i >= wordArray.length - 1) {
            clearInterval(INV);
        }
        $el.append(wordArray[i] + ' ');
        i++;
    }, speed);
});

// function showWord(span){
//     span.appendTo($el).fadeIn(500, transitionElement);
// }
// fadeIn();