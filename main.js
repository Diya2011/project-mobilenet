function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier=ml5.imageClassifier("MobileNet",modelloaded)
}
function draw(){
image(video,0,0,300,300)
classifier.classify(video,gotResult)
}
function modelloaded(){
  console.log("modelisloaded")
}
function gotResult(error,results){
  if (error) {
    console.log(error)
  } else {
    console.log(results)
    document.getElementById("object").innerHTML=results[0].label
    document.getElementById("accuracy").innerHTML=results[0].confidence.toFixed(3)
    var synth=window.speechSynthesis
    speak_data = 'Object detected is - '+results[0].label;
    var UtterThis=new SpeechSynthesisUtterance(speak_data)
    synth.speak(UtterThis)
  }
}


