// Implement the "paint fill" function that one might see on many image editing programs.
// That is , given a screen (represented by a two -dimensional array of colors), a point, and a new color,
// nil in the surrounding area until the color changes from the original color.


let withinBounds = function(point,screen){
    let [row, col] = point;
    let rowHeight = screen.length;
    let colWidth = screen[0].length;
    return row >=0 && row < rowHeight && col >= 0 && col <colWidth;
}

let paintFill = function(screen, point, color){
    let [row, col] = point;
    let currColor = screen[row][col];
    if (withinBounds(point, screen) && screen[row][col] !== color){
        screen[row][col] = color;
        if (withinBounds([row + 1, col], screen) && screen[row + 1][col] === currColor) {
            paintFill(screen, [row + 1, col], color);
          }
          
          if (withinBounds([row + 1, col + 1], screen) && screen[row + 1][col + 1] === currColor) {
            paintFill(screen, [row + 1, col + 1], color);
          }
          
          if (withinBounds([row + 1, col - 1], screen) && screen[row + 1][col - 1] === currColor) {
            paintFill(screen, [row + 1, col - 1], color);
          }
          
          if (withinBounds([row, col + 1], screen) && screen[row][col + 1] === currColor) {
            paintFill(screen, [row, col + 1], color);
          }
          
          if (withinBounds([row, col - 1], screen) && screen[row][col - 1] === currColor) {
            paintFill(screen, [row, col - 1], color);
          }
          
          if (withinBounds([row - 1, col], screen) && screen[row - 1][col] === currColor) {
            paintFill(screen, [row - 1, col], color);
          }
          
          if (withinBounds([row - 1, col + 1], screen) && screen[row - 1][col + 1] === currColor) {
            paintFill(screen, [row - 1, col + 1], color);
          }
      
          if (withinBounds([row - 1, col - 1], screen) && screen[row - 1][col - 1] === currColor) {
            paintFill(screen, [row - 1, col - 1], color);
          }      
    }
};

var b = '#000000';
var w = '#ffffff';
var g = '#00ff00';

var testScreen = [
  [b, b, b, b],
  [b, w, w, b],
  [b, w, w, b],
  [b, b, b, b]
];
var testScreen2 = [
  [b, w, w, b],
  [b, w, w, b],
  [b, b, w, b],
  [b, w, w, b]
];


var testPoint = [1, 1];

paintFill(testScreen, testPoint, g);
paintFill(testScreen2, testPoint, g);

console.log(testScreen);
console.log(testScreen2);
