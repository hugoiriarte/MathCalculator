"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 11
   Case Problem 2

   Author: Hugo 	
   Date:   6/26/18
   
   Filename: mt_calc.js
	
*/

//on load the main function will run
window.onload = init();

function init(){
	var calcButtons = document.getElementsByClassName("calcButton");
	for(var i = 0; i < calcButtons.length; i++){
		calcButtons[i].onclick = buttonClick;
	}
	
	document.getElementById("calcWindow").onkeydown = calcKeys;
	
}


function buttonClick(e){
	var calcValue = document.getElementById("calcWindow").value;
	var calcDecimal = document.getElementById("decimals").value;
	var buttonValue = e.target.value;
	
	switch (buttonValue){
		case "del":
			calcValue = "";
			break;
			
		case "bksp":
			calcValue = eraseChar(calcValue);
			break;
			
		case "enter":
			calcValue += " = " + evalEq(calcValue, calcDecimal) + "\n";
			break;
			
		case "prev":
			calcValue += " = " + lastEq(calcValue, calcDecimal) + "\n";
			break;
			
		default:
			calcValue +=  buttonValue;	
	}
	
	
	document.getElementById("calcWindow").value = calcValue;
	
	document.getElementById("calcWindow").focus();
	
}

function calcKeys(e){
	var calcValue = document.getElementById("calcWindow").value;
	var calcDecimal = document.getElementById("decimals").value;
	
switch(e.key) {
        case "Delete":
            calcValue = "";
            break;
        case "Enter":
            calcValue += " = " + evalEq(calcValue, calcDecimal) + "\n";
            break;
        case "ArrowUp":
            calcValue += lastEq(calcWindow.value);
            e.preventDefault();
            break;
        }
		
	document.getElementById("calcWindow").value = calcValue;
	
	
}






/* ===================================================================== */

function eraseChar(textStr) { 
   return textStr.substr(0, textStr.length - 1);
}

function evalEq(textStr, decimals) {
   var lines = textStr.split(/\r?\n/);
   var lastLine = lines[lines.length-1];
   var eqValue = eval(lastLine);
   return eqValue.toFixed(decimals);
}  

function lastEq(textStr) {
   var lines = textStr.split(/\r?\n/);
   var lastExp = lines[lines.length-2];
   return lastExp.substr(0, lastExp.indexOf("=")).trim();
}