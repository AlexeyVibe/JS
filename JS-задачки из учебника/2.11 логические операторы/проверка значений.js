// Напишите условие if для проверки, что переменная age находится в диапазоне 
// между 14 и 90 включительно.
// «Включительно» означает, что значение переменной age может быть равно 14 или 90.

let age = 14;

if(14<= age && age <= 90){
    console.log(age)
}else {console.log("dobaeb")}

// Напишите условие if для проверки, что значение переменной age НЕ находится в 
// диапазоне 14 и 90 включительно.
// Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.

let age1 = 12;

if(!(14<= age1 && age1 <= 90)){
    console.log(age1)
}else {console.log("dobaeb")}

if(age1 < 14 || 90 < age1){
    console.log(age1)
}else {console.log("dobaeb")}