var nt = "img/notepad_plus_plus.png", bat = "img/Bat.png", cpp = "img/C++.png", vs = "img/visual-studio.png",
js = "img/Javascript-shield.svg", java = "img/java.png", as = "img/AndroidStodio.png",
csh = "img/notepad_plus_plus.png", py = "img/python.png", qt = "img/Qt.png", pas = "img/pascal.jpg";
var listProg = [
    ["Hello World!", "2018", "Моя самая первая программа", "img/game1.png", nt, bat],
    ["Hello World! 2", "2018", "Тот же самое но подругому", "img/game2.png", nt, bat],
    ["Кам-нож-бум", "2018", "Первая моя игра", "img/game3.png", nt, bat],
    ["Пароль", "2018", "Нужно ввести верный пароль", "img/game4.png", nt, bat],
    ["Сартировка пузырьком", "2019", "Моя первая сортировка", "img/game5.png", pas, pas],
    ["Угадай число", "2018", "Больше-меньше", "img/game6.png", nt, bat],
    ["Анимация", "2018", "Спрайт", "img/game7.png", nt, bat],
    ["Таблица умножения", "2018", "Без коментариев", "img/game8.png", cpp, vs],
    ["Угадай число на С++", "2018", "Больше-меньше", "img/game9.png", cpp, vs],
    ["Змейка", "2019", "Собирай яблоки что бы выжыть", "img/game10.png", nt, js],
    ["Тетрис", "2019", "Обычный класический тетрис", "img/game11.png", nt, java],
    ["SpaceZombie", "2019", "Моя  первая игра на телефон", "img/game12.jpg", as, java],
    ["Кам-нож-бум мобайл", "2019", "Камень ножницы бумага на телефон", "img/game13.jpg", as, java],
    ["Osu! на минималках", "2020", "Жалкая породия осу", "img/game14.jpg", py, vs],
    ["Froctal", "2020", "Бесконечные рисункии", "img/game15.jpg", py, vs],
    ["Аквариум", "2020", "Сдесь плавают рыбки", "img/game16.jpg", py, vs],
    ["Танчики", "2020", "Война танков", "img/game17.jpg", py, vs],
    ["WebInfo", "2020", "Помогает выполнять различные операции", "img/game18.jpg", py, qt],
];

var section = document.getElementById("programs");

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

    let lang = document.createElement('img');
    lang.className = "pr-lang logo";
    lang.src = i[5]
    block.appendChild(lang);

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