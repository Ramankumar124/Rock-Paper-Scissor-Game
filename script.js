let userScore=0;
let comScore=0;
let userScorePara=document.querySelector("#user-score")
let comScorePara=document.querySelector("#com-score")

let choices=document.querySelectorAll(".choice");

let msg=document.querySelector("#msg");


// input for user choice 
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
      const userOption=choice.getAttribute("id");
      playGame(userOption);
    })
})

// computer random input

const comInput=()=>{
    let options=["rock", "paper","scissors"];

  let comIdx= Math.floor((Math.random())*3);


   return  options[comIdx];
}

const playGame=(userOption)=>{
    
    // take user input from function
    console.log("User option is ",userOption);
    comInput();
    // take computer input
    let comOption=comInput();
    console.log("Comp option",comOption);

// if both have same value

let userWin=true;
    if(userOption===comOption){
        gameDraw();
    }
    else{ 
         if(userOption==="rock"){
        // scissor or paper
           if(comOption==="scissors"){
             userWin=true
            }
        else{userWin=false;}
    }
    else if(userOption==="paper"){
        //scissor, rock
        if(comOption==="rock"){
            userWin=true
           }
       else{userWin=false;}
    }

    else{// user option scissors
             //paper, rock
        if(comOption==="paper"){
            userWin=true
           }
       else{userWin=false;}
    }
}
//    console.log(userWin?"user jit gya":"com jit gya");
 showWinner(userWin,userOption,comOption);

}
 // draw function
function gameDraw() {
    console.log("the game  is draw ");
    msg.innerText="The Game is Draw";
}

const showWinner=(userWin,userOption,comOption)=>{
  if(userWin){
   let user= userOption;
   let comp=comOption;
  msg.innerText=`User Win ${user} beats ${comp}`;
  userScore++;
  userScorePara.innerText=userScore;

  msg.style.backgroundColor="green"
  }
  else{
    msg.innerText=`Computer Win ${comOption} beats ${userOption}`;
    msg.style.backgroundColor="red";
    comScore++;
    comScorePara.innerText=comScore;
  }
 
}


