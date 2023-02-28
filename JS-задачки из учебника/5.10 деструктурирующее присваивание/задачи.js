// У нас есть объект:
// let user = {
//   name: "John",
//   years: 30
// };
// Напишите деструктурирующее присваивание, которое:
// свойство name присвоит в переменную name.
// свойство years присвоит в переменную age.
// свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)

let user = {
    name: "John",
    years: 30
  };
  
let { name, years: age, isAdmin = false } = user;

//   let { name, years: age, isAdmin = false } = user;
//   У нас есть объект salaries с зарплатами:
//   let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
//   };
//   Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.
//   Если объект salaries пустой, то нужно вернуть null.
//   Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
//   P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.

function topSalary(salaries) {
    let maxSalary = 0;
    let maxSalaryName = null;
  
    for (let [name, salary] of Object.entries(salaries)) {
      if (salary > maxSalary) {
        maxSalary = salary;
        maxSalaryName = name;
      }
    }
  
    return maxSalaryName;
  }


  