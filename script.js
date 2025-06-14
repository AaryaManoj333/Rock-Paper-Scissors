const choices = ["rock", "paper", "scissors"];
let boxes=document.querySelectorAll(".box");
let resetbtn = document.querySelector("#res-btn");

let userscore=0;
let compscore=0;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>
        {const userChoice=box.id;
        const compChoice=choices[Math.floor(Math.random() * 3)];
        const winner = getWinner(userChoice, compChoice);
        document.querySelector("#result").innerText = `You: ${userChoice}, Computer: ${compChoice} → ${winner}`;
        document.querySelector("#winner").innerText = `Winner:${winner}`;
        document.querySelector("#score").innerText=`Your Score: ${userscore}, Computer Score: ${compscore}`;

    })
})
const reset=()=>{
    userscore=0;
    compscore=0;
    document.querySelector("#result").innerText = "";
    document.querySelector("#score").innerText = `Your Score: ${userscore}, Computer Score: ${compscore}`;
}
function getWinner(user, comp) {
  if (user === comp) return "It's a draw!";
  if (
    (user === "rock" && comp === "scissors") ||
    (user === "paper" && comp === "rock") ||
    (user === "scissors" && comp === "paper")
  ) {
    userscore+=1;
    return "You win!";
  }
  else{
    compscore+=1;
    return "Computer wins!";
  }
  
}
resetbtn.addEventListener("click",reset)