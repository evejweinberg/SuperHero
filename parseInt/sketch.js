var milesFlown = 0;

function setup() {
  createCanvas(500, 500)
  milesFlown = String(floor(random(100, 995000)));
  console.log(milesFlown)
  console.log(milesFlown.length)
}

function draw() {
  background(255)
  addCommas(milesFlown);
  console.log('addedcommas   ' + addCommas(milesFlown));
  var comma = ',';
  if (milesFlown.length >= 4) {
    milesFlown.length 
    for (var i = 0; i < milesFlown.length; i++) {
      var milesFlownwithComma = milesFlown[0] + comma + milesFlown[1] + milesFlown[2] + milesFlown[3] + milesFlown[4] + milesFlown[5];
    }
    console.log(milesFlownwithComma)
  } else {
    console.log("less")
  }
}


function addCommas(nStr)
{
	nStr += '';
	x = nStr.split('.');
	x1 = x[0];
	x2 = x.length > 1 ? '.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + ',' + '$2');
	}
	return x1 + x2;
}