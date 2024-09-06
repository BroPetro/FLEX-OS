let zIndex = 1;

function openWindow(id) {
  const window = document.getElementById(id);
  window.style.display = 'flex';
  window.style.zIndex = ++zIndex;
}

function closeWindow(id) {
  const window = document.getElementById(id);
  window.style.display = 'none';
}

function makeDraggable(el) {
  const header = el.querySelector('.window-header');
  header.addEventListener('mousedown', (e) => {
    const rect = el.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;

    function onMouseMove(e) {
      el.style.left = `${e.clientX - offsetX}px`;
      el.style.top = `${e.clientY - offsetY}px`;
      el.style.zIndex = ++zIndex;
    }

    function onMouseUp() {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
}

document.querySelectorAll('.window').forEach(makeDraggable);

document.querySelectorAll('.desktop-icon').forEach(icon => {
  icon.addEventListener('mousedown', (e) => {
    let offsetX = e.clientX - icon.getBoundingClientRect().left;
    let offsetY = e.clientY - icon.getBoundingClientRect().top;

    function onMouseMove(e) {
      icon.style.position = 'absolute';
      icon.style.left = `${e.clientX - offsetX}px`;
      icon.style.top = `${e.clientY - offsetY}px`;
      icon.style.zIndex = ++zIndex;
    }

    function onMouseUp() {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
});

// Calculator functions
let calcExpression = '';

function calcInput(value) {
  calcExpression += value;
  document.getElementById('calc-display').value = calcExpression;
}

function calcCalculate() {
  try {
    calcExpression = eval(calcExpression).toString();
    document.getElementById('calc-display').value = calcExpression;
  } catch {
    calcExpression = '';
    document.getElementById('calc-display').value = 'Error';
  }
}

function calcClear() {
  calcExpression = '';
  document.getElementById('calc-display').value = calcExpression;
}

// Settings functions
function changeBackgroundColor(color) {
  document.body.style.backgroundColor = color;
}

function changeBackgroundImage(imageUrl) {
  document.body.style.backgroundImage = `url(${imageUrl})`;
}

function resetBackground() {
  document.body.style.backgroundColor = '';
  document.body.style.backgroundImage = '';
}

// Browser functions
document.getElementById('browserUrl').addEventListener('change', (event) => {
  const url = event.target.value;
  document.getElementById('browserIframe').src = url.startsWith('http') ? url : `https://${url}`;
});

// Save Notes
function saveNotes() {
  const notes = document.getElementById('notesArea').value;
  localStorage.setItem('savedNotes', notes);
}

function loadNotes() {
  const savedNotes = localStorage.getItem('savedNotes');
  if (savedNotes) {
    document.getElementById('notesArea').value = savedNotes;
  }
}

// Load notes on startup
window.onload = loadNotes;

// Context Menu functions
document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
  const contextMenu = document.getElementById('contextMenu');
  contextMenu.style.top = `${e.clientY}px`;
  contextMenu.style.left = `${e.clientX}px`;
  contextMenu.style.display = 'block';
  zIndex++;
  contextMenu.style.zIndex = zIndex;
});

document.addEventListener('click', function (e) {
  const contextMenu = document.getElementById('contextMenu');
  if (e.target.closest('#contextMenu') === null) {
    contextMenu.style.display = 'none';
  }
});

function createNewFile() {
  const file = document.createElement('div');
  file.className = 'desktop-icon';
  file.innerHTML = '<span>New File</span><button onclick="deleteIcon(this)">X</button>';
  document.getElementById('desktop-icons').appendChild(file);
  makeDraggable(file);
}

function createNewFolder() {
  const folder = document.createElement('div');
  folder.className = 'desktop-icon';
  folder.innerHTML = '<span>New Folder</span><button onclick="deleteIcon(this)">X</button>';
  document.getElementById('desktop-icons').appendChild(folder);
  makeDraggable(folder);
}

function refreshDesktop() {
  alert('Desktop refreshed!');
}

function changeBackground() {
  alert('Change background option selected!');
}

function deleteIcon(button) {
  const icon = button.parentElement;
  icon.parentElement.removeChild(icon);
}
// JavaScript to handle window management
let openWindows = [];

function openWindow(windowId) {
  const windowElement = document.getElementById(windowId);
  windowElement.style.display = 'block';
  windowElement.classList.add('fade-in');
  openWindows.push(windowId);
}

function closeWindow(windowId) {
  const windowElement = document.getElementById(windowId);
  windowElement.classList.add('fade-out');
  setTimeout(() => {
    windowElement.style.display = 'none';
    windowElement.classList.remove('fade-in', 'fade-out');
    openWindows = openWindows.filter(id => id !== windowId);
  }, 300);
}

function createNewFile() {
  alert('New file created!');
}

function createNewFolder() {
  alert('New folder created!');
}

function refreshDesktop() {
  alert('Desktop refreshed!');
}

function changeBackground() {
  document.body.style.backgroundImage = "url('systemFILEOS/PIC2.jpg')";
}

function changeBackgroundColor(color) {
  document.body.style.backgroundColor = color;
}

function changeBackgroundImage(image) {
  document.body.style.backgroundImage = `url(${image})`;
}

function resetBackground() {
  document.body.style.backgroundColor = '';
  document.body.style.backgroundImage = "url('https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png')";
}

function calcInput(value) {
  document.getElementById('calc-display').value += value;
}

function calcClear() {
  document.getElementById('calc-display').value = '';
}

function calcCalculate() {
  try {
    document.getElementById('calc-display').value = eval(document.getElementById('calc-display').value);
  } catch (e) {
    document.getElementById('calc-display').value = 'Error';
  }
}

function saveNotes() {
  const notes = document.getElementById('notesArea').value;
  localStorage.setItem('notes', notes);
  alert('Notes saved!');
}

function fetchWeather() {
  alert('Weather information fetched!');
}

// Function to show context menu
document.addEventListener('contextmenu', function (event) {
  event.preventDefault();
  const contextMenu = document.getElementById('contextMenu');
  contextMenu.style.top = `${event.clientY}px`;
  contextMenu.style.left = `${event.clientX}px`;
  contextMenu.style.display = 'block';
});

// Function to hide context menu
document.addEventListener('click', function () {
  document.getElementById('contextMenu').style.display = 'none';
});

// Function to make window draggable
document.querySelectorAll('.draggable').forEach(function (header) {
  header.addEventListener('mousedown', function (e) {
    const windowElement = header.parentElement;
    let offsetX = e.clientX - windowElement.getBoundingClientRect().left;
    let offsetY = e.clientY - windowElement.getBoundingClientRect().top;

    function onMouseMove(e) {
      windowElement.style.left = `${e.clientX - offsetX}px`;
      windowElement.style.top = `${e.clientY - offsetY}px`;
    }

    document.addEventListener('mousemove', onMouseMove);

    header.addEventListener('mouseup', function () {
      document.removeEventListener('mousemove', onMouseMove);
    });
  });
});
function openWindow(id) {
  const windows = document.querySelectorAll('.window');
  windows.forEach(win => win.style.display = 'none');
  document.getElementById(id).style.display = 'block';
}

function closeWindow(id) {
  document.getElementById(id).style.display = 'none';
}

function createNewFile() {
  alert('Create New File');
}

function createNewFolder() {
  alert('Create New Folder');
}

function refreshDesktop() {
  alert('Desktop Refreshed');
}

function changeBackground() {
  document.body.style.backgroundImage = 'url("path_to_new_image.jpg")'; // Replace with a valid image URL
}

function changeBackgroundColor(color) {
  document.body.style.backgroundColor = color;
}

function changeBackgroundImage(url) {
  if (url) {
      document.body.style.backgroundImage = `url(${url})`;
  }
}

function resetBackground() {
  document.body.style.backgroundImage = 'none';
  document.body.style.backgroundColor = '#fff';
}

function calcInput(value) {
  document.getElementById('calc-display').value += value;
}

function calcClear() {
  document.getElementById('calc-display').value = '';
}

function calcCalculate() {
  try {
      document.getElementById('calc-display').value = eval(document.getElementById('calc-display').value);
  } catch (e) {
      document.getElementById('calc-display').value = 'Error';
  }
}

function saveNotes() {
  const notes = document.getElementById('notesArea').value;
  alert('Notes saved: ' + notes);
}

function saveText() {
  const text = document.getElementById('textEditorArea').value;
  alert('Text saved: ' + text);
}

let isPlaying = false;
let audio = new Audio('systemFILEOS/sound3.mp3'); // Заміни 'your-audio-file.mp3' на шлях до аудіофайлу
let playPauseBtn = document.getElementById('play-pause-btn');
let progressBar = document.getElementById('progress');

audio.addEventListener('timeupdate', updateProgress);
audio.addEventListener('ended', () => {
    isPlaying = false;
    playPauseBtn.innerHTML = '&#9654;'; // Показуємо кнопку "Play" після завершення треку
});

function playPause() {
    if (isPlaying) {
        audio.pause();
        playPauseBtn.innerHTML = '&#9654;'; // Змінюємо іконку на "Play"
    } else {
        audio.play();
        playPauseBtn.innerHTML = '&#10074;&#10074;'; // Змінюємо іконку на "Pause"
    }
    isPlaying = !isPlaying;
}

function playPrevious() {
    // Логіка для відтворення попереднього треку (можна додати)
}

function playNext() {
    // Логіка для відтворення наступного треку (можна додати)
}

function setVolume(value) {
    audio.volume = value / 100;
}

function updateProgress() {
    progressBar.value = (audio.currentTime / audio.duration) * 100;
}

progressBar.addEventListener('input', function() {
    audio.currentTime = (this.value / 100) * audio.duration;
});
function updateClock() {
  const clockElement = document.getElementById('clock');
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000); // Оновлюємо час кожну секунду
updateClock(); // Викликаємо функцію одразу, щоб не було затримки

let notifications = [];

function addNotification(message) {
    notifications.push(message);
    renderNotifications();
}

function renderNotifications() {
    const notificationList = document.getElementById('notification-list');
    notificationList.innerHTML = ''; // Очищуємо список перед повторним рендером
    notifications.forEach((notification, index) => {
        let li = document.createElement('li');
        li.textContent = notification;

        // Додаємо кнопку для видалення окремого повідомлення
        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'X';
        deleteBtn.onclick = function() {
            removeNotification(index);
        };
        li.appendChild(deleteBtn);

        notificationList.appendChild(li);
    });
}

function removeNotification(index) {
    notifications.splice(index, 1); // Видаляємо повідомлення з масиву
    renderNotifications(); // Оновлюємо відображення
}

function clearNotifications() {
    notifications = []; // Очищуємо масив повідомлень
    renderNotifications(); // Оновлюємо відображення
}

function toggleNotificationWindow() {
    const notificationWindow = document.getElementById('notification-window');
    if (notificationWindow.style.display === 'none' || notificationWindow.style.display === '') {
        notificationWindow.style.display = 'block';
    } else {
        notificationWindow.style.display = 'none';
    }
}

// Приклад виклику функції для додавання повідомлень
addNotification('New email received');
addNotification('File download completed');
addNotification('Meeting in 30 minutes');

// Закриття вікна сповіщень при натисканні поза ним
document.addEventListener('click', function(event) {
    const notificationWindow = document.getElementById('notification-window');
    const notificationIcon = document.getElementById('notification-icon');
    if (!notificationWindow.contains(event.target) && !notificationIcon.contains(event.target)) {
        notificationWindow.style.display = 'none';
    }
});
// Показати/сховати вікно чат-бота
function toggleChatbotWindow() {
  const chatbotWindow = document.getElementById('chatbot-window');
  if (chatbotWindow.style.display === 'none' || chatbotWindow.style.display === '') {
      chatbotWindow.style.display = 'block';
  } else {
      chatbotWindow.style.display = 'none';
  }
}

// Обробка введення повідомлень в чат-бот
function handleChatbotInput(event) {
  if (event.key === 'Enter') {
      const input = document.getElementById('chatbot-input');
      const message = input.value.trim();
      if (message) {
          addChatbotMessage('You: ' + message);
          input.value = '';
          generateChatbotResponse(message);
      }
  }
}

// Додавання повідомлень в чат-бот
function addChatbotMessage(message) {
  const messagesContainer = document.getElementById('chatbot-messages');
  const messageElement = document.createElement('div');
  messageElement.textContent = message;
  messagesContainer.appendChild(messageElement);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}
// Перевірка наявності підтримки Web Speech API
if ('webkitSpeechRecognition' in window) {
  const recognition = new webkitSpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.lang = 'uk-UA';  // Вибір мови розпізнавання (українська)

  // Функція активації голосового розпізнавання
  function startVoiceRecognition() {
      recognition.start();
      addChatbotMessage('Bot: Голосовий помічник активований. Говоріть...');
  }

  // Обробка результатів розпізнавання
  recognition.onresult = function(event) {
      const transcript = event.results[0][0].transcript;
      addChatbotMessage('You: ' + transcript);
      generateChatbotResponse(transcript);
  };

  recognition.onerror = function(event) {
      addChatbotMessage('Bot: Виникла помилка при розпізнаванні голосу.');
  };

  recognition.onend = function() {
      addChatbotMessage('Bot: Голосовий помічник завершив роботу.');
  };
} else {
  addChatbotMessage('Bot: Вибачте, ваш браузер не підтримує голосове розпізнавання.');
}

// Додавання кнопки активації голосового помічника до інтерфейсу
voiceButton.textContent = '🎤';
voiceButton.style.position = 'fixed';
voiceButton.style.bottom = '10px';
voiceButton.style.right = '10px';
voiceButton.style.fontSize = '20px';
voiceButton.style.padding = '10px';
voiceButton.style.backgroundColor = '#0078D7';
voiceButton.style.color = 'white';
voiceButton.style.border = 'none';
voiceButton.style.borderRadius = '50%';
voiceButton.style.cursor = 'pointer';
voiceButton.onclick = startVoiceRecognition;
document.body.appendChild(voiceButton);

// Генерація відповіді чат-бота
function generateChatbotResponse(message) {
  let response = '';
  if (message.toLowerCase().includes('привіт')) {
      response = 'Привіт !Як я можу вам допомогти !';
  } else if (message.toLowerCase().includes('як ти ?')) {
      response = 'Нормально!';
  } else {
      response = 'Вибачте я не розумію що ви написали';
  }
  setTimeout(() => addChatbotMessage('Bot: ' + response), 500);
}
// Function to change cursor size
function changeCursorSize(size) {
  document.body.style.cursor = `url('https://example.com/cursor-image.png'), auto`;  // Custom cursor image
  document.body.style.cursorSize = `${size}px`;  // Adjust cursor size
}

// Function to change cursor style
function changeCursorStyle(style) {
  document.body.style.cursor = style;  // Apply the selected cursor style
}
// Function to change the theme
function changeTheme(theme) {
  const body = document.body;
  
  if (theme === 'light') {
      body.classList.remove('dark-theme');
      body.classList.add('light-theme');
  } else if (theme === 'dark') {
      body.classList.remove('light-theme');
      body.classList.add('dark-theme');
  } else if (theme === 'auto') {
      setAutoTheme();  // Auto mode for day/night based on time
  }
}

// Auto theme mode based on time
function setAutoTheme() {
  const hour = new Date().getHours();
  if (hour >= 6 && hour < 18) {
      changeTheme('light'); // Day
  } else {
      changeTheme('dark');  // Night
  }
}

// Apply auto theme on page load
window.onload = function() {
  const themePicker = document.getElementById('themePicker');
  if (themePicker.value === 'auto') {
      setAutoTheme();
  }
};
let isPowerSavingMode = false;
let idleTime = 0;

// Перемикач енергоефективного режиму
function togglePowerSavingMode(enabled) {
    const body = document.body;
    if (enabled) {
        body.classList.add('power-saving');
        isPowerSavingMode = true;
        console.log("Power Saving Mode ON");
    } else {
        body.classList.remove('power-saving');
        isPowerSavingMode = false;
        console.log("Power Saving Mode OFF");
    }
}

// Автоматичне вмикання енергоефективного режиму через 5 хвилин бездіяльності
function resetIdleTimer() {
    idleTime = 0; // Скидання таймера бездіяльності при будь-якій дії
}

function checkIdleTime() {
    idleTime++;
    if (idleTime >= 5 * 60 && !isPowerSavingMode) { // 5 хвилин (300 секунд)
        togglePowerSavingMode(true); // Автоматично вмикаємо режим
    }
}

// Функція для періодичного перевіряння рівня заряду батареї
function checkBatteryStatus() {
    if (navigator.getBattery) {
        navigator.getBattery().then(function(battery) {
            if (battery.level <= 0.2 && !isPowerSavingMode) { // Якщо заряд менше 20%
                togglePowerSavingMode(true); // Вмикаємо режим
            } else if (battery.level > 0.2 && isPowerSavingMode) {
                togglePowerSavingMode(false); // Вимикаємо режим при достатньому заряді
            }
        });
    }
}

// Перевіряємо заряд батареї кожні 5 хвилин
setInterval(checkBatteryStatus, 5 * 60 * 1000);

// Відстежуємо активність користувача
window.onload = function() {
    // Скидання таймера бездіяльності при взаємодії з мишкою або клавіатурою
    window.addEventListener('mousemove', resetIdleTimer);
    window.addEventListener('keypress', resetIdleTimer);
    setInterval(checkIdleTime, 1000); // Щосекундна перевірка часу бездіяльності
};
function startSnakeGame() {
  alert("Snake Game Coming Soon!");  // Можна додати повну реалізацію гри змійка пізніше.
}
let isGamingMode = false;

// Функція для активації/деактивації ігрового режиму
function toggleGamingMode(isEnabled) {
    const body = document.body;
    const taskbar = document.getElementById('taskbar');
    const gameWindow = document.getElementById('gameWindow');

    if (isEnabled) {
        body.classList.add('gaming-mode');
        minimizeProcesses();  // Зупиняємо непотрібні процеси
        gameWindow.style.display = 'flex';  // Емітуємо запуск гри
        console.log("Gaming Mode Enabled");
        isGamingMode = true;
    } else {
        body.classList.remove('gaming-mode');
        resumeProcesses();  // Повертаємо нормальну роботу процесів
        gameWindow.style.display = 'none';
        console.log("Gaming Mode Disabled");
        isGamingMode = false;
    }
}

// Функція для мінімізації фонових процесів
function minimizeProcesses() {
    // Вимикаємо або зупиняємо непотрібні процеси
    document.getElementById('notification-window').classList.add('hidden');
    document.getElementById('clock-container').classList.add('hidden');
    // Інші оптимізації: зниження яскравості, вимкнення анімацій
    document.body.style.filter = 'brightness(0.8)';
}

// Функція для відновлення процесів після виходу з ігрового режиму
function resumeProcesses() {
    document.getElementById('notification-window').classList.remove('hidden');
    document.getElementById('clock-container').classList.remove('hidden');
    document.body.style.filter = 'brightness(1)';
}

// Відкриття ігрового вікна, коли користувач запускає гру
function openGame() {
    toggleGamingMode(true);
}
