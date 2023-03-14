// Вызов askPassword() в приведённом ниже коде должен проверить пароль и затем вызвать user
// .loginOk/loginFail в зависимости от ответа.
// Однако, его вызов приводит к ошибке. Почему?
// Исправьте выделенную строку, чтобы всё работало (других строк изменять не надо).

function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
  }
  
  let user = {
    name: 'Вася',
  
    loginOk() {
      alert(`${this.name} logged in`);
    },
  
    loginFail() {
      alert(`${this.name} failed to log in`);
    },
  
  };
  
  askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

//   Это задание является немного усложнённым вариантом одного из предыдущих 
//   – Исправьте функцию, теряющую "this".
//   Объект user был изменён. Теперь вместо двух функций loginOk/loginFail 
//   у него есть только одна – user.login(true/false).
//   Что нужно передать в вызов функции askPassword в коде ниже,
//    чтобы она могла вызывать функцию user.login(true) как ok и функцию user.login(false) как fail?

function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
  }
  
  let user1 = {
    name: 'John',
  
    login(result) {
      alert( this.name + (result ? ' logged in' : ' failed to log in') );
    }
  };
  
  askPassword(user.login.bind(user1, true), user.login.bind(user1, false));