// create new data type - Point
type Point = {
  x: number;
  y: number,
}

type Color = {
  color: string;
}
// intersaction types
let pointWithColor: Point & Color;

// 01 - correct result
pointWithColor = { x: 10, y: 20, color: 'red' }
console.log(pointWithColor); // { x: 10, y: 20, color: 'red' }

// 02 - mistake- without color - data
// pointWithColor = { x: 10, y: 20}  // Property 'color' is missing in type

// 03 - next mistake
// pointWithColor = { x: 10, y: 20, color: 'red', model: 'audi' }  // and 'model' does not exist in type 'Point & Color'

// 04 - next mistake
// pointWithColor = { x: 10, y: 20, color: 'red', color: 'blue' } // An object literal cannot have multiple properties with the same name

