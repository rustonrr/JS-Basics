//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

function isTyler (parameter) {
	if (parameter === "Tyler") {
		return true
	}else {
		return false
	}
}

isTyler(name);
  //Code Here

//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


  //Code Here

function getName() {
	var yourName = prompt("enter name");
	return yourName;
}
// getName(); stupid instrucitons

//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here
  
function welcome() {

	window.alert("Welcome, " + getName());

}
// welcome(); stupid instructions

//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

  //Answer Here
// Function parameters are the names listed in the function definition.
// Function arguments are the real values passed to (and received by) the function.


//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Answer Here
// 0, undefined, false, NaN, null, ""empty string.
// If it translates to false when evaluated in a Boolean context.



//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

  //Code Here
  function myName() {
  	return "Ruston";
  }


//Now save the function definition of myName into a new variable called newMyName

  //Code Here

  var newMyName = myName; 

//Now alert the result of invoking newMyName

 window.alert(newMyName());

//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here
  function outerFn () {
  	return function() {
  		return "Ruston";
  	}
  }

//Now save the result of invoking outerFn into a variable called innerFn.

  //Code Here

  var innerFn = outerFn();

//Now invoke innerFn.

innerFn;










