// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string»
//  в «myShortString».
// То есть дефисы удаляются, а все слова после них получают заглавную букву.

function camelize(str) {
    return str
      .split('-') 
      .map((element, index) => index != 0 ? element[0].toUpperCase() + element.slice(1) : element)
      .join(''); 
  }

  console.log(camelize("list-style-image"))

//   Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет элементы со значениями
//    больше или равными a и меньше или равными b и возвращает результат в виде массива.
// Функция должна возвращать новый массив и не изменять исходный.

function filterRange(arr, a, b){
    return arr.filter(element => (a <= element && element <= b));
}

console.log(filterRange([5, 3, 8, 1],0,1));

// Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr 
// и удаляет из него все значения кроме тех,
//  которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
// Функция должна изменять принимаемый массив и ничего не возвращать.

function filterRangeInPlace(arr, a, b){

    let element;

    for (let i = 0; i < arr.length; i++) {
        element = arr[i];
        if (element < a || element > b) {
          arr.splice(i, 1);
        }
      }
    
}

let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4); 
console.log( arr );

// Сортировать в порядке по убыванию

let arr1 = [5, 2, 1, -10, 8];
arr1.sort( (a, b) => b - a );
console.log(arr1);

// У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.

function copySorted(arr) {
    return arr.concat().sort();
  }
  
let arr3 = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr3);
  
console.log( sorted );
console.log( arr3 );

  // Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.

  function Calculator() {

    this.addMethod = function(name, func) {
        this.methods[name] = func;
      };

    this.methods = {
      "+": (a, b) => a + b,
      "-": (a, b) => a - b,
    };
  
    this.calculate = function(str) {

      let [a, op, b] = str.split(" ");
        a = +a;
        b = +b;
  
      if (!this.methods[op] || isNaN(a) || isNaN(b)) {
        return NaN;
      }
  
      return this.methods[op](a, b);
    };
  
  }

  let calc = new Calculator();

console.log(calc.calculate("3 + 7")); // 10

let powerCalc = new Calculator();
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

console.log(powerCalc.calculate("2 ** 3")); // 8

// У вас есть массив объектов user, и в каждом из них есть user.name.
//  Напишите код, который преобразует их в массив имён.

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(element => element.name);

console.log( names );

// У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.
// Напишите код, который создаст ещё один массив объектов с параметрами id и fullName
// , где fullName – состоит из name и surname.

let vasya1 = { name: "Вася", surname: "Пупкин", id: 1 };
let petya1 = { name: "Петя", surname: "Иванов", id: 2 };
let masha1 = { name: "Маша", surname: "Петрова", id: 3 };

let users1 = [ vasya1, petya1, masha1 ];

let usersMapped = users1.map(element => ({fullName :`${element.name} ${element.surname}`,
     id : element.id}));

console.log( usersMapped[0].id )
console.log( usersMapped[0].fullName ) 

// Напишите функцию sortByAge(users),
//  которая принимает массив объектов со свойством age и сортирует их по нему.

function sortByAge(arr) {
   return arr.sort((a, b) => a.age - b.age);
  }

  
let vasya2 = { name: "Вася", age: 25 };
let petya2 = { name: "Петя", age: 30 };
let masha2 = { name: "Маша", age: 28 };

let arr2 = [ vasya2, petya2, masha2 ];

console.log(sortByAge(arr2));


// Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом)
//  элементы массива.
// Многократные прогоны через shuffle могут привести к разным последовательностям элементов.

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  
//   Напишите функцию getAverageAge(users), которая принимает массив объектов 
//   со свойством age и возвращает средний возраст.
//   Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.

function getAverageAge(users) {
    let sumAge = users.reduce((sum, user) => sum + user.age,0);
    return sumAge / users.length;
  }

console.log(getAverageAge(arr2));
  
// Пусть arr – массив строк.
// Напишите функцию unique(arr), которая 
// возвращает массив, содержащий только уникальные элементы arr.

function unique(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}
  
let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

console.log(unique(strings));

// Допустим, мы получили массив пользователей 
// в виде {id:..., name:..., age:... }.
// Создайте функцию groupById(arr), которая создаст из него объект 
// с id в качестве ключа и элементами массива в качестве значений.

function groupById(arr) {
    return arr.reduce((acc, user) => {
      acc[user.id] = user;
      return acc;
    }, {});
  }

  
let users4 = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
];
  
  console.log(groupById(users4));