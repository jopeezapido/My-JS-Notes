function isEven(n){
	n = Number(n);
	n = parseInt(n);
	//console.log(n);
	if (n % 2 == 0){
		console.log(n + " is " + 'even')
	}
	else if (isNaN(n)) {
		console.log(n + " is " + 'Input a number')
	}
	else if (n % 2 != 0) {
		console.log(n + " is " + 'odd')
	}
	else {
		console.log((n * -1) + " is converted to a positive number")
	}
}

console.log(isEven(50))//true
console.log(isEven(75))//false
console.log(isEven(-1))//??