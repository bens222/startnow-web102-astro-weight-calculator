// Write your JavaScript code here!


var selectPlanets = document.getElementById("planets"); // used to appendChild "select" element to add the array to the dropdown menu
// array of planets being used in calculation
var planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]
  ];

// this reverses the order the array - Sun first Pluto last
planets.reverse();

// this for loop adds planet name to dropdown menu, uses 2 variables above
for(var i = 0; i < planets.length; i++) {
    var planetName = planets[i][0];
    var createNew = document.createElement("option");
    createNew.textContent = planetName;
    createNew.value = planetName;
    selectPlanets.appendChild(createNew);
};
// this will add custom planets to dropdown menu
function newPlanet() {

    var newPlanetName = document.getElementById('new-planet-name').value;
    var newPlanetMultiplier = document.getElementById('new-planet-multiplier').value;
    var pushThis = [newPlanetName, newPlanetMultiplier];
    planets.push(pushThis);
    console.log(pushThis)

    var newPlanet = planets[planets.length-1][0];
    var createNew = document.createElement("option");
    createNew.textContent = newPlanet;
    createNew.value = newPlanet; 
    selectPlanets.appendChild(createNew);
    alert('Planet ' + newPlanetName + ' has been added!')
};
document.getElementById('add-button').addEventListener('click', newPlanet);

// function for calculating correct weight
function calculateWeight(userWeight, planetName) {
    for(i=0; i < planets.length; i++) {
        if( planetName == planets[i][0]) {
         return planets[i][1] * userWeight;
        }
    };
};

// function for iniating the calculation and returning the correct weight
function handleClickEvent() {
    var userWeight = document.getElementById('user-weight').value;
    var planetName = document.getElementById("planets").value;
    var weight = calculateWeight(userWeight, planetName);

    document.getElementById('output').innerHTML = ('If you were on ' + planetName + ', you would weigh ' + weight + 'lbs!');
    
};
// click event using the above function to initiate calculation and display message
document.getElementById('calculate-button').addEventListener('click', handleClickEvent);

// hiding and showing Pluto from drop down list
function editPluto() {
    var dropDownMenu = document.getElementById('planets');
    var checkbox = document.getElementById('checkbox')
    if(checkbox.checked === true) {
        dropDownMenu[10].style.display = "none";
        alert("You don't consider Pluto a planet!");
    } else {
        dropDownMenu[10].style.display = "";
        alert("You consider Pluto a planet!");
    }
};
// click event using the above function to add and show Pluto
document.getElementById('checkbox').addEventListener('click', editPluto);







