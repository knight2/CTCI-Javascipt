// Imagine a robot sitting on the upper left corner of grid with r rows and c columns.
// The robot can only move in two directions, right and down, but certain cells are "off limits" such that
// the robot cannot step on them. Design an algorithm to find a path for the robot from the top left to
// the bottom right.

let findPaths = function(grid){
    let paths =[];
    let endRow = grid.length -1;
    let endCol = grid[0].length-1;
    let recurse = function(row, col, currPath){
        if (row === endRow && col === endCol){
            paths.push(currPath.concat([[row,col]]));
        } else if (row <= endRow && col <= endCol){
            if(row < endRow && grid[row+1][col] !=='x'){
                recurse(row +1, col, currPath.concat([[row,col]]));
        
            }
            if (col < endCol && grid[row][col+1] !== 'x'){
                recurse(row, col+1, currPath.concat([[row,col]]));
            }
        }
    };
    recurse(0,0,[]);
    return paths;
};


var grid = [
    ['0', '0', '0', '0'],
    ['0', 'x', '0', 'x'],
    ['x', '0', '0', '0'],
  ];
  
  console.log(findPaths(grid));
  