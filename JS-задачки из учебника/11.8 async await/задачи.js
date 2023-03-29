// Перепишите один из примеров раздела Цепочка промисов, используя async/await вместо .then/catch:

// function loadJson(url) {
//   return fetch(url)
//     .then(response => {
//       if (response.status == 200) {
//         return response.json();
//       } else {
//         throw new Error(response.status);
//       }
//     })
// }

// loadJson('no-such-user.json') // (3)
//   .catch(alert); // Error: 404

async function loadJson(url) {
    let response = await fetch(url);
    if (response.status == 200) {
      return response.json();
    } else {
      throw new Error(response.status);
    }
  }
  
  loadJson('no-such-user.json')
    .catch(alert);

//     Ниже пример из раздела Цепочка промисов, перепишите его, 
//     используя async/await вместо .then/catch.

// В функции demoGithubUser замените рекурсию на цикл: используя async/await, 
// сделать это будет просто.

class HttpError extends Error {
    constructor(response) {
      super(`${response.status} for ${response.url}`);
      this.name = 'HttpError';
      this.response = response;
    }
  }
  
  function loadJson(url) {
    return fetch(url)
      .then(response => {
        if (response.status == 200) {
          return response.json();
        } else {
          throw new HttpError(response);
        }
      });
  }
  
  async function demoGithubUser() {
    let name;
  
    while (true) {
      name = prompt("Введите логин?", "iliakan");
  
      try {
        let user = await loadJson(`https://api.github.com/users/${name}`);
        alert(`Полное имя: ${user.name}.`);
        return user;
      } catch (err) {
        if (err instanceof HttpError && err.response.status == 404) {
          alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
        } else {
          throw err;
        }
      }
    }
  }
  
  demoGithubUser();

  
//   Есть «обычная» функция. Как можно внутри неё получить результат выполнения async–функции?

async function wait() {
  await new Promise(resolve => setTimeout(resolve, 1000));

  return 10;
}

function f() {
    wait().then(result => {
      console.log(result); // 10
    });
  }
  
