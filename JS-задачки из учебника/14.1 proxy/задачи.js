// Напишите функцию wrap(target), которая берёт объект target и возвращает прокси,
//  добавляющий в него этот аспект функциональности.

function wrap(target) {
    return new Proxy(target, {
      get(target, property) {
        if (!(property in target)) {
          throw new Error(`Property '${property}' does not exist.`);
        }
  
        return target[property];
      },
    });
  }
  
    
    user = wrap(user);
    
    console.log(user.name); // John
    console.log(user.age); // Ошибка: такого свойства не существует

//     В некоторых языках программирования возможно получать элементы массива, используя отрицательные индексы, отсчитываемые с конца.

// Вот так:

// let array = [1, 2, 3];

// array[-1]; // 3, последний элемент
// array[-2]; // 2, предпоследний элемент
// array[-3]; // 1, за два элемента до последнего
// Другими словами, array[-N] – это то же, что и array[array.length - N].

// Создайте прокси, который реализовывал бы такое поведение.

let array = [1, 2, 3];

array = new Proxy(array, {
  get(target, prop, receiver) {
    if (prop < 0) {
      prop = String(target.length + +prop);
    }
    return Reflect.get(target, prop, receiver);
  }
});

console.log(array[-1]); // 3
console.log(array[-2]); // 2

// Создайте функцию makeObservable(target), которая делает объект «наблюдаемым», возвращая прокси.

// Вот как это должно работать:


function makeObservable(target) {
    const handler = {
      set(target, key, value, receiver) {
        const result = Reflect.set(target, key, value, receiver);
        if (typeof target.observe === 'function') {
          target.observe(key, value);
        }
        return result;
      }
    };
  
    return new Proxy(target, handler);
  }
  
  
  let user = {};
  user = makeObservable(user);
  
  user.observe = function(key, value) {
    console.log(`SET ${key}=${value}`);
  };
  
  user.name = "John"; // выводит: SET name=John
  

