import { Tools } from "./Tools.js";

export class Ball {
    x = 100
    y = 300
    r = 20
    direction = "down"
    bird_image = new Image()


    draw() {
        Tools.ctx.beginPath()
        Tools.ctx.fillStyle = "orangered"
        Tools.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI)
        Tools.ctx.closePath()
        this.bird_image.src = 'Images/Bird.png'
        
        Tools.ctx.drawImage(this.bird_image, this.x - 46, this.y - 54, 100, 100)
        
    }

    move() {
        if (this.direction == "down") {
            this.y += 10
            if (this.y > 580) {
                this.y = 580
            }
        } else if(this.direction == "Up") {
            this.y -= 40
            this.direction = "down"
        }
        this.draw()
    }

    
}