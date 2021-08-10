var nt = "img/notepad_plus_plus.png", bat = "img/Bat.png"
var listProg = [
    ["Hello World!", "2018", "Моя самая первая программа", "img/game1.png", nt, bat],
    ["Hello World!", "2018", "Моя самая первая программа", "img/game1.png", nt, bat],
];

var section = document.getElementById("programs");

for(let i of listProg) {
    console.log(i);
    let block = document.createElement('article');
    block.className = "program";
    let img = document.createElement('img');
    img.className = "program-img";
    img.src = i[4];
    block.appendChild(img);

    block.textContent = i[1];
    section.appendChild(block);
};