const data1 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

let result = "";

function printLeft(data) {
    // Prints the left side of the matrix in reverse order
    let result = "";

    data.map(row => {
        result += row.splice(0, 1) + ",";
    });

    return result;
}

function printRotate(data) {
    for (let i = 0; i < data.length; i++) {
        let row = data[i];

        if (i === 0) {
            // append first row
            result += row.toString() + ",";
            continue;
        }

        if (i === data.length - 1) {
            // append last row, remove last row then first row            
            result += row.reverse().toString();
            data.splice(data.length - 1, 1);
            data.splice(0, 1);                        
            result += "," + printLeft(data.reverse());

            if (data.length > 0) {
                // if there is more matrix left, repeat with new smaller matrix
                data.reverse();
                printRotate(data);
            } else {
                // Remove trailing comma
                result = result.slice(0, -1);
            }
            continue;
        }


        let splice = row.splice(row.length - 1, 1);
        result += splice + ",";
    }

    return result;
}


function matrix(input) {
    let res = "";
    return printRotate(data1);
}

let ans = matrix(data1);
console.log('ans', ans);









