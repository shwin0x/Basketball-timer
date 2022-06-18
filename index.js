let homeScore = 0
let AwayScore = 0
document.getElementById("displayLabelHome").textContent = homeScore
document.getElementById("displayLabelAway").textContent = AwayScore

function plusOneHome(){
    homeScore+=1
  //  console.log(homeScore)
    document.getElementById("displayLabelHome").textContent=homeScore
}

function plusTwoHome(){
    homeScore+=2
  //  console.log(homeScore)
    document.getElementById("displayLabelHome").textContent=homeScore
}

function plusThreeHome(){
    homeScore+=3
  //  console.log(homeScore)
    document.getElementById("displayLabelHome").textContent=homeScore
}

function plusOneAway(){
    AwayScore+=1
   // console.log(homeScore)
    document.getElementById("displayLabelAway").textContent=AwayScore
}

function plusTwoAway(){
    AwayScore+=2
   // console.log(homeScore)
    document.getElementById("displayLabelAway").textContent=AwayScore
}

function plusThreeAway(){
    AwayScore+=3
   // console.log(homeScore)
    document.getElementById("displayLabelAway").textContent=AwayScore
}
