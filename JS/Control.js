//DroneTracking

class Control {
    constructor() {
        setInterval(() => this.update(), 100);
    }


    update() {
        model.update();
        view.draw();
    }

    newObject(t) {
        let obj;
        if (t == 'scout')
            obj = new Scout();
        else if (t == 'attacking')
            obj = new Attacking();
        else if (t == 'bird')
            obj = new Bird();
        else if (t == 'quadrocopter')
            obj = new Quadrocopter();
        else if (t == 'bomber')
            obj = new Bomber();
        model.listObject.push(obj);
    }
}