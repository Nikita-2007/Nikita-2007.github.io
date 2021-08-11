var nt = "img/notepad_plus_plus.png", bat = "img/Bat.png"
var listProg = [
    ["Hello World!", "2018", "Моя самая первая программа", "img/game1.png", nt, bat],
    ["Hello World!", "2018", "Моя самая первая программа", "img/game1.png", nt, bat],
    ["Hello World!", "2018", "Моя самая первая программа", "img/game1.png", nt, bat],
    ["Hello World!", "2018", "Моя самая первая программа", "img/game1.png", nt, bat],
    ["Hello World!", "2018", "Моя самая первая программа", "img/game1.png", nt, bat],
    ["Hello World!", "2018", "Моя самая первая программа", "img/game1.png", nt, bat],
    ["Hello World!", "2018", "Моя самая первая программа", "img/game1.png", nt, bat],
    ["Hello World!", "2018", "Моя самая первая программа", "img/game1.png", nt, bat],
    ["Hello World!", "2018", "Моя самая первая программа", "img/game1.png", nt, bat],
    ["Hello World!", "2018", "Моя самая первая программа", "img/game1.png", nt, bat],
    ["Hello World!", "2018", "Моя самая первая программа", "img/game1.png", nt, bat],
];

var section = document.getElementById("primer");

for(let i of listProg) {
    let block = document.createElement('article');
    block.className = "program";
    section.appendChild(block);
    
    let bgimg = document.createElement('img');
    bgimg.className = "pr-bgimg";
    bgimg.src = i[3]
    block.appendChild(bgimg);

    let image = document.createElement('img');
    image.className = "pr-img";
    image.src = i[3]
    block.appendChild(image);

    let year = document.createElement('div');
    year.className = "pr-year";
    year.textContent = i[1]
    block.appendChild(year);

    let leng = document.createElement('img');
    leng.className = "pr-leng logo";
    leng.src = i[5]
    block.appendChild(leng);

    let text = document.createElement('div');
    text.className = "pr-text";
    text.textContent = i[2]
    block.appendChild(text);

    let name = document.createElement('div');
    name.className = "pr-name";
    name.textContent = i[0]
    block.appendChild(name);

    let tool = document.createElement('img');
    tool.className = "pr-tool logo";
    tool.src = i[4]
    block.appendChild(tool);
};