//Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву

let massive_1 = [31, 'frt3', 22, "hello", 302, "hell", 9, "Lien", 34, '932fa', 38];
let massive_1_result = [];
massive_1.forEach(function(elem) {
  if(typeof elem == "number") massive_1_result.push(elem);
});
console.log(massive_1_result);

function average(massive_1_result) {
    return massive_1_result.reduce((sum, a) => sum + a, 0) / massive_1_result.length;
}
console.log(average(massive_1_result));

// Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.

let x = prompt('Write x');
let y = prompt('Write y');
let znak = prompt("Please, write 'znak': +, -, *, /, %, ^ ?");
function doMath(x, znak, y) {
  let sum = 0;
    if (znak === '+') {
      sum = +x + +y;
      return sum;
    } else if (znak === '-') {
      sum = +x - +y;
      return sum;
    } else if (znak === '*') {
      sum = +x * +y;
      return sum;
    } else if (znak === '/') {
      sum = +x / +y;
      return sum;
    } else if (znak === '%') {
      sum = +x % +y;
      return sum;
    } else if (znak === '**') {
      sum = x ** y;
      return sum;
    }
    
};

alert(doMath(x, znak, y));

// Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.

function arrAdd() {
  let arr = [];
  let amount = +prompt("Введите количество массивов в первом массиве");
  for(let i = 0; i < amount; i++) {
      arr.push([]);

      let amount2 = prompt("Введите количество елементов" + (i + 1));

      for(let j = 0; j < amount2; j++) {
          let elem = prompt("Введите текст" + (j + 1));
          arr[i].push([elem]);
      }
  }
  console.log(arr);
}
let functionResult = arrAdd();

// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.

let string = "Я пр43иеха56л и64з дал34ьно3го горо45да";
let stringRight = string.replace(/[0-9]/g, '');
console.log(stringRight);