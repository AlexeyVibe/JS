// Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.
// Да, именно таким образом, используя двойные круглые скобки (не опечатка).
// Например:
// sum(1)(2) = 3
// sum(5)(-1) = 4

function sum(a) {
  return function (b) {
    return a + b;
  }
}


// У нас есть встроенный метод arr.filter(f) для массивов. Он фильтрует все элементы 
// с помощью функции f.
//  Если она возвращает true, то элемент добавится в возвращаемый массив.
// Сделайте набор «готовых к употреблению» фильтров:
// inBetween(a, b) – между a и b (включительно).
// inArray([...]) – находится в данном массиве.
// Они должны использоваться таким образом:
// arr.filter(inBetween(3,6)) – выбирает только значения между 3 и 6 (включительно).
// arr.filter(inArray([1,2,3])) – выбирает только элементы, совпадающие с одним из элементов массива

function byField(fieldName) {
  return function (a, b) {
    if (a[fieldName] > b[fieldName]) {
      return 1;
    }
    if (a[fieldName] < b[fieldName]) {
      return -1;
    }
    return 0;
  };
}

//  Следующий код создаёт массив из стрелков (shooters).
// Каждая функция предназначена выводить их порядковые номера. Но что-то пошло не так…
// function makeArmy() {
//   let shooters = [];
//   let i = 0;
//   while (i < 10) {
//     let shooter = function() { // функция shooter
//       alert( i ); // должна выводить порядковый номер
//     };
//     shooters.push(shooter);
//     i++;
//   }
//   return shooters;
// }
// let army = makeArmy();
// army[0](); // у 0-го стрелка будет номер 10
// army[5](); // и у 5-го стрелка тоже будет номер 10
// // ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...
// Почините код, чтобы он работал как задумано.

function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let shooter = function (x) {
      return function () {
        console.log(x);
      };
    }(i);
    shooters.push(shooter);
    i++;
  }

  return shooters;
}