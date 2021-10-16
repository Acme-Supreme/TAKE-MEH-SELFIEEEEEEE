var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start() { 
    document.getElementById("textbox").innerHTML = "";
                  recognition.start(); }

recognition.onresult = function(event) { 
        console.log(event); 

var Content = event.results[0][0].transcript;
document.getElementById("textbox").innerHTML=Content;
console.log(Content);
if(Content=="take my selfie"){
console.log("taking selfie");
speak();
}
    
}//WE HAVE TO TAKE THE SELFIE

function speak(){
 var synth = window.speechSynthesis;

speak_data = "taking ur selfie in 5 secs";

var utterthis = new SpeechSynthesisUtterance(speak_data);

synth.speak(utterthis);
    Webcam.attach(camera);
    setTimeout(function(){ 
        take_snapshot();
    save();
    }, 5000);
}
Webcam.set({
    width: 350,
    height: 250,
    image_format:"png",
    png_quality: 90,
});
camera=document.getElementById("camera");
function take_snapshot(){
    Webcam.snap( function(data_uri){
        document.getElementById("result").innerHTML='<img id="hi_bye" src="'+data_uri+'">';   
    });
}
function save(){
    link=document.getElementById("LINK");
    img=document.getElementById("hi_bye").src;
    link.href=img;
    link.click();
    
}




