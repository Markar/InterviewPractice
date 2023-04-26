const input = "3, 1a, 0, 2";

function checkPosition(n, data) {
    let jumps = 0;
    console.log('data', data)
    let val = Number.parseInt(data[n]);
  
    let pos = data[n + val]; 
    jumps++;
    console.log('n + val', n, val);
    console.log('check pos right', pos);
    if (pos == 0) 
        return jumps;
    else 
        jumps++;

    if (pos === undefined) {
        pos = data[n - val];
        console.log('check pos left', pos);
        if (pos === 0) 
            return jumps;
        else 
            jumps++;        
    }
}

let inp = sanitizeData(input);
let jumps = checkPosition(1, inp);
console.log('jumps', jumps);

function sanitizeData(input) {
	 // Sanitize the data
    let sanitized = '';
    for (let i = 0; i < input.length; i++) {
        let char = input[i];
        if (char === ',' || char === '0'|| Number.parseInt(char)) {
            sanitized += char;
        }
    }
    
	return sanitized.split(',');
}

//console.log('san', sanitizeData(input))

function play_game_of_zero(number_string) {            
   
    
    let result = -1;
    let running = true;
    let position = 0;
    
    while (running) {
    	let place = sanitized[position];
    
    }
    
    console.log('sanitized', sanitized);

}

/* console.log('res', play_game_of_zero(input) ) */