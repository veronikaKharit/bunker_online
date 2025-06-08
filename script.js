window.onload = function() {
    // Массив с именами файлов изображений из папки "fon"
    const images = [
      'fon/5ac84759ef872f8dd748fd4d774e43b5.jpg', // укажи имена файлов в папке fon
      'fon/38c3f5ffcdaef5bf8fa8183f2c81a125.jpg',
      'fon/84b3689c554917cabf22eb384e3ed19f.jpg',
      'fon/415ba31e22617651c20b961bb5b5799c.jpg',
      'fon/1616716190_40-p-apokalipsis-krasivo-49.jpg',
      'fon/MV5BNTgzMDIyNTI4M15BMl5BanBnXkFtZTgwMzk4MzMyMDI@._V1_.jpg'
    ];
  
    // Случайный выбор изображения
    const randomImage = images[Math.floor(Math.random() * images.length)];
    console.log(randomImage);
    
  
    // Устанавливаем выбранное изображение как фон для всех страниц
   // document.body.style.backgroundImage = `url(${randomImage})`;
   document.body.style.backgroundImage = `url(fon/MV5BNTgzMDIyNTI4M15BMl5BanBnXkFtZTgwMzk4MzMyMDI@._V1_.jpg)`;
    document.body.style.backgroundSize = 'cover'; // фоновое изображение будет растянуто на весь экран
    document.body.style.backgroundPosition = 'center';
  };



const gameContainer = document.getElementById('game-container');

const players = ['Игрок 1', 'Игрок 2', 'Игрок 3', 'Игрок 4', 'Игрок 5'];

// Вывести список игроков
function renderPlayers() {
  gameContainer.innerHTML = '';
  
  const ul = document.createElement('ul');
  players.forEach(player => {
    const li = document.createElement('li');
    li.textContent = player;
    ul.appendChild(li);
  });
  
  gameContainer.appendChild(ul);



}

renderPlayers();
