function countBs(str){
	var arr = str.split('');
	var mappy = arr.filter(function (elem){
		var matchy = elem.match(/B/g);// or you could just:
		//return elem == 'B';
		return matchy;
	})
	
	var arrLengthOfCountBs = mappy.length;
	return arrLengthOfCountBs
}

function countChar(str,char){
	var arr = str.split('');
	var mappy = arr.filter(function (elem){
		return elem == char
	})
	var arrLengthOfCountChar = mappy.length
	return arrLengthOfCountChar;
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "e"));
// → 4