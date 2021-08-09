var listProg = [
    ["Hello World!", "2018", "img/game1.png", "Моя самая первая программ"],
    ["re", "2018", "img/game1.png", "e"],
    ["jz", "2018", "img/game1.png", "g"],
    ["df", "2018", "img/game1.png", "q"],
];

var programs = document.getElementById("programs");

var toAdd = document.createDocumentFragment();

for(var i in listProg) {
    var block = document.createElement('div');
    block.id = "myid"
    block.className = "program"
    block.textContent = i[0];
    toAdd.appendChild(block);
};

programs.appendChild(toAdd);