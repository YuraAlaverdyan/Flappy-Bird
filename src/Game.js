import { Ball } from "./Ball.js"
import { Grid } from "./Grid.js"
import { Tools } from "./Tools.js"
export class Game{
    gndak = new Ball()
    grid = new Grid()
    interval = null
    


    constructor() {
        document.body.onkeydown = e => {
            if(e.code == "Space") {
                this.gndak.direction = "Up"
            }
        }
        
    }

    conflict() {
        let x1 = this.gndak.x
        let y1 = this.gndak.y
        this.grid.items.forEach(elm => {
            let x2 = elm.x
            let y2 = elm.y
            if (x1 >= x2 && x1 <= x2 + elm.w) {
                if (y1 >= y2 && y1 <= y2 + elm.h) {
                    this.over()
                    this.playAgain()
                    
                }
            }
        })
    }

    over() {
        clearInterval(this.interval)
        Tools.ctx.beginPath()
        Tools.ctx.clearRect(0, 0, 1200, 600)
        Tools.ctx.font = "40px Tahoma"
        Tools.ctx.fillStyle = "red"
        Tools.ctx.fillText("GAME OVER!", 500, 300)
        Tools.ctx.closePath()
        
    }

    playAgain() {
        let playAgainimg = new Image()
        playAgainimg.src = "/Images/tryagain.png"
        addEventListener('click', () => {location.reload()});
        playAgainimg.onload = () => {
            Tools.ctx.drawImage(playAgainimg,438,340, 350, 200)
        }
        
    }


    play(){
        
        this.interval = setInterval(() => {
            Tools.ctx.clearRect(0,0, 1200, 600)
            this.gndak.move()
            this.grid.move()
            this.conflict()
        },80)
        console.log("game started...")
    }
}