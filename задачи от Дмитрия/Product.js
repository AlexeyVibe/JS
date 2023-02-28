// Создать класс данных “Товар”
// С полями
// Название
// Цена
// Количество
// Описание
// Наполнить массив объектами такого класса.
// Написать метод, который получает строку вида
// “name-contains-fd&price-=2-&quantity->5&description-ends-abc”
// “name-starts-fd&quantity=5”
// На выходе возвращает массив, только с подходящими объектами
// возможны (contains, starts, ends для строковых и <, =, >, <=, >= для числовых)

class Product {
    constructor(name, price, quantity, description) {
      this.name = name;
      this.price = price;
      this.quantity = quantity;
      this.description = description;
    }
  
    static filterByQuery(query, products) {
      // разбиваем строку в местах где стоит & на массив подстрок
      // получаем первый элемент массива name-contains-Шо
      // второй price->-20
      const conditions = query.split("&");

      // Создаем новый массив filteredProducts, куда будем записывать имеющиеся продукты
      // , которые удовлетворяют нашему filter
      let filteredProducts = products.filter((product) => {
        // filter будет возвращать только те элементы для которых every вызванный на condition вернет true
        return conditions.every((condition) => {
          // разбиваем строку в местах где стоит "-" на массив подстрок
          // и с помощью деструктурирующего присваивания присваиваем значения массива переменным key, operator, value
          // где key-наименование атрибута товара (name, price, quantity, description)
          // , operator - contains, starts, ends для строковых и <, =, >, <=, >= для числовых
          // , value - числа либо буквы
          const [key, operator, value] = condition.split("-");
          // проверки по каждому operator для его key и value
          // если operator, key и value совпадают с condition то filter возвращает этот товар
          if (operator === "contains") {
              return product[key].includes(value);
          } else if (operator === "starts") {
              return product[key].startsWith(value);
          } else if (operator === "ends") {
              return product[key].endsWith(value);
          } else if (operator === "<") {
              return product[key] < Number(value);
          } else if (operator === ">") {
              return product[key] > Number(value);
          } else if (operator === "<=") {
              return product[key] <= Number(value);
          } else if (operator === ">=") {
              return product[key] >= Number(value);
          } 
          return false;
        });
      });
      return filteredProducts;
    }
}  
 
  const products = [
    new Product("Шоколадка", 50, 10, "Описание 1"),
    new Product("Конфеты", 30, 5, "Описание 2"),
    new Product("Мороженое", 100, 20, "Описание 3"),
  ];
  
  // Я допускаю что в условии задачи была ошибка, так как перед числами не стоял знак "-"
  // , поэтому писал код с учетом того, что такой знак должен быть (мне кажется это логично)
  // , но, если это не ошибка, я бы дописал строку, которая вставляет тире перед числами
  // например str.replace(/(\d+)/g, '-$1'); 
  const query = "name-contains-Шо&price->-20";
  const filteredProducts = Product.filterByQuery(query, products);
  console.log(filteredProducts);