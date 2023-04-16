var canvas= document.getElementById("UwU")
var dosde= canvas.getContext("2d")
var tamañoW= 80
var tamañoH= 80
var numerorandom= Math.floor(Math.random()*5)
var imagenlist=["mars.jpg","https://mars.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044630080503568E01_DXXX.jpg","https://mars.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044630180503578E01_DXXX.jpg","https://mars.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044630700503630E02_DXXX.jpg","https://mars.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631110305208E01_DXXX.jpg"]
var imagen=imagenlist[numerorandom]
var robot= "rover.png"
var posicionX= 10
var posicionY= 10
function jena(){
objetofondo= new Image()
objetofondo.onload=useobject
objetofondo.src=imagen

objetorobot= new Image()
objetorobot.onload=useobjectrobot
objetorobot.src=robot

}
function useobject(){
    dosde.drawImage(objetofondo,0,0,canvas.width,canvas.height)
}
function useobjectrobot(){
    dosde.drawImage(objetorobot,posicionX,posicionY,tamañoW,tamañoH)
}

window.addEventListener("keydown", presionar)
function presionar(s){
    var tecla=s.keyCode
    console.log(tecla);
    if (tecla==37||tecla===65){
      izquierda()  
      console.log("izquierda")
    }
    if (tecla==38||tecla===87){
        arriba()  
        console.log("arriba")
      }
      if (tecla==39||tecla===68){
        derecha()  
        console.log("derecha")
      }
      if (tecla==40||tecla===83){
        abajo()  
        console.log("abajo")
      }
}
function izquierda(){
  if (posicionX>10){
posicionX=posicionX-15
useobject()
useobjectrobot()
  }
else{
 numerorandom= Math.floor(Math.random()*5)
imagen=imagenlist[numerorandom]
posicionX=320
useobject()
useobjectrobot()
console.log(numerorandom)
}
}
function arriba(){
  if (posicionY>10){
    posicionY=posicionY-15
    useobject()
    useobjectrobot()
      }
    else{
     numerorandom= Math.floor(Math.random()*5)
    imagen=imagenlist[numerorandom]
    posicionY=120
    useobject()
    useobjectrobot()
    console.log(numerorandom)
    }
}
function derecha(){
  if (posicionX<320){
    posicionX=posicionX+15
    useobject()
    useobjectrobot()
      }
    else{
     numerorandom= Math.floor(Math.random()*5)
    imagen=imagenlist[numerorandom]
    posicionX=10
    useobject()
    useobjectrobot()
    console.log(numerorandom)
    }
}
function abajo(){
  if (posicionY<120){
    posicionY=posicionY+15
    useobject()
    useobjectrobot()
      }
    else{
     numerorandom= Math.floor(Math.random()*5)
    imagen=imagenlist[numerorandom]
    posicionY=10
    useobject()
    useobjectrobot()
    console.log(numerorandom)
    }
}