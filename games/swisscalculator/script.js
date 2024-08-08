//rules come from https://www.pokemon.com/static-assets/content-assets/cms2/pdf/play-pokemon/rules/play-pokemon-tournament-rules-handbook-03092020-en.pdf
//specifically the section 4.6.3, "Swiss + Single Elimination"

//an explanation of swiss Pokemon tournaments:

//In a swiss tournament format, wins grant 3 points, draws grant 1, and losses grant 0
//Each player plays a certain number of rounds and is matched against players who have the same number of points
//If there is a day 2, people with fewer than 19 points are eliminated and 5 or 6 more swiss rounds are played

//Whether there is a day 2 or not, after the swiss rounds the 8 players with the most points enter a single elimination bracket
//The goal of this program is to calculate the number of points needed to qualify for the top 8 single elimination
//Most players will agree with their opponent to intentionally draw in round 9 if they both have 18 points
//This will secure them a spot in the second phase of swiss

//More jargon like bubbling will be explained further in the program

//rounding method from https://www.sitepoint.com/rounding-numbers-javascript/
var dayOneRounds = 0;
var dayTwoRounds = 0;
var idRate = 0;

var scores = [];
var notDrawn;

function getNumber(idName){
    return document.getElementById(idName).value;
}

function setText(idName, content){
    document.getElementById(idName).innerHTML = content;
}

function main(){
  if(isNaN(getNumber("playersInput")) || isNaN(getNumber("drawRateInput")) || isNaN(getNumber("idRateInput"))){
    setText("outputText", "Please enter numbers in the inputs.");
    
  } else if (getNumber("playersInput") < 21){
    setText("outputText", "Tournaments with fewer than 21 players do not have a single elimination section, so they are not supported.");
  
  } else if (getNumber("drawRateInput") < 0 || getNumber("drawRateInput") > 1 || getNumber("idRateInput") < 0 || getNumber("idRateInput") > 1){
    setText("outputText", "Draw rates and Intentional Draw rates must be a decimal (between 0 and 1 inclusive).");
    
  } else {
    scores = [];
    calculateRounds(getNumber("playersInput"));
    calculateResults(getNumber("playersInput"), getNumber("drawRateInput"), getNumber("idRateInput"));
  }
}


function calculateResults(players, tieRate, idRate){
  scores[0] = players;
  for(var i = 0; i < dayOneRounds; i++){
    //this doesn't iterate through the entire scores list because that would be
    //inefficient, so it only goes through the possible scores(being rounds*3 + 1)
    //as each round increases the possible range of points by 3 and everyone begins at 0 points
    idNum = (dayOneRounds - 2) * 3;
    for(var j = (i * 3) + 3; j >= 0; j--){
    
      notDrawn = (scores[j] - (scores[j]*tieRate))/2;
      if(j == idNum){
         notDrawn = (scores[j] - (scores[j]*idRate))/2;
      }
      if(scores.length > j + 3){
        
        scores[j + 3] += notDrawn;
        
      }
      if(scores.length > j + 1){
        if(j == idNum){
            scores[j + 1] += idRate*scores[j];
        } else {
            scores[j + 1] += tieRate*scores[j];
        }   
          
      } 
      scores[j] = notDrawn;
      
    }
    
  }

  //all players who have less than 19 points (or a record of 6-2-1/5-0-4 or better)
  //are eliminated from competition after the day one rounds.
  if(dayTwoRounds > 0){
    for(var i = 0; i < 19; i++){
      scores[i] = 0;
    }
  
    for(var i = 0; i < dayTwoRounds; i++){
      
      //same concept as last time, but now I add dayOneRounds*3
      for(var j = (i * 3) + (dayOneRounds * 3) + 3; j >= 0; j--){
        notDrawn = (scores[j] - (scores[j]*tieRate))/2;
        if(scores.length > j + 3){
          scores[j + 3] += notDrawn;
        }
        if(scores.length > j + 1){
          scores[j + 1] += tieRate*scores[j];
        } 
        scores[j] = notDrawn;
        
      }
    
    }
  }
  var textOutput = "";
  var totalPlayers = 0;
  var day2Players = 0;
  var scoreNeeded = 0;
  //to bubble in or to bubble out means to be at a score in which there are more
  //people at the score than remaining spots in the top 8, so making it into the
  //top 8 is decided by the performance of your opponents. Bubbling in
  //means getting into the top 8 while bubbling out means not getting in.
  var bubbleIn = 0;
  var bubbleOut = 0;
  for(var i = scores.length; i > 0; i--){
    if(scores[i] > 0){
      if(i >= 18){
        day2Players += scores[i];
      }
      totalPlayers += scores[i];
      textOutput = i + " Points: " + scores[i].toFixed(3) + "<br>" + textOutput;
      if(bubbleIn == 0){
        if(totalPlayers > 8){
          scoreNeeded = i;
          bubbleIn = 8 - (totalPlayers - scores[i]);
          bubbleOut = scores[i] - bubbleIn;
        }
      }
    }
  }
  if(dayTwoRounds > 0){
    setText("outputText", textOutput + "There will be an average of " + day2Players.toFixed(3) + " players in Phase two. The bubble is on " + scoreNeeded + " points. " + bubbleIn.toFixed(3) + " people will bubble in and " + bubbleOut.toFixed(3) + " people will bubble out.");
  } else {
    setText("outputText", textOutput + "The bubble is on " + scoreNeeded + " points. " + bubbleIn.toFixed(3) + " people will bubble in and " + bubbleOut.toFixed(3) + " people will bubble out.");
  }
  setText("testText", getNumber(playersInput) + " " + getNumber(drawRateInput) + " " + getNumber(idRateInput));
  setText("testText", "WEOIFJWOEIFIOFJW");
}

function calculateRounds(players){
  //there are theoretical tournament structures for swiss + single elimination
  //tournaments with 12 or fewer people, but they are never used as tournaments
  //of such a small size will use a different format.
  
  //this cannot be replicated with a return without being far more complicated
  //because of the day one and a day two system
  
  dayOneRounds = 0;
  dayTwoRounds = 0;
  if (players <= 64){
    dayOneRounds = 6;
  } else if (players <= 128){
    dayOneRounds = 7;
  } else if (players <= 226){
    dayOneRounds = 8;
  } else if (players <= 799){
    dayOneRounds = 9;
    dayTwoRounds = 5;
  } else {
    dayOneRounds = 9;
    dayTwoRounds = 6;
  }
  for(var i = 0; i <= (dayOneRounds + dayTwoRounds) * 3; i++){
    scores.push(0);
  }
}