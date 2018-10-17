// The Triathlon Challenge Game is a single player 4-round course advancement game. 
// First Roll - Player is assigned a sponsor. (worth 0 - 5pts) 
// Second Roll - Course is revealed (Crossfit, Swim, Bike, Run)
// Third Roll - Players progress revealed by % of completion. (worth 10-40pts)
// Fourth Roll - Player rolls to reveal skill level.(worth 5-15pts)
// Fifth Roll - Player rolls to reveal experience.
// Sixth Roll - Player rolls for perks and advantages.
// With the right combination perks and advantages player will complete or fail race.(worth 10-30pts)
// Player WINS if they have 100+pts 

let firstRoundRoll;
let playerSponsor;
let firstRoundTally = 10;
firstRound();
   
    function firstRound() {
        teamSponsors=["Nike", "Adidas", "Reebox", "Under Armour", "New Balance"];
        firstRoundRoll = Math.floor(Math.random()*6+1);
        
                if  (firstRoundRoll == 6) {
                    playerSponsor = teamSponsors[0].toString();
                    return console.log("You rolled:" + " " + firstRoundRoll  + "\n" + 
                    "Your Sponsor is:" + " " + playerSponsor + "\n" + "Your tally is:" + " " + firstRoundTally);
                }
                else if (firstRoundRoll == 5) {
                    playerSponsor = teamSponsors[1].toString();
                    return console.log("You rolled:" + " " + firstRoundRoll  + "\n" + 
                    "Your Sponsor is:" + " " + playerSponsor + "\n" + "Your tally is:" + " " + firstRoundTally);
                }
                else if (firstRoundRoll == 4) {
                    playerSponsor = teamSponsors[2].toString();
                    return console.log("You rolled:" + " " + firstRoundRoll  + "\n" + 
                    "Your Sponsor is:" + " " + playerSponsor + "\n" + "Your tally is:" + " " + firstRoundTally);
                }
                else if (firstRoundRoll == 3) {
                    playerSponsor = teamSponsors[3].toString();
                    return console.log("You rolled:" + " " + firstRoundRoll  + "\n" + 
                    "Your Sponsor is:" + " " + playerSponsor + "\n" + "Your tally is:" + " " + firstRoundTally);
                }
                else if (firstRoundRoll == 2) {
                    playerSponsor = teamSponsors[4].toString();
                    return console.log("You rolled:" + " " + firstRoundRoll  + "\n" + 
                    "Your Sponsor is:" + " " + playerSponsor + "\n" + "Your tally is:" + " " + firstRoundTally);
                }
                else {
                    playerSponsor = teamSponsors[5].toString();
                    return console.log("You rolled:" + " " + firstRoundRoll  + "\n" + 
                    "Your Sponsor is:" + " " + playerSponsor + "\n" + "Your tally is:" + " " + firstRoundTally);
                }
         }

//Second Roll - Course is revealed (Crossfit, Swim, Bike, Run)
  
    let secondRoundRoll;
    let courseChallenge; 
    triathlonCourse();

        function triathlonCourse() {
        let playerCourseChallenge=["400-Rep Crossfit Endurance", "1600yd. Swim", "160km Cycling Race", "8k Run"];
        secondRoundRoll = Math.floor(Math.random()*4+1);

            if (secondRoundRoll == 0) {
                courseChallenge = playerCourseChallenge[0].toString();
                return console.log("You rolled:" + " " + secondRoundRoll  + "\n" + "Your course challenge is:" + " " + courseChallenge);
            }
            else if (secondRoundRoll == 1) {
                courseChallenge = playerCourseChallenge[1].toString();
                return console.log("You rolled:" + " " + secondRoundRoll  + "\n" + "Your course challenge is:" + " " + courseChallenge);
            }
            else if (secondRoundRoll == 2) {
                courseChallenge = playerCourseChallenge[2].toString();
                return console.log("You rolled:" + " " + secondRoundRoll  + "\n" + "Your course challenge is:" + " " + courseChallenge);
            }
            else if (secondRoundRoll == 3) {
                courseChallenge = playerCourseChallenge[3].toString();
                return console.log("You rolled:" + " " + secondRoundRoll  + "\n" + "Your course challenge is:" + " " + courseChallenge);
            }
        }
    
