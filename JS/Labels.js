//DroneTracking

class Labels {
    constructor() {
        this.arrLab = [];
    }

    update(pos, size) {
        this.arrLab.push({x: pos.x+(Math.random()*3)-size, y: pos.y+(Math.random()*3)-size});
    }

    draw(ctx, size) {
        for (let obj of this.arrLab) {
            ctx.beginPath();
            ctx.arc(obj.x,obj.y,1,0,Math.PI*2,false);
            ctx.fillStyle = 'darkred';
            ctx.fill();
            ctx.strokeStyle = 'darkred';
            ctx.stroke();
        }
    }
}