/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function(grid) {
    // Sort each row in ascending order
    grid.forEach(row => row.sort((a, b) => a - b));
    
    let sum = 0;
    
    while (grid[0].length > 0) {
        let maxInColumn = 0;
        
        for (let row of grid) {
            maxInColumn = Math.max(maxInColumn, row.pop()); // Remove and get the last element
        }
        
        sum += maxInColumn;
    }
    
    return sum;
};



