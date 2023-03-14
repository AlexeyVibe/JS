// Добавьте всем функциям в прототип метод defer(ms), 
// который вызывает функции через ms миллисекунд.
// После этого должен работать такой код:
// function f() {
//   alert("Hello!");
// }
// f.defer(1000); // выведет "Hello!" через 1 секунду

Function.prototype.defer = function (ms) {
  setTimeout(this, ms);
};

//   Добавьте всем функциям в прототип метод defer(ms)
// , который возвращает обёртку, откладывающую вызов функции на ms миллисекунд.
//   Например, должно работать так:
//   function f(a, b) {
//     alert( a + b );
//   }
//   f.defer(1000)(1, 2); // выведет 3 через 1 секунду.
//   Пожалуйста, заметьте, что аргументы должны корректно передаваться оригинальной функции.

Function.prototype.defer = function (ms) {
  let fn = this;
  return function (...args) {
    setTimeout(() => fn.apply(this, args), ms);
  };
};
