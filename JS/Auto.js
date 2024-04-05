//DroneTracking

class Auto {
    constructor() {
        this.random = 0;
        this.timer = 0;
        this.birds = 0;
    }

    update() {
        this.timer += 1 + Math.random()*0.5;
        if (this.timer >= 15) {
            this.randomObject();
            this.timer = 0;
        }
        
    }

    randomObject() {
        let obj;
        this.random = Math.round(Math.random()*100);
        if (this.random < 50 && this.birds <= 20) {
            obj = new Bird();
            this.birds += 1;
        }
        else if (this.random < 70)
            obj = new Scout();
        else if (this.random < 85)
            obj = new Quadrocopter();
        else if (this.random < 95)
            obj = new Attacking();
        else
            obj = new Bomber();
        model.listObject.push(obj);
    }
}
