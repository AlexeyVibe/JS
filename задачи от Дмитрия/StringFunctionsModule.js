// Исходная строка1
const str = "Вот пример строки,в которой     используются знаки препинания.После знаков должны стоять пробелы , а перед знаками их быть не должно .    Если есть лишние подряд идущие пробелы, они должны быть устранены.";

// Исходная строка2
const str2 = "Текст, в котором слово текст несколько раз встречается и слово тоже";

function upperFirstLetter(str) {

    // Приводим первую букву к верхнему регистру 
    // и прибавляем к ней остальные которые привели к нижнему регистру
    return str[0].toUpperCase() + str.slice(1).toLowerCase();

}

function improveSpaces(str){
    
    // Убираем подряд идущие пробелы
    const trimmed = str.replace(/\s+/g, " ");
    
    // Добавляем пробелы после знаков препинания
    const withSpaces = trimmed.replace(/([,.!?])(\S)/g, "$1 $2");
   
    // Убираем пробелы перед знаками препинания
    const final = withSpaces.replace(/\s+([,.!?])/g, "$1");

    // Убираем пробелы в начале и конце
    return final.trim();
}

function wordsCounter(str){

    // Вызываем предыдушую функцию (improveSpaces) чтобы нормализовать предложение.
    // После чего делим строку по пробелам на слова и считаем длину подлучившегося массива.
    return improveSpaces(str).split(" ").length;
}

function uniqWordsCounter(str){

    // Вызываем предыдушую функцию (improveSpaces) чтобы нормализовать предложение.
    const str2 = improveSpaces(str)

    // Убираем из него знаки пунктуации
    const punctuation = str2.replace(/[,.!?]/g, "");

    // Создаем два одиннаковых массива из слов строки
    let words1 =  punctuation.toLowerCase().split(" ");
    let words2 =  punctuation.toLowerCase().split(" ");

    // Счетчик
    let count;

    // Мапа для ответа
    let map = new Map();

    // Цикл по первому массиву
    for(let i = 0; i<words1.length; i++){
        // Берем слово и заносим в мапу в качестве ключа, значением будет кол-во слов в предложении
        map.set(words1[i], count)
        // Цикл по второму массиву
        for(let j = 0; j<words2.length; j++){
            // Если слова равны увеличиваем их кол-во на один и перезаписываем значение в мапе
            if(words1[i] == words2[j]){
            count+=1;
            map.set(words1[i], count)
            }
        }
        // Зануляем счетчик для следующего слова
        count = 0;
    }

    return map;
}

// Преобразование строки к нижнему регистру, но первая буква большая.
console.log(upperFirstLetter("asdadsASDASD"));

// Преобразование строки с целью правильно расстановки пробелов.
console.log(improveSpaces(str));

// Посдчитывающие кол-во слов в строке.
console.log(wordsCounter(str2));

// Подсчитывающий, уникальные слова.
console.log(uniqWordsCounter(str2));
