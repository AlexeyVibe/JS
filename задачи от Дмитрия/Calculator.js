// Написать модуль, который способен выполнять операции с числами любой длины.
// 4 метода для сложения, умножения, вычитания и деления.

class Calculator {
 
    //  BigInt – это специальный числовой тип, который предоставляет возможность работать
    //  с целыми числами произвольной длины. Функция BigInt создаст 
    //  число типа BigInt из переданного аргумента. Аргументом может быть число, строка и др.
    constructor(a,b) { 
        this.a = BigInt(a);
        this.b = BigInt(b);
    }

    addition(){
        return this.a+this.b;
    }

    subtraction(){
        return this.a-this.b;
    }

    multiplication(){
        return this.a*this.b;
    }

    division(){
        return this.a/this.b;
    }
}

  const ex = new Calculator("100654216498162154984654865486546","2");

  console.log(ex.addition())
  console.log(ex.subtraction())
  console.log(ex.multiplication())
  console.log(ex.division())
  