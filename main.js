//https://teachablemachine.withgoogle.com/models/Cnf8gxHxK/

function setup(){

}

function draw(){

}

//modelo Ml5
console.log("Ml5",ml5.version)
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Cnf8gxHxK/model.json", modelLoaded)
function modelLoaded(){
    
}
Webcam.set({
    width: 350,
    height: 300,
    image_format:"png",
    png_quality: 90,
})

camera = document.getElementById("Camera");
Webcam.attach(camera)

function takesnapshot(){
    Webcam.snap(function(data_URI){
        document.getElementById("result").innerHTML='<img id = "capturada" src = "'+data_URI+'"/>'
    })
}