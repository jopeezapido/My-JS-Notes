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



/*Function Expressions and Anonymous Functions*/

//Challenge 1: Changing Declarations to Expressions

function forestFright() {
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
}

//Challenge 2: Using Function Expressions with Parameters

var people = 10;
var rain = 10;
var sharks = 2;

var fearGenerated = function( numPeeps, rainInInches, numSharks ) {
	var rainFear = numPeeps * rainInInches;
	var sharkFear = numSharks * numSharks * numSharks;
	var totalFear = sharkFear + rainFear;
	return totalFear;
};

var fear = fearGenerated( people, rain, sharks );

//Challenge 3: Displaying Function Contents

var fearGenerated = function(numPeeps, rainInInches, numSharks) {
  	var rainFear = numPeeps * rainInInches;
  	var sharkFear = numSharks * numSharks * numSharks;
  	var totalFear = sharkFear + rainFear;
  	return totalFear;
	};

alert(fearGenerated);//the answer

//Challenge 4: Functions as Parameters, Arguments and Return Statements

var fear = fearGenerated(numPeeps, rainInInches, numSharks);

var fearMessage = function() {
  // Insert conditional statements here
  if (fear < 200){
    return "Fear Level: LOW\n" + "Still wanna ride?";
  } else if (fear >= 200 && fear <= 300){
    return "Fear Level: MEDIUM\n" + "Think you'll make it?";
  }
};

function confirmRide(confirmToGo) {
  return confirmToGo();
}

// Call confirmRide with the fearMessage function
var startRide = confirmRide(fearMessage);


/*Function Expressions As Direct Parameters*/

//Challenge 1: Using Map with Arrays

var passengers = [ ["Thomas", "Meeks"],
                   ["Gregg", "Pollack"],
                   ["Christine", "Wong"],
                   ["Dan", "McGaw"] ];
 
var modifiedNames = passengers.map(function (arrayCell){return arrayCell.join(" ");});

//Challenge 2: Using Map with Arrays II

var modifiedNames = [ "Thomas Meeks",
                      "Gregg Pollack",
                      "Christine Wong",
                      "Dan McGaw" ];

modifiedNames.map(function (arrayCell){alert ("Yo, " + arrayCell + "!");});

//Challenge 3: Expressions Inside Arrays - You could put functions as elements of an array.

var puzzlers = [function (input){return 3 * input-8;},
				function (input){return Math.pow((input + 2),3);},
				function (input){return ((Math.pow(input,2)) - 9);},
				function (input){return (input % 4);},
				];

/*Returned Functions and Immediate Invocation*/

//Challenge 1: Returning Functions Inside Conditional Statements

function adventureSelector(userChoice) {
  // return anonymous functions inside conditional blocks
  if (userChoice == 1){
  	return function (){alert("You selected the Vines of Doom!");};
  } else if (userChoice == 2) {
  	return function (){alert("Looks like you want the Lake of Despair!");};
  } else if (userChoice == 3) {
  	return function (){alert("The Caves of Catastrophe!");};
  }
}

//Challenge 2: Immediately-Invoked Adventure!

//Write one line of code that calls adventureSelector, passes it 3 as an argument, and that immediately invokes the function that gets returned. Here’s adventureSelector for your reference:

function adventureSelector(userChoice) {
  if (userChoice == 1) {
    return function() {
      alert("You selected the Vines of Doom!");
    };
  } else if (userChoice == 2) {
    return function() {
      alert("Looks like you want the Lake of Despair!");
    };
  } else if (userChoice == 3) {
    return function() {
      alert("The Caves of Catastrophe!");
    };
  }
}

adventureSelector(3)();

//Challenge 3: Queue Builder

var puzzlers = [
  function(a) { return 8 * a - 10; },
  function(a) { return (a - 3) * (a - 3) * (a - 3); },
  function(a) { return a * a + 4; },
  function(a) { return a % 5; }
];

var start = 2;

// build applyAndEmpty function expression here

var applyAndEmpty = function (input, puzzlers){
	for (i = input; i <= puzzlers.length; i++){
		puzzlers.shift();
	}
}

applyAndEmpty(start,puzzlers);

//Challenge 4: Immediately-Invoked Puzzler

var puzzlers = [
  function(a) { return 8 * a - 10; },
  function(a) { return (a - 3) * (a - 3) * (a - 3); },
  function(a) { return a * a + 4; },
  function(a) { return a % 5; }
];










