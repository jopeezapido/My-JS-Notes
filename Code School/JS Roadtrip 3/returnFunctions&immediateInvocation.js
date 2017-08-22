/*Ticket System for the Forest Function Themepark*/

	var parkRides = [["Birch Bumpers", 40],["Pines Plunge", 55], ["Cedar Coaster", 20], ["Ferris Wheel of Firs", 90]];//the ride and the number of minutes to wait

	var fastPassQueue = ["Cedar Coaster","Pines Plunge", "Birch Bumpers", "Pines Plunge"];

	var firstFastPass = fastPassQueue.shift();
	console.log(firstFastPass);
	//var lastFastPass = fastPassQueue.push(firstFastPass);
	console.log("Current queue is " + fastPassQueue + "." );

//Make some tickets - Since functions can be treated as expressions, they can also be returned like values

	var wantsRide = "Pines Plunge";
	//var ticket = buildTicket( parkRides, fastPassQueue, wantsRide );
	buildTicket( parkRides, fastPassQueue, wantsRide )();//Or you can execute a function directly. This is an Immediately Invoked Function. There should be a open and close parentheses () at the end.
	console.log(fastPassQueue.length);


	function buildTicket ( allRides, passRides, pick ){
		if(passRides[0] == pick){
			var pass = passRides.shift();
			return function () { alert("Quick! You've got a Fast Pass to " + pass + "!");}//treating the function as an expression and returning it directly. No extra storange variable needed
		} else {
			for(var i = 0; i<allRides.length; i++){
				if(allRides[i][0] == pick){
					return function () {
						alert("A ticket is printing for " + pick + "!\n" + "Your wait time is about" + allRides[i][1] + " minutes.");//treating function as 	expression and returning it directly again. No variable needed.
					}
				}
			}
		}
	}


