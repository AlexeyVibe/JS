// Допустим, у нас есть массив arr.
// Создайте функцию unique(arr), которая вернёт массив уникальных,
// не повторяющихся значений массива arr.

function unique(arr) {
    return Array.from(new Set(arr));
  }

// Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.

function aclean(arr) {
    let obj = {};
  
    for (let i = 0; i < arr.length; i++) {
      // получаем "каноническую" версию слова
      let sorted = arr[i].toLowerCase().split("").sort().join("");
  
      // добавляем "каноническую" версию слова в объект, если ее еще нет
      if (!(sorted in obj)) {
        obj[sorted] = arr[i];
      }
    }
  
    // получаем массив значений объекта (т.е. массив уникальных слов)
    return Object.values(obj);
  }
  
  let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
  alert(aclean(arr)); // "PAN,hectares,ear"
  
// Мы хотели бы получить массив ключей map.keys() в переменную
//  и далее работать с ними, например, применить метод .push.
// Но это не выходит:
// let map = new Map();
// map.set("name", "John");
// let keys = map.keys();
// // Error: keys.push is not a function
// // Ошибка: keys.push -- это не функция
// keys.push("more");
// Почему? Что нужно поправить в коде, чтобы вызов keys.push сработал?
  
let map = new Map();
map.set("name", "John");
let keys = Array.from(map.keys());
keys.push("more");