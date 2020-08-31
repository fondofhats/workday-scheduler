$(function() {});

var today = moment().format("dddd, MMMM Do");

var now = moment().format("H A");

// displays the current day
$("#currentDay").text(today);


console.log("Today: " + today);
console.log("now: " + now);