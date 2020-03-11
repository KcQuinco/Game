			
			var ai = {
				hp:100,
			};

			var player = {
				hp:100,
			};

			var aichoice;
			var pchoice; 

			function Main() {
				aichoice = 1;
				pchoice = 1;
				document.getElementById("toss").disabled = false;		
			}

			function Ey_ay() {
				whowins();

				var random = Math.round(Math.random());
				var varattack = Math.round(Math.random()*5);

				if(random == 1) {
					aichoice = 1;	//1 is equal to attack
					document.getElementById("actionofai").innerHTML= "Attack " +varattack;
					if (pchoice == 0) { //player acts defensive
						if(varattack <= 3){	//if values of varattack is 3 or less than it, then it will not change the current hp of the player
							player.hp = player.hp;
							document.getElementById("blank").innerHTML = " " +player.hp;
						}
						else {	//else, it will affect but only the value minus 3
							player.hp -= (varattack-3);
							document.getElementById("blank").innerHTML = " " +player.hp;
						}	
					}
					else {	//which means that pchoice is not equal to 0 which also means that player will attack
						player.hp -= varattack;
						document.getElementById("blank").innerHTML = " " +player.hp;
					}
				}
				else {	//random == 0 and the ai chooses to act defensively
					aichoice = 0;
					document.getElementById("actionofai").innerHTML= "Defend";
				}
			}

			function Ple_yer() {
				whowins();
				
				var varattack = Math.round(Math.random()*5);

				if (pchoice == 1) {//player wants to attack
					document.getElementById("actionofplayer").innerHTML= "Attack " +varattack;
					if (aichoice == 0) { //ai acts defensive
						if(varattack <= 3){	
							ai.hp = ai.hp;
							document.getElementById("blank1").innerHTML = " " +ai.hp;
							Ey_ay();
						}
						else {
							ai.hp -= (varattack-3);
							document.getElementById("blank1").innerHTML = " " +ai.hp;
							Ey_ay();
						}
					}
					else {	//aichoice is equal to one and means that the ai is defensive
						ai.hp -= varattack;
						document.getElementById("blank1").innerHTML = " " +ai.hp;
						Ey_ay();
					}
				}
				else {	//player would act on defense
					document.getElementById("actionofplayer").innerHTML = "Defend";
					Ey_ay();
				}
			}

			function whowins() {
				if (player.hp <= 0) {
					player.hp = 0;
					document.getElementById("blank").innerHTML = " " +player.hp;
					alert ("AI wins! You lost! Be ashamed of yourself. Go stand in a corner and cry");
				}
				else if (ai.hp <=0) {
					ai.hp = 0;
					document.getElementById("blank1").innerHTML = " " +ai.hp;
					alert ("You win! You can now stand up and leave the computer");
				}
				return;
			}

			function Toss() {
				var coin = Math.round(Math.random());
					if (coin == 0) {
						document.getElementById("toss2").innerHTML = "HEADS!";
						document.getElementById("toss1").disabled = true;
					}
					else {
						document.getElementById("toss2").innerHTML = "TAILS!";
						document.getElementById("toss1").disabled = true;
						Ey_ay();
					}
			}

			function playerp() {
				pchoice = 1;
				Ple_yer();
			}
				
			function playerd() {
				pchoice = 0;
				Ple_yer();
			}	