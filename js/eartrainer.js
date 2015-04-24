var random_note = 'l';
var total = 0;
var score_count = 0;
var note_array = ['el', 'fl', 'fsl', 'gl', 'gsl', 'al', 'asl', 'bl', 'cl', 'csl', 'dl', 'dsl', 'e', 'f', 'fs', 'g', 'gs', 'a', 'as', 'b'];


function generate_sound() {
	var randomnumber=Math.floor(Math.random()*20);
	 randomnumber = randomnumber;
      random_note = note_array[randomnumber]
      console.log(random_note)
    document.getElementById("demo").innerHTML =  "<embed src='music/"+ random_note + ".mp3'  height='0px' autostart= 'true' loop='false' />";
}


function user_input(variable) {
	if (variable == random_note) {
    score(1);
    document.getElementById("result").innerHTML =  "correct";
	}
	else {
		document.getElementById("result").innerHTML =  "wrong";
		score(-1);
	}
	document.getElementById("demo").innerHTML =  "<embed src='music/"+ variable + ".mp3'  height='0px' autostart= 'true' loop='false' />";
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
	document.getElementById("score_output").innerHTML = String(score_count/total);

}
