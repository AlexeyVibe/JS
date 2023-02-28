// Методы Math.round и toFixed, согласно документации, округляют до ближайшего целого числа
// : 0..4 округляется в меньшую сторону, тогда как 5..9 в большую сторону.
// Например:
// alert( 1.35.toFixed(1) ); // 1.4
// Но почему в примере ниже 6.35 округляется до 6.3?
// alert( 6.35.toFixed(1) ); // 6.3
// Как правильно округлить 6.35?

console.log(Math.round(6.35 * 10) / 10 )

// Встроенный метод Math.random() возвращает случайное число от 0 (включительно) 
// до 1 (но не включая 1)
// Напишите функцию random(min, max), которая генерирует случайное число с плавающей точкой 
// от min до max (но не включая max).
// Пример работы функции:
// alert( random(1, 5) ); // 1.2345623452
// alert( random(1, 5) ); // 3.7894332423
// alert( random(1, 5) ); // 4.3435234525

function random(min, max) {
    return min + (max - min)*Math.random();
  }

console.log(random(1,5));
console.log(random(1,5));
console.log(random(1,5));

// Напишите функцию randomInteger(min, max),
// которая генерирует случайное целое (integer) число от min до max (включительно).
// Любое число из интервала min..max должно появляться с одинаковой вероятностью.

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  console.log(random(1,3));
  console.log(random(1,3));
  console.log(random(1,3));