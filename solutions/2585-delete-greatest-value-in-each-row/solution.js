/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function(grid) {
    grid.forEach(row => row.sort((a, b) => a - b));
    
    let sum = 0;
    
    while (grid[0].length > 0) {
        let maxInColumn = 0;
        
        for (let row of grid) {
            maxInColumn = Math.max(maxInColumn, row.pop());
        }
        
        sum += maxInColumn;
    }
    
    return sum;
};



