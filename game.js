
var health = 100;

function slap(){
	health = health - 1;
	alert(health);
}

var update = document.getElementById('playerHealth')

function updateHealth(){
	update.innerText = health.toString();
}

updateHealth();