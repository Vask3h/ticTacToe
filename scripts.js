let player1Name = "player1";
let player2Name = "player2";
let turn = true;
let screenInfo = "Tic Tac Toe";
let winner = "";
let p1Wins = 0;
let p2Wins = 0;
let randomM = 0;


function saveNames(){
    player1Name = document.getElementById('p1Name').value;
    player2Name = document.getElementById('p2Name').value;
    document.getElementById('name1').innerHTML = player1Name;
    document.getElementById('name2').innerHTML = player2Name;
}
function randomClick(){
if(randomM === 0 ){
    let random = Math.floor(Math.random() * 9) +1;
            document.getElementById('pos' + random).innerHTML = "x";
randomM = 1;
}
}
function board(pos){
    randomM = 1;
    if(winner == ""){
        if(document.getElementById(pos).innerHTML === "" ){
            if(turn === true){
                document.getElementById(pos).innerHTML = "x";
                turn = !turn;
                
            }else {
                document.getElementById(pos).innerHTML = "o";
                turn = !turn;
            }
        }
        if(document.getElementById('pos1').innerHTML === "x" && document.getElementById('pos2').innerHTML === "x" && document.getElementById('pos3').innerHTML === "x"){
            document.getElementById('screenInfo').innerHTML = "The winner is! " + player1Name;
            p1Wins = p1Wins + 1 ;
            document.getElementById('p1Wins').innerHTML = p1Wins ;
            winner = player1Name;
        }else if(document.getElementById('pos4').innerHTML === "x" && document.getElementById('pos5').innerHTML === "x" && document.getElementById('pos6').innerHTML === "x"){
            document.getElementById('screenInfo').innerHTML = "The winner is! " + player1Name;
            p1Wins = p1Wins + 1 ;
            document.getElementById('p1Wins').innerHTML = p1Wins ;
            winner = player1Name;
        }else if(document.getElementById('pos7').innerHTML === "x" && document.getElementById('pos8').innerHTML === "x" && document.getElementById('pos9').innerHTML === "x"){
            document.getElementById('screenInfo').innerHTML = "The winner is! " + player1Name;
            p1Wins = p1Wins + 1 ;
            document.getElementById('p1Wins').innerHTML = p1Wins ;
            winner = player1Name;
        }else if(document.getElementById('pos1').innerHTML === "x" && document.getElementById('pos4').innerHTML === "x" && document.getElementById('pos7').innerHTML === "x"){
            document.getElementById('screenInfo').innerHTML = "The winner is! " + player1Name;
            p1Wins = p1Wins + 1 ;
            document.getElementById('p1Wins').innerHTML = p1Wins ;
            winner = player1Name;
        }else if(document.getElementById('pos2').innerHTML === "x" && document.getElementById('pos5').innerHTML === "x" && document.getElementById('pos8').innerHTML === "x"){
            document.getElementById('screenInfo').innerHTML = "The winner is! " + player1Name;
            p1Wins = p1Wins + 1 ;
            document.getElementById('p1Wins').innerHTML = p1Wins ;
            p1Wins = p1Wins + 1 ;
            document.getElementById('p1Wins').innerHTML = p1Wins ;
            winner = player1Name;
        }else if(document.getElementById('pos3').innerHTML === "x" && document.getElementById('pos6').innerHTML === "x" && document.getElementById('pos9').innerHTML === "x"){
            document.getElementById('screenInfo').innerHTML = "The winner is! " + player1Name;
            p1Wins = p1Wins + 1 ;
            document.getElementById('p1Wins').innerHTML = p1Wins ;
            winner = player1Name;
        }else if(document.getElementById('pos1').innerHTML === "x" && document.getElementById('pos5').innerHTML === "x" && document.getElementById('pos9').innerHTML === "x"){
            document.getElementById('screenInfo').innerHTML = "The winner is! " + player1Name;
            p1Wins = p1Wins + 1 ;
            document.getElementById('p1Wins').innerHTML = p1Wins ;
            winner = player1Name;
        }else if(document.getElementById('pos3').innerHTML === "x" && document.getElementById('pos5').innerHTML === "x" && document.getElementById('pos7').innerHTML === "x"){
            document.getElementById('screenInfo').innerHTML = "The winner is! " + player1Name;
            p1Wins = p1Wins + 1 ;
            document.getElementById('p1Wins').innerHTML = p1Wins ;
            winner = player1Name;
        }else if (document.getElementById('pos1').innerHTML === "o" && document.getElementById('pos2').innerHTML === "o" && document.getElementById('pos3').innerHTML === "o"){ //player 2
            document.getElementById('screenInfo').innerHTML = "The winner is! " + player2Name;
            p2Wins = p2Wins + 1 ;
            document.getElementById('p2Wins').innerHTML = p2Wins ;
            winner = player2Name;
        }else if(document.getElementById('pos4').innerHTML === "o" && document.getElementById('pos5').innerHTML === "o" && document.getElementById('pos6').innerHTML === "o"){
            document.getElementById('screenInfo').innerHTML = "The winner is! " + player2Name;
            p2Wins = p2Wins + 1 ;
            document.getElementById('p2Wins').innerHTML = p2Wins ;
            winner = player2Name;
        }else if(document.getElementById('pos7').innerHTML === "o" && document.getElementById('pos8').innerHTML === "o" && document.getElementById('pos9').innerHTML === "o"){
            document.getElementById('screenInfo').innerHTML = "The winner is! " + player2Name;
            p2Wins = p2Wins + 1 ;
            document.getElementById('p2Wins').innerHTML = p2Wins ;
            winner = player2Name;
        }else if(document.getElementById('pos1').innerHTML === "o" && document.getElementById('pos4').innerHTML === "o" && document.getElementById('pos7').innerHTML === "o"){
            document.getElementById('screenInfo').innerHTML = "The winner is! " + player2Name;
            p2Wins = p2Wins + 1 ;
            document.getElementById('p2Wins').innerHTML = p2Wins ;
            winner = player2Name;
        }else if(document.getElementById('pos2').innerHTML === "o" && document.getElementById('pos5').innerHTML === "o" && document.getElementById('pos8').innerHTML === "o"){
            document.getElementById('screenInfo').innerHTML = "The winner is! " + player2Name;
            p2Wins = p2Wins + 1 ;
            document.getElementById('p2Wins').innerHTML = p2Wins ;
            winner = player2Name;
        }else if(document.getElementById('pos3').innerHTML === "o" && document.getElementById('pos6').innerHTML === "o" && document.getElementById('pos9').innerHTML === "o"){
            document.getElementById('screenInfo').innerHTML = "The winner is! " + player2Name;
            p2Wins = p2Wins + 1 ;
            document.getElementById('p2Wins').innerHTML = p2Wins ;
            winner = player2Name;
        }else if(document.getElementById('pos1').innerHTML === "o" && document.getElementById('pos5').innerHTML === "o" && document.getElementById('pos9').innerHTML === "o"){
            document.getElementById('screenInfo').innerHTML = "The winner is! " + player2Name;
            p2Wins = p2Wins + 1 ;
            document.getElementById('p2Wins').innerHTML = p2Wins ;
            winner = player2Name;
        }else if(document.getElementById('pos3').innerHTML === "o" && document.getElementById('pos5').innerHTML === "o" && document.getElementById('pos7').innerHTML === "o"){
            document.getElementById('screenInfo').innerHTML = "The winner is! " + player2Name;
            p2Wins = p2Wins + 1 ;
            document.getElementById('p2Wins').innerHTML = p2Wins ;
            winner = player2Name;
        }else if(document.getElementById('pos1').innerHTML != "" && document.getElementById('pos2').innerHTML != "" && document.getElementById('pos3').innerHTML != "" 
        && document.getElementById('pos4').innerHTML != "" && document.getElementById('pos5').innerHTML != "" && document.getElementById('pos6').innerHTML != "" 
        && document.getElementById('pos7').innerHTML != "" && document.getElementById('pos8').innerHTML != "" && document.getElementById('pos9').innerHTML != ""){
           document.getElementById('screenInfo').innerHTML = "No one wins!!";
           winner = "noWinner";
        }
        }
    }
    

function restart(pos){

    document.getElementById('screenInfo').innerHTML = "Tic Tac Toe"
    turn = true;
    winner = "";
    randomM = 0;
    for(let i=1; i<10; i++){
        document.getElementById(pos + i).innerHTML = "";
    }
}
 function reScoreboard(){
    p1Wins = 0;
    p2Wins = 0;
    document.getElementById('p1Wins').innerHTML = p1Wins;
    document.getElementById('p2Wins').innerHTML = p2Wins;
 }