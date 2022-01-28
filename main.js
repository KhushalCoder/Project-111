var prediction = ""


Webcam.set({
    width : 350,
    height : 300,
    image_format : 'png',
    png_quality : 90
})
 
camera = document.getElementById("camera")
Webcam.attach('#camera')

function snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id = "image" src = "' + data_uri + '">'
    })
}

console.log("ml5 version:", ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/ZdGiHCqQI/model.json", modelLoaded)
function modelLoaded() {
    console.log("model is loaded");
}
 
function speak() {
    synth = window.speechSynthesis
    speakdata = "the first prediction is" + prediction_1;
    utterthis = new SpeechSynthesisUtterance(speakdata1 + speakdata2)
    synth.speak(utterthis)
}