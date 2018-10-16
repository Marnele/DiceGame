



// playerTotalPoints="undefined";
// playerSponsor="undefined";
// playerTriathelonEvent="undefined";
// playerSkillLevel="undefined";
// playerAdvantages="undefined";
// playerEquipment="undefined";
// playerTally="undefined";


   while (playerSponsor = undefined) {
    
    let firstRoll = executeFirstRoll();
    playerSponsor;
    let firstRoundPoints; 
    let teamSponsors = ["Nike", "Jordan", "Reebox", "Adidas", "Under Armor", "New Balance"];

    let playerSponsor = function executeFirstRoll() { //roll 6 sided die
        return console.log(Math.floor(Math.random()*6+1))
        }
        function getSponsors(){
            if  (firstRoll === 6) {
                playerSponsor = teamSponsors[0];
                firstRoundPoints = 10;
                let img = document.createElement("img");
                img.src = "Nike_logo_small.png";
                let src = document.getElementById("teamSponsor");
                src.appendChild(img);

            }if (firstRoll == 5) {
                playerSponsor = teamSponsors[1];
                firstRoundPoints = 10;
            }if (firstRoll == 4) {
                playerSponsor = teamSponsors[2];
                firstRoundPoints = 10;
            }if (firstRoll == 3) {
                playerSponsor = teamSponsors[3];
                firstRoundPoints = 10;
            }if (firstRoll == 2) {
                playerSponsor = teamSponsors[4];
                firstRoundPoints = 10;
            }if (firstRoll == 1) {
                playerSponsor = teamSponsors[5];
                firstRoundPoints = 10;
            }
        }
}