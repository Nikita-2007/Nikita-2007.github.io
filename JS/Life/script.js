/*I
*13.08.2021
*Life
*/ 

var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    btnPlay = document.getElementById("play"),
    btnClear = document.getElementById("clear"),
    btnRandom = document.getElementById("random"),
    speed = 100,
    size = 32,
    width,
    height,
    row,
    col,
    game = false,
    focus = false;

//Раазмеры окна
onResize();
window.addEventListener("resize", onResize);
function onResize(){
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    row = Math.ceil(width/size);
    col = Math.ceil(height/size);
}

//Пуск-Стоп
btnPlay.onclick = () => {
    focus = true;
    game = !game;
}

//Отчистка
btnClear.onclick = () => {
    focus = true;
    arr = arrNew();
    game = false;
}

//Рандом
btnRandom.onclick = () => {
    focus = true;
    buffer = arrCopy(arr);
    for(let i=1; i<row-1; i++){
        for(let j=1; j<col-1; j++){
            if (Math.random()>=0.61803)
                buffer[i][j] = true;
        };
    };
    arr = arrCopy(buffer);
}

//Отслежывание клика
onclick = (e) => {
    if (!focus){
        let x = Math.floor(e.clientX/size);
        let y = Math.floor(e.clientY/size);
        arr[x][y] = !arr[x][y];
    }
    focus = false;
}


//Цикл анимации
setInterval(() => {
    //Заливка фона
    ctx.fillStyle='black';
    ctx.fillRect(0, 0, width, height);
    //Сетка
    drawLines();
    //Отрисовка точек
    if (game) {
        update();
        btnPlay.innerHTML = "Stop"
    }
    else
        btnPlay.innerHTML = "Start"
    drawCell();
}, speed);

//Создаём массив клеток
arr = arrNew();
function arrNew(){
    let arr = [];
    for(let i=0; i<row; i++){
        arr[i] = [];
        for(let j=0; j<col; j++){
            arr[i][j] = false;
        };
    };
    return arr;
}

//Копирование массива
function arrCopy(arr){
    let buffer = [];
    for(let i=0; i<row; i++){
        buffer[i] = [];
        for(let j=0; j<col; j++){
            buffer[i][j] = arr[i][j];
        };
    };
    return buffer;
}

//Обнавление
function update(){
    buffer = arrCopy(arr);
    for(let i=1; i<row-1; i++){
        for(let j=1; j<col-1; j++){
            //Подсчёт соседий
            let count = arr[i-1][j-1]+arr[i-1][j]+arr[i-1][j+1]+arr[i][j-1]+arr[i][j+1]+arr[i+1][j-1]+arr[i+1][j]+arr[i+1][j+1];
            //Рождение
            if (count == 3)
                buffer[i][j] = true;
            //Смерть
            if (count <= 1 || count >= 4)
                buffer[i][j] = false;
            count = 0;
        };
    };
    arr = arrCopy(buffer);
}

//Отрисовка линий
function drawLines(){
    ctx.lineWidht = 0.25;
    ctx.strokeStyle="gray"
    //Гаризантальные линии
    ctx.beginPath();
    for(let i=0; i<height; i+=size){
        ctx.moveTo(0, i);
        ctx.lineTo(width, i);
    }
    ctx.stroke();
    ctx.closePath();

    //Вертикальные линии
    ctx.beginPath();
    for(let i=0; i<width; i+=size){
        ctx.moveTo(i, 0);
        ctx.lineTo(i, width);
    }
    ctx.stroke();
    ctx.closePath();
}

//Отрисовка кружков
function drawCell(){
    for(let i=0; i<row; i++){
        for(let j=0; j<col; j++){
            if (arr[i][j]) {
                ctx.fillStyle = "lime"
                ctx.beginPath();
                //ctx.arc(i*size+size/2, j*size+size/2, size/2-1, 0, 2*Math.PI);
                ctx.fillRect(i*size+5, j*size+5, size-10, size-10);
                ctx.fill();
                ctx.closePath();
            };
        };
    };
}