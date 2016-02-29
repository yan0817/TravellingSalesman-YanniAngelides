var dotX = [];
var dotY = [];

$(document).ready( function() {
	
	$("#canvas").click( function() {
		
		//get context of canvas
		var canvas = $("#canvas").get(0);
		var ctx = canvas.getContext("2d");
		
		//add point to canvas (write this)
		var x = (event.pageX)-11;
		var y = (event.pageY)-155;
		dotX.push(x);
		dotY.push(y);
		ctx.fillRect(x,y,5,5);
		
		
		//add point to arrays
		//dotX.push(event.pageX);
		//dotY.push(event.pageY);
	
	});
	
	$("#button2").click( function() {
		
		//do algorithm
		var nearX = [];
		var nearY = [];
		nearX.push(dotX[0]);
		nearY.push(dotY[0]);
		for(var i = 1; i < dotX.length; i++)
		{
			var smallest = 0;
			for(var j = 0; j < nearX.length; j++)
			{
				distanceCompare = Math.sqrt((Math.pow((dotX[i] - nearX[j]), 2)) + (Math.pow((dotY[i] - nearY[i]), 2)));
				if(distanceCompare < Math.sqrt((Math.pow((dotX[i] - nearX[smallest]), 2)) + (Math.pow((dotY[i] - nearY[smallest]), 2))))
				{
					smallest = j;
				}
			}
			dotX.splice(smallest,0,dotX[i]);
			dotY.splice(smallest,0,dotY[i]);
		}
		
		//draw lines between points
		var canvas = $("#canvas").get(0);
		var ctx = canvas.getContext("2d");	
		ctx.strokeStyle = "#FF00FF"; //change color of line
		ctx.lineWidth = 1; //change width of line
		for(var i = 0; i < nearX.length-1; i++)
		{
			ctx.beginPath();
			ctx.moveTo((nearX[i])+5,(nearY[i])+2);
			ctx.lineTo(nearX[i+1],(nearY[i+1])+2);
			ctx.stroke();
		}
		
		//draw a line between every point
		
	});
	
	
	$("#button3").click( function() {
		
		//do algorithm
		
		
		//draw lines between points
		var canvas = $("#canvas").get(0);
		var ctx = canvas.getContext("2d");	
		ctx.strokeStyle = "#55C"; //change color of line
		ctx.lineWidth = 4; //change width of line
		
		
		//draw a line between every point
		
	});
});
