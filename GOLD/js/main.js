/*
Project 3
Edward M Murray Jr
MIU 1211
main js File
GOLD APP
*/
$('#home').on('pageinit', function(){
	//code needed for home page goes here
});

/*var storeData = function(data){
	console.log(data);
};*/
	
$('#additem').on('pageinit', function(){

		var rform = $('#recipeform');
		    rform.validate({
			invalidHandler: function(form, validator) {
			
			},
			submitHandler: function() {
		var data = rform.serializeArray();
			storeData(data);
		}
	});
	
	function getSelectedRadio(){
		var radios = document.forms[0].category;
		for(var i=0; i<radios.length; i++){
			if(radios[i].checked){
				categoryValue = radios[i].value;
			}
		}
	}
	
	function storeData(data){
		var id					= Math.floor(Math.random()*100000001);
		getSelectedRadio()
		var item				= {};
			item.rname 			= ["Recipe Name:", $('input[rname]').val];
			item.dateadded 		= ["Date Added:", $('dateadded').value];
			item.rating 		= ["Rating:", $('rating').value];
			item.category 		= ["Category:", categoryValue];
			item.rtype 			= ["Recipe Type:", $('rtype').value];
			item.ringredients 	= ["Recipe Ingredients:", $('ringredients').value];
			item.rdirections 	= ["Recipe Directions:", $('rdirections').value];
			
		//Save into local storage
		localStorage.setItem(id, JSON.stringify(item));
		alert("Recipe Saved!");
	}
	
	
});

//The functions below can go inside or outside the pageinit function for the page in which it is needed.

var autofillData = function (){
	 
};

var getData = function(){

};

var storeData = function(data){
	
}; 

var	deleteItem = function (){
			
};
					
var clearLocal = function(){

};

