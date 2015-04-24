var random_note = 'l';
var total = 0;
var score_count = 0;
var note_array = ['2c', '2cs', '2d', '2ds', '2e', '2f', '2fs', '2g', '2gs', '2a', '2as', '2b' , '3c', '3cs', '3d', '3ds', '3e', '3f', '3fs', '3g', '3gs', '3a', '3as', '3b' ];


function generate_sound(indicator) {
    if (indicator == 0) {
    random_note = generator()
    }
    document.getElementById("sound").innerHTML =  "<embed src='piano_sounds/"+ random_note + ".mp3'  height='0px' autostart= 'true' loop='false' />";
    document.getElementById("image").innerHTML = ""
}

function generate_image() {
    random_note = generator()
    document.getElementById("image").innerHTML =  "<img src='img/"+ random_note + ".jpg' class='img-circle img-responsive note'/>";
}

function generator() {
   var randomnumber=Math.floor(Math.random()*24);
   randomnumber = randomnumber;
    random_note = note_array[randomnumber]
    return random_note
}

function user_input(variable) {
  if (variable == random_note) {
    score(1);
    document.getElementById("result").innerHTML =  "<span class='glyphicon glyphicon-ok large-glyph' aria-hidden='true'></span>";
  }
  else {
    document.getElementById("result").innerHTML =  "<span class='glyphicon glyphicon-remove large-glyph' aria-hidden='true'></span>";
    score(-1);
  }
  document.getElementById("sound").innerHTML =  "<embed src='piano_sounds/"+ variable + ".mp3'  height='0px' autostart= 'true' loop='false' />";
}


function score(increment) {
  total += 1;
  if (increment == 1){
    score_count +=1;
  }
  //0 input for score reset
  else if (increment == 0) {
    total = 0 ;
  }
  calculated_score = ((score_count/total)*100).toFixed(0);
  calculated_score_of_ten = ((score_count/total)*10).toFixed(0)
  if (calculated_score == 'NaN') { calculated_score = 0 ;}
  score_html_string = "<div class='gs-score gs-score--large score-" + calculated_score_of_ten + "'><div class='pie spinner'></div><div class='pie filler'></div><div class='mask'></div><div class='gs-score__mark'></div><div class='gs-score__inner'><div class='gs-score__table'><div class='gs-score__cell'>" + calculated_score + "</div></div></div></div>";
  console.log(calculated_score)
  document.getElementById("score_output").innerHTML = score_html_string;

}

