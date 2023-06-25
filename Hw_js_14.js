let cars = [
    { name: "Volkswagen", model: "passat", year: 2022, speed: 80 },
    { name: "Mazda", model: "6", year: 2019, speed: 75 },
    { name: "Volkswagen", model: "golf", year: 2023, speed: 96 },
  ];
  
  function view(car) {
    console.log("Назва машини: " + car.name);
    console.log("Марка: " + car.model);
    console.log("Рік випуску: " + car.year);
    console.log("Середня швидкість: " + car.speed);
    console.log("------------------------------");
  }
  
  let distance = 150;
  
  for (let i = 0; i < cars.length; i++) {
    view(cars[i]);
  
    const time = distance / cars[i].speed;
    const restTime = Math.floor(time / 4);
    const totalTravelTime = time + restTime;
  
    console.log("Необхідний час подолання: " + totalTravelTime + " годин");
    console.log("------------------------------");
  }
  

  let numb1 = +prompt("Введите первое число")
  let numb2 = +prompt("Введите второе число")
  function calculation (numb1, numb2){
    if( numb1 < numb2){
        return -1
    }
    else if (numb1 > numb2){
    return 1
    }
    else if (numb1 = numb2){
    return 0
    }
}
let result = calculation (numb1, numb2)
console.log (result)


let numb3 = +prompt("Введите число для поиска факториала");
function findFactorial(number) {
    let factorial = 1;
  for (let i = 2; i <= number; i++) {
    factorial *= i;
  }
return factorial;
}

let newFactorial = findFactorial(numb3);
console.log("Факториал числа " + numb3 + " ровняеться " + newFactorial);


function combineDigits(digit1, digit2, digit3) {
    return Number(`${digit1}${digit2}${digit3}`);
  }
  const digit1 = 1;
  const digit2 = 4;
  const digit3 = 9;
  
  const combinedResult = combineDigits(digit1, digit2, digit3);
  console.log("Соединяем число: " + combinedResult);
  
let length = +prompt("Введите длинну:");
let width = +prompt("Введите ширину:");
function findS (length, width){
    if (width === undefined) {
        return length * length;
      }
    else{
        return length * width
    }
}
let result1 = findS (length, width)
alert (result1)

