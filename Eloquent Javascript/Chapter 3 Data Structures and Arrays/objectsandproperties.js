/*Objects*/

  var day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running",
             "television"]
  };
  console.log(day1.squirrel);
  // → false
  console.log(day1.wolf);
  // → undefined
  day1.wolf = false;
  console.log(day1.wolf);
  // → false

  var outskirts = {
    hyena: true,
    events: ["wildebeest hunting", "laughing"],
  };
  console.log(outskirts.hyena);//true
  console.log(outskirts.hyena = "hanging with scar");//hanging with scar
  outskirts.otherActivities = "Planning on prideland takeover.";//create variable
  console.log(outskirts.otherActivities); 

//Accesing Objects and Its Properties

  var descriptions = {
    work: "Went to work",
    "touched tree": "Touched a tree"
  };

  var ww1 = {
    external: ["Assasination of Archduke Franz Ferdinand","Hostility in the Balkans"],
    underlying: ["Sense of Nationalism", "Industrial warfare guinea pig"],
    years: 4,
  };
                 
  console.log(ww1.external[1]);


//How A Tentacle Grasps and Objects and How To Cut Off the Tentacles

  var anObject = {left: 1, right: 2};
  console.log(anObject.left);
  // → 1
  delete anObject.left;
  console.log(anObject.left);
  // → undefined
  console.log("left" in anObject);
  // → false
  console.log("right" in anObject);
  // → true

  var colombia = {
    medellin: "Medellin Cartel",
    cali: "Cali Cartel",
    bogota: "Government",
  };

  console.log(colombia.medellin);
  delete colombia.medellin;
  console.log(colombia.medellin);
  var x = "medellin" in colombia;
  console.log(x);


//Checking Properties In An Object With The 'in' Operator

  var colombia = {
    medellin: "Medellin Cartel",
    cali: "Cali Cartel",
    bogota: "Government",
  };

  console.log(colombia.medellin);
  delete colombia.medellin;
  console.log(colombia.medellin);
  var x = "medellin" in colombia;
  console.log(x);


//Array Of Objects

  var journal = [
    {events: ["work", "touched tree", "pizza",
              "running", "television"],
     squirrel: false},
    {events: ["work", "ice cream", "cauliflower",
              "lasagna", "touched tree", "brushed teeth"],
     squirrel: false},
    {events: ["weekend", "cycling", "break",
              "peanuts", "beer"],
     squirrel: true},
    /* and so on... */
  ];

  var cartel = [
    {events: ["Illegal drug distribution","Hunting down enemies"],
     isPabloSatisfied: false},
    {events: ["play futbol", "hang out in La Catedral"],
     isPabloSatisifed: false},
    {events: ["plant bombs on cars", "give rewards to onlookers"],
     isPabloSatisfied: false},
    }
  ];


//Mutability - With objects, on the other hand, the content of a value can be modified by changing its properties.

  var object1 = {value: 10};
  var object2 = object1;
  var object3 = {value: 10};

  console.log(object1 == object2);
  // → true
  console.log(object1 == object3);
  // → false

  object1.value = 15;
  console.log(object2.value);
  // → 15
  console.log(object3.value);
  // → 10




