"use strict";

let destinations = ["The Imperium of Man", "Ebberon", "Barovia", "The Shadowfell", "Hyperion"];
let restaurants = ["Blood on the Vine Pub and Grill", "Dairy Queen", "Winter's Cradle", "P.F. Chang's", "McDonald's"];
let transportations = ["Taxi", "via warp ship", "Magic", "Walking", "Car"];
let entertainments = ["Purging Herectics", "Acrobatics", "Shopping", "Magic Show", "Floating City"];

let destination = getRandom(destinations);
let restaurant = getRandom(restaurants);
let transportation = getRandom(transportations);
let entertainment = getRandom(entertainments);

showTrip();

let satisfaction = false;
let userHappy = prompt("Do you like the options provided, yes or no?");
isSatisfied();

function getRandom(thing) {
    let random = Math.floor(Math.random() * thing.length)
    return thing[random];
}

function showTrip() {
    console.log("*-----Trip Details-----*")
    console.log("Destination: " + destination);
    console.log("Restaurant: " + restaurant);
    console.log("Transportation: " + transportation);
    console.log("Entertainment: " + entertainment);
    console.log("");
}

function validateHappy(happy) {
    while (happy != "yes" && happy != "no") {
        happy = prompt(":::Invalid::: Are you happy? Enter yes or no only.");
    }
    return happy;
}

function validateProblem(theProblem) {
    while (theProblem < 1 || theProblem > 4) {
        theProblem = prompt("What would you like to change? 1 for destination, 2 for restaurant, 3 for transportation, 4 for entertainment");
    }
    return theProblem;
}

function isSatisfied() {
    while (satisfaction == false) {
        userHappy = validateHappy(userHappy);
        if (userHappy == "yes") {
            satisfaction = true;
        } else {
            solveProblem(userHappy);
        }
    }
    console.log("===Completed===");
    showTrip();
}

function solveProblem(happy) {
    let problem = prompt("What would you like to change? 1 for destination, 2 for restaurant, 3 for transportation, 4 for entertainment");
    while (userHappy == "no") {
        problem = validateProblem(problem);
        switch (problem) {
            case "1":
                destination = getRandom(destinations);
                break;
            case "2":
                restaurant = getRandom(restaurants);
                break;
            case "3":
                transportation = getRandom(transportations);
                break;
            case "4":
                entertainment = getRandom(entertainments);
                break;
        }
        showTrip();
        userHappy = prompt("Do you like the options provided, yes or no?");
        userHappy = validateHappy(userHappy);
        if (userHappy == "no") {
            problem = prompt("What are you unhappy with? 1 for Destination, 2 for Restaurant, 3 for Transportation, 4 for Entertainment");
        }
    }
}