/*
This is empty on purpose! Your code to build the resume will go here.
 */

//$("#main").append("Rodrigo Jurado Barrera");

var _name = "Rodrigo Jurado Barrera";
var _role = ""
var _age = 32;
var _contactInfo="";
var _pictureURL="";
var _welcomeMessage="";
var _skills = ["awesomeness","Java"];

var bio = {

	name : _name,
	role : _role,
	contactInfo : _contactInfo,
	pictureURL :  _pictureURL,
	

};

var formattedName = HTMLheaderName.replace("%data%",_name);
var formattedRole = HTMLheaderRole.replace("%data%","Software Engineer");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


var awesomeThoughts = "I am " + _name +" and I am awesome";
var funThoughts = awesomeThoughts.replace("awesome","fun");





console.log(awesomeThoughts);
console.log(bio);
