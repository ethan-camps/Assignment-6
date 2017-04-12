// P5 STUFF

var sensor1;
var sensor2;

var brightness; //mouseX is brightness



function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background('lavender');
	fill(Number(sensor2),Number(sensor1),100);
	noStroke();

	if(sensor1 <= 300){

	ellipse(width/2, height/2, sensor2+50, sensor2+50);

	}
	else if(sensor1 >= 300){
		ellipse(width/2+100, height/2, sensor2/3+50, sensor2+50);
		ellipse(width/2-100, height/2, sensor2/3+50, sensor2+50);	

	}

	

		noFill();
		stroke('red');
		strokeWeight(50);
		rect(0,0,width-sensor1,height-sensor1);

		noFill();
		stroke('green');
		strokeWeight(100);
		rect(0,0,width-sensor1/2,height-sensor1/2);

		noFill();
		stroke('pink');
		strokeWeight(75);
		rect(0,0,width-sensor1/3,height-sensor1/3);

		noFill();
		stroke('cyan');
		strokeWeight(20);
		line(0,height,0+sensor1,height-sensor1/1.75);

		noFill();
		stroke('maroon');
		strokeWeight(20);
		line(0,height-35,0+sensor1,height-sensor1/1.5555);

		

	










	

	//Brightness should have a value between 0-255
	brightness = Math.floor(map(mouseX, 0, width, 0, 255));
}


function mouseClicked(){

	
	//send brightness to the server!

	socket.emit('led',brightness);


	console.log(brightness);




}

// all non-p5 javascript needs to go inside init 
// so that it executes once the page has loaded
function init(){


}

window.addEventListener('load', init);


