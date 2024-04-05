//DroneTracking

var model, view, control;

let listClass = [
    'Fly/Bird',
    'Fly/Scout',
    'Fly/Attacking',
    'Fly/Quadrocopter',
    'Fly/Bomber',
    'Fly/Rocket',
    'Labels',
    'Auto',
    'UI',
    'Model',
    'View',
    'Control'
];

for (let name of listClass) {
    let script = document.createElement('script');
    script.src = 'JS/'+name+'.js';
    script.type = 'application/javascript';
    document.body.appendChild(script); 
}

window.onload = () => {
    model = new Model();
    view = new View();
    control = new Control();
}