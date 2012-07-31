// Author Mark Thompson
// Van check javascript
$(document).ready(function(){	
//getElementById Function************************************************************
	function gtID(x){
		var theElement = document.getElementById(x);
		return theElement;
	}
	
//***********************************************************************************
//Checking to see if name is stored in local storage
//if user name is stored in local storage then run this 
console.log(localStorage.name);
		if(localStorage.name != undefined){
		formDiv.style.display = "none";	
		var value = localStorage.name;
		var obj = JSON.parse(value);
		//----------------------------------------------------------
					for(var n in obj){
				var makeSubLi = document.createElement('li');
				displayName.appendChild(makeSubLi);
				var optSubText = obj[n][0] + " is ready for VanCheck!";
				makeSubLi.innerHTML = optSubText;
				alert(optSubText);	
			    }
		//----------------------------------------------------------
		var yellowVanCheck = "in";
		var greenVanCheck = "in";
		if (yellowVanCheck === "in"){
			var makeButton = document.createElement('li');
			yellowVan.appendChild(makeButton);
			var vanAvailText = "Available";
			makeButton.innerHTML = vanAvailText;
			alert("this is a test");
		}//yellowVanCheck
		else{
			alert("Van is checked out!");
		}
//********************************************************************************	
		}else{
//**********************************************************************************
//if name is not stored ask for users first and last name. 
function storeData(key){
//if there is no key, this means this is a new item and needs a new key
		if (!key){
			var id = "name";
		}else{
// set the id to the existing key so that it was save over the data
// the key is the same key thats been passed along from the editSubmit even handler
//to the validate function,. and then passed here, into the storeData function 
			id=key;
		}
		var name 				= {};
			name.FirstName		= [$('#firstName').val()];
		localStorage.setItem(id, JSON.stringify(name));		
		alert("Name Stored");
		window.location.reload(true);
	}
		function validate(e){
//define the elements we want to check
		var getFirstName = gtID('firstName');
// get error messages
		var messageAry = [];
// first name validation
		if(getFirstName.value === ""){
			var firstError = "Please enter first name";
			$(getFirstName).css("border","1px solid red");
			messageAry.push(firstError);
		}
//if there are errors.... display them 
		if(messageAry.length >= 1){
			for(var i=0, j=messageAry.length; i < j; i++){
				var txt = $('<li></li>').html(messageAry[i]);
				errMsg.append(txt);
			}
			e.preventDefault();
		    return false;
		}else{
//if everything is fine save the data... send the key value
//remember the key value
			storeData(this.key);
		}	
	}


	console.log(localStorage.length);
var errMsg = $('#errors');
var save = $('#submit');
$(save).click(validate);
}
});