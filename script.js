let roomLength = prompt("Введите длину комнаты");
let roomWidth = prompt("Введите ширину комнаты");

let roomArea = roomLength * roomWidth;

document.write(
  `<h1>Площадь вашей комнаты составляет: ${roomArea.toFixed(2)}</h1>`
);


const JACKHAMMER = 130;
const LOWN_MOWER = 106;
const ALARM = 70;
const QUIET_ROOM = 40;

let userInput = 76;

if (userInput < QUIET_ROOM) {
  document.write("Очень тихо");
} else if (userInput === QUIET_ROOM) {
  document.write("Тихая команата");
} else if (userInput > QUIET_ROOM && userInput < ALARM) {
  document.write("Громче тихой комнаты и тише будильника");
} else if (userInput === ALARM) {
  document.write("Будильник");
} else if (userInput > ALARM && userInput < LOWN_MOWER) {
  document.write("Громче будильника тише газонокосилки");
} else if (userInput === JACKHAMMER) {
  document.write("Отбойный молоток");
} else if (userInput > LOWN_MOWER && userInput < JACKHAMMER) {
  document.write("Громче газонокосилки тише отбойного молотка");
} else {
  document.write("Очень громко!");
}

