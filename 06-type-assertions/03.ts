// --- using typeof
// let myVars: any = 'Hello';
// if (typeof myVars === 'string') {
//   console.log('Variable is string');
// } else {
//   console.log('Variable is not string');
// }

// --- typeof with functions

// function checkIfString(input: any): void {
//   if (typeof input === "string") {
//     console.log("Змінна має тип string.");
//   } else {
//     console.log("Змінна не є типом string.");
//   }
// }

// let myVars: any = "Hello";
// checkIfString(myVar); // Виведе: "Змінна має тип string."


// with instanceof

let myVars: any = "Hello";
if (myVar instanceof String) {
  // Виконуємо код, якщо myVar є об'єктом типу String
  console.log("Змінна має тип string.");
} else {
  console.log("Змінна не є типом string.");
}
