import { Tools } from "./Tools.js"

export class Grid{
    items = []
    gridImage = new Image()
    reversedImage = new Image()



    constructor() {
        
        for (let i = 0; i < 32; i++) {
            let x = 300 + 30 * i
            let h = Tools.getRandomNumber(240)
            let y = i % 2 ==0 ? 0 : 600 - h
            this.items.push({
                w: 40,
                h,
                x,
                y
            })
            
            
        }
    }
    
    
    draw() {
        this.gridImage.src = "Images/flappy-bird-pipe-png-7.jpg"
        this.reversedImage.src = "Images/flappy-bird-pipe-png-71.jpg"
        this.items.forEach(elm => {
            Tools.ctx.fillStyle = "black"
            Tools.ctx.fillRect(elm.x, elm.y, elm.w, elm.h)
            Tools.ctx.drawImage(this.gridImage, elm.x, elm.y == 0 ? 0 : Tools.ctx.drawImage(this.reversedImage, elm.x, elm.y, 40, elm.h), 40, elm.h )
            
        })

    }

    move() {
        this.items.forEach((elm, i) => {
            elm.x -=20
            if (elm.x < 0) {
                elm.x = 1000
                elm.h = 50 + Tools.getRandomNumber(240)
                elm.y = i % 2 == 0 ? 0 : 600 - elm.h
            }
        })




        this.draw()
    }
}