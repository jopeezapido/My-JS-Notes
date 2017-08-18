/*var greeting;

if ( newCustomer ){
	greeting = function () {
		alert("Thanks for visiting the Badlands!\n" +
		'We hope your stay is..better than most.');
	};
} 
else {
	greeting = function () {
		alert("Welcome back to the Badlands!\n" +
			"Guest they aren't that bad huh?");
	};
}

closeTerminal(greeting)//will replace 'message' that is originally passed to closeTerminal

function closeTerminal(message) {
	//...
	//message();
	//...
}*/


//Challenge 1: Changing Declarations to Expressions

/*function forestFright() {
  var toAlert = "";
  for (var i = 0; i < 5; i++) {
    toAlert = toAlert + "Lions, Tigers, and Bears, Oh My!!\n";
  }
  alert(toAlert);
}

var runAway = function () {
	var toAlert = "";
	for (var i = 0; i < 5; i++) {
		toAlert = toAlert + "Lions, Tigers, and Bears, Oh My!!\n;";
	};
	alert(toAlert);
}*/

//Challenge 2: Using Function Expressions with Parameters

var people = 10;
var rain = 10;
var sharks = 2;

var fearGenerated = function(numPeeps, rainInInches, numSharks) {
	var rainFear = numPeeps * rainInInches;
	var sharkFear = numSharks * numSharks * numSharks;
	var totalFear = sharkFear + rainFear;
	return totalFear;
};

var fear = fearGenerated(people,rain,sharks);

//Challenge 3: Displaying Function Contents

var fearGenerated = function(numPeeps, rainInInches, numSharks) {
  	var rainFear = numPeeps * rainInInches;
  	var sharkFear = numSharks * numSharks * numSharks;
  	var totalFear = sharkFear + rainFear;
  	return totalFear;
	};

alert(fearGenerated);//the answer








