var loadedJSON;
var nightData;
var startingScore=1;
var badColor, okayColor, safeColor;
var img;
// 

var badColorCode = '#fa5f65';
var okayColorCode = '#415D83';
var safeColorCode = '#04DCA2';

function preload() {
  var url = 'data/data.json';
  loadedJSON = loadJSON(url);
}


function setup() {
	nightData = loadedJSON.night;
	console.log(nightData);
	createCanvas(windowWidth,windowHeight);
	background('#1E3049');
	badColor = color('#fa5f65');
	okayColor = color('#415D83');
	safeColor = color('#04DCA2');

	drawCards();	
}

function draw(){
}


// function drawCards(){
// 	var xPos = 100;
// 	var yPos = 100;
// 	var space =190;
	
// 	nightData.forEach(function(e){

// 		var img=loadImage("img/"+e.image);
// 		console.log("image appears");

// 		fill(255);
// 		textSize(20);
// 		image(img, xPos, yPos,210,210);
		
// 		textAlign(CENTER);
// 		if(e.score<2)fill(safeColor);
// 		if(e.score>1&&e.score<4)fill(okayColor);
// 		if(e.score>3)fill(badColor);
// 		text(e.brand+' '+e.role, xPos, yPos+200,190,190);
// 		xPos+=space;
		
// 		})
// }

function drawCards(){
	nightData.forEach(function(e){

	var currentColor = safeColorCode;
	if(e.score>2) {
		currentColor = okayColorCode;
	}
	if(e.score>4) {
		currentColor = badColorCode;
	}

	var htmlToAppend = 
	'<div class="card-container centered">'+
		'<div class="card-n" onClick="doThis(event)">'+
		  '<img src="img/'+e.image+'">'+
		    '<h1>'+e.brand+'</h1>'+
		    '<h2>'+e.productName+'</h2><h3 style="color:'+currentColor+'">'+e.score+'</h3>'+
	  '</div>'+
	  // '<div>+'12345'+</div>'+
	'</div>';

  return $('#jscontainer2').append(htmlToAppend);
  })
}
	
// $(document).ready(function(e){

// //loading json file

// var url = "data/data.json";

// $.getJSON(url,function(json){


//     $.each(json.shoppingItem,function()
//     {
//         var output ='<li><img src= "'+e.images+'" alt ="'+e.brand+'"></li>';
//     });

//     $('.items').append(output);
// });
// });

function doThis(event){
	console.log(event);
	console.log(event.target);
	console.log('hello');
}



