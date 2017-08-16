
function printy(num,word){
	for (i = 0; i < 100; i++){
		num += 1;
		if (num % 3 == 0 && num % 5 != 0){
			word = 'Fizz';
			console.log(word)
		}
		else if (num % 3 != 0 && num % 5 == 0){
			word = 'Buzz';
			console.log(word)
		}
		else if (num % 3 == 0 && num % 5 == 0){
			word = 'FizzBuzz'
			console.log(word)
		}
		else if (num % 3 != 0 && num % 5 != 0){
			console.log(num)
		}
	}
}

printy(0,'');




