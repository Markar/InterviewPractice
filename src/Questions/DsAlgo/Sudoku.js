import React from 'react';

//Given a 2D array, board[][] of size 9 × 9, which represents a solution to the Sudoku puzzle, the task is to check if the given representation of a solved Sudoku puzzle is valid or not.

// board[][] = {{7, 9, 2, 1, 5, 4, 3, 8, 6}, 
//              {6, 4, 3, 8, 2, 7, 1, 5, 9},
//              {8, 5, 1, 3, 9, 6, 7, 2, 4},
//              {2, 6, 5, 9, 7, 3, 8, 4, 1},
//              {4, 8, 9, 5, 6, 1, 2, 7, 3},
//              {3, 1, 7, 4, 8, 2, 9, 6, 5},
//              {1, 3, 6, 7, 4, 8, 5, 9, 2},
//              {9, 7, 4, 2, 1, 5, 6, 3, 8},
//              {5, 2, 8, 6, 3, 9, 4, 1, 7}}
// Output: Valid

// Input: 

// board[][] = {{5, 5, 5, 5, 5, 5, 5, 5, 5}, 
//              {5, 5, 5, 5, 5, 5, 5, 5, 5},
//              {5, 5, 5, 5, 5, 5, 5, 5, 5},
//              {5, 5, 5, 5, 5, 5, 5, 5, 5},
//              {5, 5, 5, 5, 5, 5, 5, 5, 5},
//              {5, 5, 5, 5, 5, 5, 5, 5, 5},
//              {5, 5, 5, 5, 5, 5, 5, 5, 5},
//              {5, 5, 5, 5, 5, 5, 5, 5, 5},
//              {5, 5, 5, 5, 5, 5, 5, 5, 5}}
// Output: Not Valid 

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// input: array of numbers, unordered, find all pairs that add up to a given numbers, all numbers are unique
// input = [9, 2, 42, 4, -1, 6]
// sum = 8
// output =[ [9, -1], [2, 6] ]

export default function Sudoku(props) {

    const board1 = [
        [7, 9, 2, 1, 5, 4, 3, 8, 6],
        [6, 4, 3, 8, 2, 7, 1, 5, 9],
        [8, 5, 1, 3, 9, 6, 7, 2, 4],
        [2, 6, 5, 9, 7, 3, 8, 4, 1],
        [4, 8, 9, 5, 6, 1, 2, 7, 3],
        [3, 1, 7, 4, 8, 2, 9, 6, 5],
        [1, 3, 6, 7, 4, 8, 5, 9, 2],
        [9, 7, 4, 2, 1, 5, 6, 3, 8],
        [5, 2, 8, 6, 3, 9, 4, 1, 7]
    ];
 
    const testBoard = (board) => {
        let result = true;
        let set1 = new Set();
        let set2 = new Set();
        let set3 = new Set();

        for (let i = 0; i < board.length; i++) {            
            const row = board[i];            
            if (i % 3 == 0) {                
                set1.clear();
                set2.clear();
                set3.clear();
            } 

            for (let j = 0; j < row.length; j++) {
                const cell = row[j];                
                if (j < 3) {
                    if (!set1.has(cell)) {
                        set1.add(cell)                        
                    } else {                        
                        result = false;
                        return false;
                    }
                }
                if (j >= 3 && j < 6) {
                    if (!set2.has(cell)) {
                        set2.add(cell);
                    } else {                        
                        result = false;
                        return false;
                    }
                }
                if (j >= 6 && j < 9) {
                    if (!set3.has(cell)) {
                        set3.add(cell);
                    } else {                        
                        result = false;
                        return false;
                    }
                }
            }            
        }
        return result;
    }


    return (
        <div>
            <h3>Sudoku board valid?</h3>
            <div>
                {testBoard(board1).toString()}
            </div>
        </div>
    );
}