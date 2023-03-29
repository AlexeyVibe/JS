// В коде ниже класс Rabbit наследует Animal.

// К сожалению, объект класса Rabbit не создаётся. Что не так? Исправьте ошибку.

class Animal {

    constructor(name) {
      this.name = name;
    }
  
  }
  
  class Rabbit extends Animal {
    constructor(name) {
      super(name) = name;
      this.created = Date.now();
    }
  }
  
  let rabbit = new Rabbit("Белый кролик"); // Error: this is not defined
 console.log(rabbit.name);

//  У нас есть класс Clock. Сейчас он выводит время каждую секунду

// Создайте новый класс ExtendedClock, который 
// будет наследоваться от Clock и добавьте параметр 
// precision – количество миллисекунд между «тиками». 
// Установите значение в 1000 (1 секунда) по умолчанию.

// Сохраните ваш код в файл extended-clock.js
// Не изменяйте класс clock.js. Расширьте его.

class ExtendedClock extends Clock {
    constructor(options) {
      super(options);
      let { precision = 1000 } = options;
      this.precision = precision;
    }
  
    start() {
      this.render();
      this.timer = setInterval(() => this.render(), this.precision);
    }
  };