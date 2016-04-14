var damage = 0;
var healthBarElem = document.getElementById('health-bar');
// Updates health bar
function updateHealthBar() {
    healthBarElem.style.width = player.health + "%";
}
//Creates an array of objects with Item constructor
var itemsObj = {
    shield: new Item('Shield', .3, 'This is an awesome shield'),
    redbull: new Item('RedBull', .5, 'YYeeeaaaEEAAEAh!!!'),
    jacket: new Item("Jacket", .1, 'Sweet!')
}

//Constructor for defensive items
function Item(name, modifier, description) {
    this.name = name;
    this.modifier = modifier;
    this.description = description;
    this.draw = function() {
        //
    }
}
//Creates the enemy player
var player = {
    name: "Arnold",
    hits: 0,
    health: 100,
    items: [itemsObj.shield, itemsObj.redbull, itemsObj.jacket],
    addMods: function() {
        var total = 0;
        for (var i = 0; i < player.items.length; i++) {
            total = total + player.items[i].modifier;
        }
        console.log(total)
    }
}

//  function totalDamage(){
// 	return damage * player.addMods()  

//  }
//Resets to initial values// Restarts game
function reset() {
    player.health = 100;
    player.hits = 0;
    updateAll();

}
//Beginning of a future me object
// var me = {
// 	name: 'Me',
// 	hits: 0,
// 	health: 100
// }

//Attack functions
function slap() {
    damage = 1;
    //player.health = player.health - 1;
    player.hits = player.hits + 1;
    updateAll();
}

function kick() {
    damage = 10;
    //player.health = player.health - 10;
    player.hits = player.hits + 1;
    updateAll();
}

function punch() {
    damage = 5;
    //player.health = player.health - 5;
    player.hits = player.hits + 1;
    updateAll();
}

function force() {
    damage = 20;
    //player.health = player.health - 20;
    player.hits = player.hits + 1;
    updateAll();
}

//Sets variables to placeholder IDs
var update = document.getElementById('playerHealth');
var playerName = document.getElementById('playerName');
var displayHits = document.getElementById('hits');

//Collection of update items to make an easier call
function updateAll() {
    //var marioElem = document.getElementById("mario");
    if (damage > 0) {
        player.health -= damage;
        var fireElem = document.getElementById("fire").attributes
        //document.getElementById("mario").classlist.add("vader")
    }

    //totalDamage();
    damage = 0;
    update.innerText = player.health.toString();
    playerName.innerText = player.name;
    displayHits.innerText = player.hits.toString();

    if (player.health < 30) {
        //health = 0;//not working
        document.getElementById("player-panel").classList.add("panel-danger");
        healthBarElem.classList.add('progress-bar-danger');
    } else if (player.health > 30 && player.health < 60) {
        document.getElementById("player-panel").classList.remove("panel-danger");
        document.getElementById("player-panel").classList.add("panel-warning");
        healthBarElem.classList.remove('progress-bar-danger');
        healthBarElem.classList.add('progress-bar-warning');
    } else {
        document.getElementById("player-panel").classList.remove("panel-danger");
        document.getElementById("player-panel").classList.remove("panel-warning");
        document.getElementById("player-panel").classList.add("panel-default");
        healthBarElem.classList.remove('progress-bar-danger');
        healthBarElem.classList.remove('progress-bar-warning');
        healthBarElem.classList.add('progress-bar-success');


    }
    if (player.health <= 0) {
        player.health = 0;
        alert("You Win!")
    }
    updateHealthBar();
}


//Initializes the page
updateAll();