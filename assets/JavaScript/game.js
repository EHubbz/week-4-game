
$(document).ready(function() {
	
	var targetNum;
	var gems = {};


	var wins = 0;
	var	losses = 0;
	var	userTotal;
	

	function startGame() {
		targetNum = Math.floor(Math.random() * 99);
		gems.diamond = Math.floor(Math.random() * 10);
		gems.emerald = Math.floor(Math.random() * 25);
		gems.ruby = Math.floor(Math.random() * 16);
		gems.sapphire = Math.floor(Math.random() * 9);


		userTotal = 0;
		
		$("#yourNum").html("Your total so far: " + userTotal);
		$("#magicNum").text("The magic number to guess is: " + targetNum);
		
	};
		//can all these be combined together?

		//would a "Play again" button keep the wins and losses from zeroing out every time?

	$(".gem").on("click",function(){

		var gem = $(this).attr('id');


		userTotal += gems[gem]
		$("#yourNum").html("Your total so far: " + userTotal);
		if (userTotal === targetNum) {
			wins ++;
			$("#wins").html("Wins: " + wins);
			
    		alert("You won!!");
    		console.log("you won");
    		startGame();

		}else if (userTotal >= targetNum) {
		    losses ++;
		    $("#losses").html("Losses: " + losses);
		    alert("Sorry, you lost! Try again!");
		    console.log("you lost");
		    startGame();
		}
	});

			//how to define userTotal so that it appears in div like targetNum does?


	startGame();
	$("#button").on("click", function(){
		startGame()
		console.log("button clicked");
	});

});
	





  