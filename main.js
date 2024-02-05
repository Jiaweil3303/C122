
var to_number;
var content;
var go = false;
const numbers = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine'
];
var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
function gone(){
    clear();
}

recognition.onresult = function(event) {

 console.log(event); 
to_number = content;
 content = event.results[0][0].transcript;
 console.log(content);
 document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
 if(content == "clear"){
    clear();
    document.getElementById("status").innerHTML = "cleared canvas";
 }
 //Num
 for(var i = 0; i<numbers.length; i++){
    if(content == numbers[i]){
        to_number = i;
        console.log(to_number);
        document.getElementById("status").innerHTML = to_number + " circles drawn"; 
    }
 }
    go = true;
    recognition.stop();
}

function setup() {
 canvas = createCanvas(900, 600);
}

function draw() {
if(go == true){
    go = false;
    for(var p = 0; p < to_number; p++){
        x = Math.floor(Math.random() * 600);
        y = Math.floor(Math.random() * 500);
        console.log("location of circle: " + (p + 1)+ " is at " + x + ", " + y);
        circle(x, y, 50);
    }

}
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}