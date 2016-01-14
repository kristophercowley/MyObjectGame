var player = {
	name: "Arnold",
	hits: 0,
	health: 100
}

var me = {
	name: 'Me',
	hits: 0,
	health: 100
}

function slap() {
	player.health = player.health - 1;
	player.hits = player.hits + 1;
	updateAll();
}

function kick() {
	player.health = player.health - 10;
	player.hits = player.hits + 1;
	updateAll();
}

function punch() {
	player.health = player.health - 5;
	player.hits = player.hits + 1;
	updateAll();
}

function force() {
	player.health = player.health - 20;
	player.hits = player.hits + 1;
	updateAll();
}

//Collection of update items to make an easier call
function updateAll() {
	updateHealth();
	updateHits();
	updateName();
	if (player.health < 30) {
		//health = 0;//not working
		document.getElementById("player-panel").classList.add("panel-danger");
	} else {
		document.getElementById("player-panel").classList.add("panel-default")

	}
	if (player.health <= 0) {
		player.health = 0;
		alert("You Win!")
	}
}

//Constructor
function Item(name, modifier, description) {
	this.name = name;
	this.modifier = modifier;
	this.description = description;
	this.draw = function(){
		//
	}
}


//Creates an array of objects with Item constructor
var itemsObj = {
	shield: new Item('Shield', player.health += 10, 'This is an awesome shield'),
	redbull: new Item('RedBull', player.health += 20, 'YYeeeaaaEEAAEAh!!!'),
	brass: new Item('Brass Knuckles', player.health -= 10, 'Ouch!')
}

var items = [itemsObj.shield,itemsObj.RedBull];

//Sets variables to placeholder IDs
var update = document.getElementById('playerHealth');
var playerName = document.getElementById('playerName');
var displayHits = document.getElementById('hits');

//Functions to display point values to the page
function updateHealth() {
	update.innerText = player.health.toString();
}

function updateName() {
	playerName.innerText = player.name;
}

function updateHits() {
	displayHits.innerText = player.hits.toString();
}

updateHealth();
updateName();
updateHits();