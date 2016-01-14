var name = "Ewok";
var hits = 0;
var health = 100;

function slap() {
	health = health - 1;
	hits = hits + 1;
	updateAll();
}

function kick() {
	health = health - 10;
	hits = hits + 1;
	updateAll();
}
function punch() {
	health = health - 8;
	hits = hits + 1;
	updateAll();
}
function force() {
	health = health - 50;
	hits = hits + 1;
	updateAll();
}
//Collection of update items to make an easier call
function updateAll() {
	updateHealth();
	updateHits();
	updateName();
	if (health <= 0) {
		//health = 0;//not working
		document.getElementById("player-panel").classList.add("panel-danger");
		alert("You Win This Time...")
		
	} else {
		document.getElementById("player-panel").classList.add("panel-default")

	}
}
//Constructor 
var Obj = function(name,modifier,description){
	this.name = name;
	this.modifier = modifier;
	this.description = description;
}
//Sets varianles to placeholder IDs
var update = document.getElementById('playerHealth');
var playerName = document.getElementById('playerName');
var displayHits = document.getElementById('hits');

//Functions to display point values to the page
function updateHealth() {
	update.innerText = health.toString();
}
function updateName() {
	playerName.innerText = name;
}
function updateHits() {
	displayHits.innerText = hits.toString();
}

updateHealth();
updateName();
updateHits();