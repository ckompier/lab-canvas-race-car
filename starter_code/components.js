class Car {
    constructor(ctx) {
        

        this._ctx = ctx
        this._x = 200

        this.keys= {            //teclitas
            ARROW_RIGHT: 39,
            ARROW_LEFT: 37,
          }

    }

    drawCar() {

        let image = new Image()
        image.src = "images/car.png"
        this._ctx.drawImage(image, this._x, 780, 50, 100)
    }




    moveCar() {
        document.onkeydown = (e) => {
            switch(e.keyCode) {
                case this.keys.ARROW_RIGHT:
                    this._x += 40
                    break;

                case this.keys.ARROW_LEFT:
                    this._x -= 40
                    break    

            }
        }
    }
}


