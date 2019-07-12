window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    Game.init("canvas");
  };
};

var Game = {
  title: "Island Racer",
  author: "Carlos",
  version: "1.0",
  canvas: undefined,
  ctx: undefined,
  winW: undefined, //tamaño anchura de la ventana
  winH: undefined,
  // tamaño altura de la ventana 
  fps: 60,
  obstacles: [], // La array contenedora de los obstaculos
  framesCounter: 0, //contador de los fps que transcurren 
  //!!atento para ver bien donde va (funcion de intervalo)
  car:undefined,


  init: function(id) {  
    this.canvas = document.getElementById(id) //localizacion del DOM
    this.ctx = this.canvas.getContext("2d")  // configuracion espacial
    this.canvas.width = window.innerWidth *.33 
    this.canvas.height = window.innerHeight * .98
    this.drawFilledSquares() // importante inicializar el metodo
    this.asfalto()
    this.lineasblancas() 
    this.start()
    this.car = new Car(this.ctx)
  },

  start: function () { //funcion inicializadora (Intervalo)


     //this.restart() resetea todo al estado inical 
    
     this.interval = setInterval(() => { //Arrow function 

     this.clear()  
     this.pintarTuto()
     this.moverTuto()
        }, 1000/this.fps)
    }, 
  

  // setDimensions: function() {  //otorgo las dimensiones deñ canvas
  //   this.windW = window.innerWidth
  //   this.winH = window.innerHeight
  //   this.canvasDOMobj.setAttribute("width", this.winW)
  //   this.canvasDOMobj.setAttribute("height", this.winH)
  // }

  // drawFilledSquares: function() {
  //   this.ctx.fillStyle = "green"

  // }


drawFilledSquares: function() {

this.ctx.fillStyle = "green" 
this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)

},

asfalto: function() {
  this.ctx.fillStyle = "grey"
  this.ctx.fillRect(30, 0, this.canvas.width -60, this.canvas.height)

},

lineasblancas: function () {
  this.ctx.linewidth = "30",
  this.ctx.strokeStyle = "white"
  this.ctx.setLineDash = ([30, 40]), 
  this.ctx.beginPath(),
  this.ctx.moveTo (this.canvas.width / 2, this.canvas.height)
  this.ctx.lineTo(this.canvas.width / 2, -this.canvas.height)
  this.ctx.stroke()
},

  pintarTuto: function () {
  this.car.drawCar()
},

moverTuto: function () {
  this.car.moveCar()
},

clear: function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    }
}