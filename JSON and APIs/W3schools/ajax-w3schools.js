function onLoad () {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if (this.readyState == 4 && this.status == 200){
			document.getElementById("demo").innerHTML = this.responseText;
		}
	};
	xhttp.open('GET','https://learnwebcode.github.io/json-example/animals-1.json', true);
	xhttp.send();
}