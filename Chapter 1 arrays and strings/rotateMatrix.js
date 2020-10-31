/*Given an image represented by an NxN matrix, where each pixel in the image is 4
bytes, write a method to rotate the image by 90 degrees. (an you do this in place?*/

    let rotateMatrix = function(matrix) {
        let edge = matrix.length - 1;
      
        let movePixels = function(row, col) {
          // starts at m[row][col]
          // moves to m[col][edge - row]
          let fromRow;
          let fromCol;
          let fromPixel;
      
          // first transformation
          let toRow = row; // 0
          let toCol = col; // 1
          let toPixel = matrix[row][col];
      
          // Do rotational transformation 4 times
          for (let i = 0; i < 4; i++) {
            fromRow = toRow;
            fromCol = toCol;
            toRow = fromCol;
            toCol = edge - fromRow;
      
            fromPixel = toPixel;
            toPixel = matrix[toRow][toCol];
            matrix[toRow][toCol] = fromPixel;
          }
        };
      
        for (let i = 0; i < matrix.length / 2; i++) {
          for (let j = i; j < edge - i; j++) {
            console.log(i, j);
            movePixels(i, j);
          }
        }
      };


      let testMatrix = [
        [1, 2, 3, 4],
        [0, 1, 2, 3],
        [0, 0, 1, 2],
        [1, 0, 0, 1]
        ];
        
        console.log('before:');
        console.log(testMatrix[0]);
        console.log(testMatrix[1]);
        console.log(testMatrix[2]);
        console.log(testMatrix[3]);
        
        rotateMatrix(testMatrix);
        
        console.log('after:');
        console.log(testMatrix[0]);
        console.log(testMatrix[1]);
        console.log(testMatrix[2]);
        console.log(testMatrix[3]);
        
      