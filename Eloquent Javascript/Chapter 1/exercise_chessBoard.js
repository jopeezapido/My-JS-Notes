
function oddColumn(num,height,width){
	
	for (i = 0; i < height; i++){
		num += 1;
		if (num % 2 == 0){
			console.log('#')
		}
		else if (num % 2 != 0){
			console.log(' ')
		}
	}
}

oddColumn(0,8,1);