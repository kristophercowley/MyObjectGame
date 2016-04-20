var damage = 0;
var healthBarElem = document.getElementById('health-bar');
var winnerElem = document.getElementById('winner');
var bElem1 = document.getElementById('abled1');
var bElem2 = document.getElementById('abled2');
var bElem3 = document.getElementById('abled3');
var bElem4 = document.getElementById('abled4');
var fireElem = document.getElementById('fire');
var termElem = document.getElementById('term');
var initFireElem = document.getElementById('init-fire');
var centerFireElem = document.getElementById('init-fire2');
var enemyName = document.getElementById('enemyName');
enemyName.innerText = "Terminator Schwarzenegger"
termElem.style.visibility = 'visible';
fireElem.style.visibility = 'hidden';
initFireElem.style.visibility = 'hidden';
centerFireElem.style.visibility = 'hidden';

// Gets user name
function getName() {
    player.name = prompt('Enter a name for your player...');
    playerName.innerText = player.name;
}

function startGame() {
    reset();
    enableButtons();
    gameTimer();
}

// Global Timer variable
var interval;

//Game timer setup
function gameTimer() {
    var min = 0;
    var sec = 30;
    interval = setInterval(function() {
        if(sec < 10){
            document.getElementById("timer").innerHTML = min + " : 0" + sec;
        }else{
            document.getElementById("timer").innerHTML = min + " : " + sec;     
        }
        sec--;
        if (sec == 0) {
            clearInterval(interval);
            winnerElem.innerText = "Your going to have to be faster than that to kill me!";
            winnerElem.style.color = "red";
            sec = 30;
            disableButtons();
        }
    }, 1000);
}


// Sets alt image for hits
function isHit() {
    termElem.src = 'img/termhit-sm.png';
    setTimeout(function() { 
        if(player.health <= 0){
            termElem.src = 'img/boom-sm.png'
        }else{
            termElem.src = 'img/term.png' 
    }}, 100)
}

// Attack fire
function attackFullFire() {
    initFireElem.style.visibility = 'visible';
    setTimeout(hideInit, 200);
    setTimeout(function() { centerFireElem.style.visibility = 'visible' }, 200);
    setTimeout(hideCenter, 400)
    setTimeout(displayFire, 400);
    setTimeout(updateAll, 600);
    setTimeout(isHit, 600);
}
// display fire on attack
function displayFire() {
    fireElem.style.visibility = 'visible';
    setTimeout(hideFire, 200);
}

// hide fire
function hideFire() {
    fireElem.style.visibility = 'hidden';
}

// hide init fire
function hideInit() {
    initFireElem.style.visibility = 'hidden';
}

// hide center fire
function hideCenter() {
    centerFireElem.style.visibility = 'hidden';
}

// Disables buttons at 0 health
function disableButtons() {
    bElem1.disabled = true;
    bElem2.disabled = true;
    bElem3.disabled = true;
    bElem4.disabled = true;
}

// Enables buttons
function enableButtons() {
    bElem1.disabled = false;
    bElem2.disabled = false;
    bElem3.disabled = false;
    bElem4.disabled = false;
}

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
    name: "Sub-Zero",
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
    enableButtons();
    termElem.style.visibility = 'visible';
    winnerElem.innerText = "";
    termElem.src = 'img/term.png';
    clearInterval(interval);
    document.getElementById("timer").innerHTML =  "0 : 00";
}

//Beginning of a future enemy object
// var enemy = {
// 	name: 'Me',
// 	hits: 0,
// 	health: 100
// }

//Attack functions
function slap() {
    damage = 1;
    player.hits = player.hits + 1;
    attackFullFire();
    bElem1.disabled = true;
    setTimeout(function() { bElem1.disabled = false; }, 1000);
}


function punch() {
    damage = 5;
    player.hits = player.hits + 1;
    attackFullFire();
    bElem2.disabled = true;
    setTimeout(function() { bElem2.disabled = false; }, 5000);
}

function kick() {
    damage = 10;
    player.hits = player.hits + 1;
    attackFullFire();
    bElem3.disabled = true;
    setTimeout(function() { bElem3.disabled = false; }, 9000);
}

function force() {
    damage = 20;
    player.hits = player.hits + 1;
    attackFullFire();
    bElem4.disabled = true;
    setTimeout(function() { bElem4.disabled = false; }, 14000);
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
        termElem.src = 'img/boom-sm.png';
        player.health = 0;
        updateHealthBar();
        // disabled buttons come back after timeout
        disableButtons();
        debugger
        winnerElem.innerText = player.name + " Wins! The Terminator was destroyed in " + player.hits + " hits!";
        winnerElem.style.color = "green";
        clearInterval(interval);
    }
    updateHealthBar();

}


//Initializes the page
disableButtons();
updateAll();
getName();