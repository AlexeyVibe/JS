// Встроенная функция setTimeout использует колбэк-функции. Создайте альтернативу, использующую промисы.

// Функция delay(ms) должна возвращать промис, который перейдёт в состояние «выполнен» через ms миллисекунд, так чтобы мы могли добавить к нему .then:

// function delay(ms) {
//   // ваш код
// }

// delay(3000).then(() => alert('выполнилось через 3 секунды'));

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

//   Перепишите функцию showCircle, написанную в задании Анимация круга с помощью колбэка таким образом, чтобы она возвращала промис, вместо того чтобы принимать в аргументы функцию-callback.

// Новое использование:

// showCircle(150, 150, 100).then(div => {
//   div.classList.add('message-ball');
//   div.append("Hello, world!");
// });

function showCircle(cx, cy, radius) {
    let div = document.createElement('div');
    div.style.width = 0;
    div.style.height = 0;
    div.style.left = cx + 'px';
    div.style.top = cy + 'px';
    div.className = 'circle';
    document.body.append(div);
  
    return new Promise(resolve => {
      setTimeout(() => {
        div.style.width = radius * 2 + 'px';
        div.style.height = radius * 2 + 'px';
  
        div.addEventListener('transitionend', function handler() {
          div.removeEventListener('transitionend', handler);
          resolve(div);
        });
      }, 0);
    });
  }
  