// Third Roll - Players progress revealed by % of completion.
    
    let thirdRoundPoints;
    let thirdRoundRoll;
    let courseProgress;
    let progressPercent;
    courseLocation();

    function courseLocation() {
        progressPercent=["0%", "25%", "50%", "75%"];
        thirdRoundRoll = Math.floor(Math.random()*8+1);

        if (thirdRoundRoll >= 6) {
            courseProgress = progressPercent[3].toString();
            return console.log("You rolled:" + " " + thirdRoundRoll + "\n" + "You've completed:" + " " + courseProgress + " " + "of the course.");
        }
        else if (thirdRoundRoll >= 4 || thirdRoundRoll < 6 ) {
            courseProgress = progressPercent[2].toString();
            return console.log("You rolled:" + " " + thirdRoundRoll + "\n" + "You've completed:" + " " + courseProgress + " " + "of the course.");
        }
        else if (thirdRoundRoll >= 2 || thirdRoundRoll < 4 ) {
            courseProgress = progressPercent[1].toString();
            return console.log("You rolled:" + " " + thirdRoundRoll + "\n" + "You've completed:" + " " + courseProgress + " " + "of the course.");
        }
        else if (thirdRoundRoll >= 1 || thirdRoundRoll < 2 ) {
            courseProgress = progressPercent[1].toString();
            return console.log("You rolled:" + " " + thirdRoundRoll + "\n" + "You've completed:" + " " + courseProgress + " " + "of the course.");
        }
    }    

   // Player rolls to reveal skill level.
    
    let playerSkillLevel;
    let fourthRoundRoll;
    let skinInGame;
    let fourthRoundPoints = (fourthRoundRoll * 2);
    playerSkill();

       function playerSkill() {
            skinInGame=["Novice", "Intermediate", "Advanced", "Expert"];
            fourthRoundRoll = Math.floor(Math.random()*12+1);
    
        if (fourthRoundRoll >= 10) {
            playerSkillLevel = skinInGame[3].toString();
            return console.log("You rolled:" + " " + fourthRoundRoll + "\n" + "Your skill level is:" + " " + playerSkillLevel + "\n" +
            "Round 4 Score:" + " " + fourthRoundPoints);
        }
        else if (fourthRoundRoll >= 8 || fourthRoundRoll < 10){
            playerSkillLevel = skinInGame[2].toString();
            return console.log("You rolled:" + " " + fourthRoundRoll + "\n" + "Your skill level is:" + " " + playerSkillLevel + "\n" +
            "Round 4 Score:" + " " + fourthRoundPoints);
        }
        else if (fourthRoundRoll >= 3 || fourthRoundRoll < 8){
            playerSkillLevel = skinInGame[1].toString();
            return console.log("You rolled:" + " " + fourthRoundRoll + "\n" + "Your skill level is:" + " " + playerSkillLevel + "\n" +
            "Round 4 Score:" + " " + fourthRoundPoints);
        }
        else if (fourthRoundRoll >= 1 || fourthRoundRoll < 3){
            playerSkillLevel = skinInGame[0].toString();
            return console.log("You rolled:" + " " + fourthRoundRoll + "\n" + "Your skill level is:" + " " + playerSkillLevel + "\n" +
            "Round 4 Score:" + " " + fourthRoundPoints);
        }
    }
       
         // Player rolls to reveal years of experience.
          
        let fifthRoundPoints = playerExperience()*2;
        let playerExperienceLevel = playerExperience();
        fifthRoundRoll;
        playerExperience()

            function playerExperience() {
                let fifthRoundRoll = Math.floor(Math.random()*20+1);
                return console.log("You rolled:" + " " + fifthRoundRoll + "\n" + "Years of experience:" + " " + playerExperienceLevel + "\n" +
                "Round 5 Score:" + " " + fifthRoundPoints);
          }


     // Player rolls to reveal perks and advantages.
        sixthRoundPoints = playerAdvantage()*2;
        let sixthRoundRoll;
        let playerPerk;
        playerAdvantage()
        
        function playerAdvantage() {
            sixthRoundRoll = Math.floor(Math.random()*10+1);
            playerPerkOptions=["Multivitamin", "Creatine", "Creatine", "BCAAs", "Glutamine", "Casein Protein", "Fish Oils", "Magnesium", "Inulin Fiber", "Vitamin D"];
        
            if (sixthRoundRoll == 10) {
            playerPerk = playerPerkOptions[0].toString();
            return console.log("You rolled:" + " " + sixthRoundRoll + "\n" + "Your perk:" + " " + playerPerk + "\n"
            "Round 6 Score:" + " " + sixthRoundPoints);
        }
        else if (sixthRoundRoll == 9) {
            playerPerk = playerPerkOptions[1].toString();
            return console.log("You rolled:" + " " + sixthRoundRoll + "\n" + "Your perk:" + " " + playerPerk + "\n"
            "Round 6 Score:" + " " + sixthRoundPoints);
        }
        else if (sixthRoundRoll == 8) {
            playerPerk = playerPerkOptions[2].toString();
            return console.log("You rolled:" + " " + sixthRoundRoll + "\n" + "Your perk:" + " " + playerPerk + "\n"
            "Round 6 Score:" + " " + sixthRoundPoints);
        }
        else if (sixthRoundRoll == 7) {
            playerPerk = playerPerkOptions[3].toString();
            return console.log("You rolled:" + " " + sixthRoundRoll + "\n" + "Your perk:" + " " + playerPerk + "\n"
            "Round 6 Score:" + " " + sixthRoundPoints);
        }
        else if (sixthRoundRoll == 6) {
            playerPerk = playerPerkOptions[4].toString();
            return console.log("You rolled:" + " " + sixthRoundRoll + "\n" + "Your perk:" + " " + playerPerk + "\n"
            "Round 6 Score:" + " " + sixthRoundPoints);
        }
        else if (sixthRoundRoll == 5) {
            playerPerk = playerPerkOptions[5].toString();
            return console.log("You rolled:" + " " + sixthRoundRoll + "\n" + "Your perk:" + " " + playerPerk + "\n"
            "Round 6 Score:" + " " + sixthRoundPoints);
        }
        else if (sixthRoundRoll == 4) {
            playerPerk = playerPerkOptions[6].toString();
            return console.log("You rolled:" + " " + sixthRoundRoll + "\n" + "Your perk:" + " " + playerPerk + "\n"
            "Round 6 Score:" + " " + sixthRoundPoints);
        }
        else if (sixthRoundRoll == 3) {
            playerPerk = playerPerkOptions[7].toString();
            return console.log("You rolled:" + " " + sixthRoundRoll + "\n" + "Your perk:" + " " + playerPerk + "\n"
            "Round 6 Score:" + " " + sixthRoundPoints);
        }
        else if (sixthRoundRoll == 2) {
            playerPerk = playerPerkOptions[8].toString();
            return console.log("You rolled:" + " " + sixthRoundRoll + "\n" + "Your perk:" + " " + playerPerk + "\n"
            "Round 6 Score:" + " " + sixthRoundPoints);
        }
        else if (sixthRoundRoll == 1) {
            playerPerk = playerPerkOptions[9].toString();
            return console.log("You rolled:" + " " + sixthRoundRoll + "\n" + "Your perk:" + " " + playerPerk + "\n"
            "Round 6 Score:" + " " + sixthRoundPoints);
        }
    }

// Create function to run game.
// Create function to Tally Points and give a final report.