//DroneTracking

class Model {
    constructor() {
        this.init();
        this.listObject = [];
        this.auto = new Auto();
        this.autoOn = true;
        this.imageDroneArr = ['Images/drone1.png', 'Images/drone2.png', 'Images/drone3.png', 'Images/drone4.jpg', 'Images/drone5.png']
    }

    init() {
        
    }

	update() {
        for (let obj of this.listObject)
            obj.update();
        if (this.autoOn == true)
            this.auto.update();
	}

    step(pos, target, speed) {
        let angle = Math.atan2(pos.y - target.y, pos.x - target.x) - Math.PI;
        pos.x += Math.round(speed/2 * Math.cos(angle));
        pos.y += Math.round(speed/2 * Math.sin(angle));

        return pos;
    }

    inRadar(pos) {
		let k = view.k;
        let t = false;
            if (pos.y <= 1.17 * pos.x + 185*k && pos.y <= -1.15*pos.x+1486.52*k)
                t = true;
            else
                t = false;
        return t;
    }

    rndSpawn(n) {
        let temp =  {
            x: Math.round(Math.random() * view.size.width),
            y: Math.round(Math.random() * view.size.height)
        };
        let pos;
        if (Math.random() >= 0.5)
            pos = {
                x: temp.x,
                y: 0
            }; 
        else {
            if (Math.random() >= 0.5)
                pos = {
                    x: 0,
                    y: temp.y/2
                };
            else
                pos = {
                    x: view.size.width,
                    y: temp.y/2
                };
        }
        view.image.src = this.imageDroneArr[n];
        return pos;
    }


    rndPos(pos) {
        let t = {
            x: pos.x + Math.round(Math.random() * 200-100),
            y: pos.y + Math.round(Math.random() * 100)
        };
        return t;
    }

    newRocket(tar) {
        let obj = new Rocket(tar);
        this.listObject.push(obj);
    }

    delta(pos, target) {
        return Math.sqrt(Math.pow(pos.x - target.x, 2) + Math.pow(pos.y - target.y, 2)); 
    }
}
