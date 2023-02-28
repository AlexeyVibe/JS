// Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.

let date = new Date(2012, 1, 20, 3, 12);
console.log((date));

// Напишите функцию getWeekDay(date), показывающую день недели
// в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

function getWeekDay(date) {
    let options = { weekday: 'short' };
    return date.toLocaleString('ru-RU', options);
  }

//   В Европейских странах неделя начинается с понедельника (день номер 1),
// затем идёт вторник (номер 2) и так до воскресенья (номер 7).
// Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.

function getLocalDay(date) {
    let dayOfWeek = date.getDay() + 1;
    if (dayOfWeek === 7) {
      dayOfWeek = 0;
    }
    return dayOfWeek;
  }

//   Создайте функцию getDateAgo(date, days), 
// возвращающую число, которое было days дней назад от даты date.

function getDateAgo(date, days) {
    let dateCopy = new Date(date.getTime());
    dateCopy.setDate(date.getDate() - days);
    return dateCopy.getDate();
  }

//   Напишите функцию getLastDayOfMonth(year, month),
//  возвращающую последнее число месяца. Иногда это 30, 31 или даже февральские 28/29.

function getLastDayOfMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
  }

//  Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.

function getSecondsToday() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    return hours * 3600 + minutes * 60 + seconds;
  }

//   Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.

function getSecondsToTomorrow() {
    let now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    return 86400 - (hours * 3600 + minutes * 60 + seconds);
}

// Напишите функцию formatDate(date), форматирующую date по следующему принципу:

// Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
// В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
// В противном случае, если меньше часа, вывести "m мин. назад".
// В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты",
//  всё в виде двух цифр, т.е. 31.12.16 10:00.

function formatDate(date) {
    let now = new Date();
    let diff = now.getTime() - date.getTime();
  
    if (diff < 1000) {
      return 'прямо сейчас';
    } else if (diff < 60000) {
      let sec = Math.floor(diff / 1000);
      return sec + ' сек. назад';
    } else if (diff < 3600000) {
      let min = Math.floor(diff / 60000);
      return min + ' мин. назад';
    } else {
      let day = ('0' + date.getDate()).slice(-2);
      let month = ('0' + (date.getMonth() + 1)).slice(-2);
      let year = ('' + date.getFullYear()).slice(-2);
      let hours = ('0' + date.getHours()).slice(-2);
      let minutes = ('0' + date.getMinutes()).slice(-2);
      return day + '.' + month + '.' + year + ' ' + hours + ':' + minutes;
    }
  }