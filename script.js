let userRock = document.getElementById("userRock");
let userPaper = document.getElementById("userPaper");
let userSci = document.getElementById("userSci");

let sysRock = document.getElementById("sysRock");
let sysPaper = document.getElementById("sysPaper");
let sysSci = document.getElementById("sysSci");

let rock = document.querySelector(".fa-hand-back-fist");
let paper = document.querySelector(".fa-hand");
let sci = document.querySelector(".fa-hand-scissors");

let sysScore = document.getElementById("sysScore");
let userScore = document.getElementById("userScore");

let buttonEl = document.getElementById("buttonEl");
let paraEl = document.getElementById("paraEl");

const moves = ["rock", "paper", "scissors"];

function getsystemChoice(){
   return moves[Math.floor(Math.random()*3)];
}


userRock.addEventListener("click", (event) => {
  const syschoice=getsystemChoice();
  userRock.style.color = "green";
  userPaper.style.color = "black";
  userSci.style.color = "black";
  if (syschoice==="rock"){
    rock.classList.remove("d-none");
    paper.classList.add("d-none");
    sci.classList.add("d-none");
    sysRock.style.color = "green";
    paraEl.textContent="IT'S A TIE..";
   
  }
  else if(syschoice==="paper"){
    rock.classList.add("d-none");
    paper.classList.remove("d-none");
    sci.classList.add("d-none");
    sysPaper.style.color = "green";
    paraEl.textContent="SYSTEM WINS!  PAPER WRAPS UP THE ROCK..";
    
  }
  else{
    rock.classList.add("d-none");
    paper.classList.add("d-none");
    sci.classList.remove("d-none");
    sysSci.style.color = "green";
    paraEl.textContent="YOU WIN! ROCK BREAKS UP THE SCISSOR..";
  }

});


userPaper.addEventListener("click", (event) => {
  const syschoice=getsystemChoice();
  userPaper.style.color = "green";
  userRock.style.color = "black";
  userSci.style.color = "black";
  if (syschoice==="rock"){
    rock.classList.remove("d-none");
    paper.classList.add("d-none");
    sci.classList.add("d-none");
    sysRock.style.color = "green";
    paraEl.textContent="YOU WIN! PAPER WRAPS UP THE ROCK..";
  }
  else if(syschoice==="paper"){
    rock.classList.add("d-none");
    paper.classList.remove("d-none");
    sci.classList.add("d-none");
    sysPaper.style.color = "green";
    paraEl.textContent="IT'S A TIE..";
    
  }
  else{
    rock.classList.add("d-none");
    paper.classList.add("d-none");
    sci.classList.remove("d-none");
    sysSci.style.color = "green";
    paraEl.textContent="SYSTEM WINS! SCISSOR CUTS THE PAPER..";
    
  }

});

userSci.addEventListener("click", (event) => {
  const syschoice=getsystemChoice();
  userSci.style.color = "green";
  userRock.style.color = "black";
  userPaper.style.color = "black";
  if (syschoice==="rock"){
    rock.classList.remove("d-none");
    paper.classList.add("d-none");
    sci.classList.add("d-none");
    sysRock.style.color = "green";
    paraEl.textContent="SYSTEM WINS! ROCK BREAKS UP THE SCISSOR..";
    
  }
  else if(syschoice==="paper"){
    rock.classList.add("d-none");
    paper.classList.remove("d-none");
    sci.classList.add("d-none");
    sysPaper.style.color = "green";
    paraEl.textContent="YOU WIN! SCISSOR CUTS THE PAPER..";
    
  }
  else{
    rock.classList.add("d-none");
    paper.classList.add("d-none");
    sci.classList.remove("d-none");
    sysSci.style.color = "green";
    paraEl.textContent="IT'S A TIE..";
   
  }

});

