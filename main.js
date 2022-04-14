let numberRound = prompt ("how many rounds do you want to play.")

let globalties=0
let globalwins=0
let globallosses=0
for (let i =0 ;i <numberRound;i++ ){
    let userChoice=prompt("rock, paper, or scissors")
    let randomNumber=Math.floor(Math.random()*3);

    if(randomNumber===0){
        computerChoice= "rock";
    }
    if(randomNumber===1){
        computerChoice= "paper";
    }
    if(randomNumber===2){
        computerChoice= "scissors";
    }
    if(userChoice===computerChoice){
        alert("its a tie")
        globalties++
    }
    else if(userChoice==="paper" && computerChoice==="rock"){
        alert("you won!")
        globalwins++
    }
    else if(userChoice==="scissors" && computerChoice==="paper"){
        alert("you won!")
        globalwins++
    }
    else if(userChoice==="rock" && computerChoice==="scissors"){
        alert("you won!")
        globalwins++
    }
    else{
        alert("you lost")
        globallosses++
    }

    
}
alert ("you won " + globalwins + " times")
alert ("you lost " + globallosses + " times")
alert ("you tied " + globalties + " times")