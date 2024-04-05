//DroneTracking

class Bomber {
    constructor() {
        this.type = "bomber";
        this.color = "red";
        this.speed = 5;
        this.size = 2;
        this.timerSignal = 0;
        this.detectionTime = 10 + Math.random()*10;
        this.discovered = false;
        this.pos = model.rndSpawn(2);
        this.target = model.rndPos(this.pos);
        this.label = new Labels;
    }

    update() {
        this.pos = model.step(this.pos, this.target, this.speed)
        if (model.delta(this.pos, this.target) <= this.speed) {
            this.target = model.rndPos(this.pos);
        }
        this.timerSignal += 1;
        if (this.timerSignal >= 30)
            this.timerSignal = 0;
        if (this.detectionTime <= 0 && !this.discovered) {
            this.discovered = true;
            model.newRocket(this)
        }
        if (model.inRadar(this.pos))
            this.detectionTime -= 1;
        if (model.inRadar(this.pos) && this.discovered)
            this.label.update(this.pos, this.size/2);
    }

    drawRadar(ctx) {
        this.label.draw(ctx, this.size);
        ctx.beginPath();
        ctx.arc(this.pos.x-this.size/2,this.pos.y-this.size/2,this.size,0,Math.PI*2,false);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.strokeStyle = this.color;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(this.pos.x-this.size/2,this.pos.y-this.size/2,this.timerSignal*5,0,Math.PI*2,false);
        ctx.strokeStyle = "rgba(200,200,200,"+(30-this.timerSignal)/30+")";
        ctx.stroke();

        if (this.discovered && this.detectionTime >= -10) {
            ctx.beginPath();
            ctx.rect(this.pos.x-15, this.pos.y-17, 30, 34);
            ctx.strokeStyle = "red";
            ctx.stroke();
        }
    }

    drawCamera(ctx2, k) {
		ctx2.beginPath();
        ctx2.fillStyle = "black";
        ctx2.strokeStyle = "black";
		ctx2.arc(this.pos.x*0.6,(400-this.pos.y)/2,1*this.pos.y/70,0,Math.PI*2,false);
        ctx2.fill();
		ctx2.stroke();
    }
}
