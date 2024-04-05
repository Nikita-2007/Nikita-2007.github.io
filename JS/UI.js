//DroneTracking

class UI {
    constructor() {
		this.upload = 15;
		this.timer = 0;
		this.collect = 0;
    }


    draw(ctx, k) {
		this.upload += 2-(Math.round(Math.random()*3));
		this.timer += 5 + Math.round(Math.random()*5);
		this.collect += 5 + Math.round(Math.random()*3);
		
        ctx.fillStyle='Green';
        ctx.font = String(12*k)+"pt Arial";
        ctx.textAlign = 'start';
        ctx.beginPath();
        
        let m = 10*k;
        ctx.fillText("ColorASI: "+String(model.listObject[Math.round(Math.random()*(model.listObject.length-1))].target.x), m, 550*k);
        ctx.fillText("Target all: "+String(model.listObject.length), m, 570*k);
        ctx.fillText("Worked: True", m, 590*k);
        ctx.fillText("PlayerASMargin: " + String(Math.random()), m, 610*k);
        ctx.fillText("Size: ", m, 630*k);
        ctx.arc(50*k, 630*k,Math.round(Math.random()*6),0,Math.PI*2,false);
        ctx.fillText("Version alpha v.0.1.0.24", m, 650*k);
        ctx.fillText("Alert: "+String(model.listObject[0].pos.x*Math.random()), m, 670*k);
        ctx.fillText("ASIMD: "+String(model.listObject[0].pos.y*Math.random()), m, 690*k);
        ctx.fillText("Enject: "+String(model.listObject[Math.round(Math.random()*(model.listObject.length-1))].timer), m, 710*k);
        ctx.fillText("Upload: "+String(this.upload)+" in 9275", m, 730*k);
        ctx.fillText("Enable - True", m, 750*k);
        ctx.fillText("ColorEnsert: "+String(model.listObject[Math.round(Math.random()*(model.listObject.length-1))].color), m, 770*k);
        ctx.fillText("Type: "+String(model.listObject[Math.round(Math.random()*(model.listObject.length-1))].type), m, 790*k);
        ctx.fillText("PositionX: "+String(model.listObject[0].pos.x*Math.random()), m, 810*k);
        ctx.fillText("PositionY: "+String(model.listObject[0].pos.y*Math.random()), m, 830*k);
        ctx.fillText("Count Object: "+String(model.listObject.length), m, 850*k);
        
        ctx.textAlign = 'end';
        m = 1140*k;
        
		ctx.fillText("LessenX: "+String(model.listObject[0].pos.x*Math.random()), m, 650*k);
        ctx.fillText("LessenY: "+String(model.listObject[0].pos.y*Math.random()), m, 670*k);
        ctx.fillText("Target: Safe Jhin from jungle", m, 690*k);
        ctx.fillText("Danger: Kha'Zix", m, 710*k);
        ctx.fillText("Electro-magnit: "+String(model.listObject.length*2), m, 730*k);
        ctx.fillText("CollectSpeed: "+String(2+Math.random()), m, 750*k);
        ctx.fillText("Collect: "+String(this.collect), m, 770*k);
        ctx.fillText("UDP ID: "+String(model.listObject[0].pos.x*Math.random()), m, 790*k);
        ctx.fillText("ASD(ms): "+String(model.listObject[0].pos.y*Math.random()), m, 810*k);
        ctx.fillText("Uplimer: "+String(this.upload*13.5+this.timer), m, 830*k);
        ctx.fillText("Timer: "+String(this.timer), m, 850*k);
        ctx.fill();
    }
}
