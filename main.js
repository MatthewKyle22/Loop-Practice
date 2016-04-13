// #1
for (var i = 0; i < 500; i+= 100) {
    console.log(i);
}

// #2
function two (arg) {
    
}

// #3
function three (arg) {
    var count = 1;
    for (var i = 0; i < arg; i++) {
        console.log(count);
        console.log(count);
        console.log(count);
        count = count + 1;
    }
}
three(3);



// #6
function six (arg) {
    var count = 3;
    for (var i = 0; i < arg; i++) {
	    console.log(count);
	    count = count + 3;
    }
}
six(5);

// #7
function seven (arg) {
var count = 0;
	for (var i = 0; i < arg; i++) {
		console.log(count);
		count = count + 1;
		if (count === 4) {
			count = 0;
		}
	}
}
seven(12);

