let player1Name = "";
let player2Name = "";
let turn = true;
let screenInfo = "Tic Tac Toe";
function saveNames(){
    player1Name = document.getElementById('p1Name').value;
    player2Name = document.getElementById('p2Name').value;
}

function board(pos){

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
    }else if(document.getElementById('pos4').innerHTML === "x" && document.getElementById('pos5').innerHTML === "x" && document.getElementById('pos6').innerHTML === "x"){
        document.getElementById('screenInfo').innerHTML = "The winner is! " + player1Name;
    }else if(document.getElementById('pos7').innerHTML === "x" && document.getElementById('pos8').innerHTML === "x" && document.getElementById('pos9').innerHTML === "x"){
        document.getElementById('screenInfo').innerHTML = "The winner is! " + player1Name;
    }else if(document.getElementById('pos1').innerHTML === "x" && document.getElementById('pos4').innerHTML === "x" && document.getElementById('pos7').innerHTML === "x"){
        document.getElementById('screenInfo').innerHTML = "The winner is! " + player1Name;
    }else if(document.getElementById('pos2').innerHTML === "x" && document.getElementById('pos5').innerHTML === "x" && document.getElementById('pos8').innerHTML === "x"){
        document.getElementById('screenInfo').innerHTML = "The winner is! " + player1Name;
    }else if(document.getElementById('pos3').innerHTML === "x" && document.getElementById('pos6').innerHTML === "x" && document.getElementById('pos9').innerHTML === "x"){
        document.getElementById('screenInfo').innerHTML = "The winner is! " + player1Name;
    }else if(document.getElementById('pos1').innerHTML === "x" && document.getElementById('pos5').innerHTML === "x" && document.getElementById('pos9').innerHTML === "x"){
        document.getElementById('screenInfo').innerHTML = "The winner is! " + player1Name;
    }else if(document.getElementById('pos3').innerHTML === "x" && document.getElementById('pos5').innerHTML === "x" && document.getElementById('pos7').innerHTML === "x"){
        document.getElementById('screenInfo').innerHTML = "The winner is! " + player1Name;
    }else if (document.getElementById('pos1').innerHTML === "o" && document.getElementById('pos2').innerHTML === "o" && document.getElementById('pos3').innerHTML === "o"){ //player 2
        document.getElementById('screenInfo').innerHTML = "The winner is! " + player2Name;
    }else if(document.getElementById('pos4').innerHTML === "o" && document.getElementById('pos5').innerHTML === "o" && document.getElementById('pos6').innerHTML === "o"){
        document.getElementById('screenInfo').innerHTML = "The winner is! " + player2Name;
    }else if(document.getElementById('pos7').innerHTML === "o" && document.getElementById('pos8').innerHTML === "o" && document.getElementById('pos9').innerHTML === "o"){
        document.getElementById('screenInfo').innerHTML = "The winner is! " + player2Name;
    }else if(document.getElementById('pos1').innerHTML === "o" && document.getElementById('pos4').innerHTML === "o" && document.getElementById('pos7').innerHTML === "o"){
        document.getElementById('screenInfo').innerHTML = "The winner is! " + player2Name;
    }else if(document.getElementById('pos2').innerHTML === "o" && document.getElementById('pos5').innerHTML === "o" && document.getElementById('pos8').innerHTML === "o"){
        document.getElementById('screenInfo').innerHTML = "The winner is! " + player2Name;
    }else if(document.getElementById('pos3').innerHTML === "o" && document.getElementById('pos6').innerHTML === "o" && document.getElementById('pos9').innerHTML === "o"){
        document.getElementById('screenInfo').innerHTML = "The winner is! " + player2Name;
    }else if(document.getElementById('pos1').innerHTML === "o" && document.getElementById('pos5').innerHTML === "o" && document.getElementById('pos9').innerHTML === "o"){
        document.getElementById('screenInfo').innerHTML = "The winner is! " + player2Name;
    }else if(document.getElementById('pos3').innerHTML === "o" && document.getElementById('pos5').innerHTML === "o" && document.getElementById('pos7').innerHTML === "o"){
        document.getElementById('screenInfo').innerHTML = "The winner is! " + player2Name;
    }else if(document.getElementById('pos1').innerHTML != "" && document.getElementById('pos2').innerHTML != "" && document.getElementById('pos3').innerHTML != "" 
    && document.getElementById('pos4').innerHTML != "" && document.getElementById('pos5').innerHTML != "" && document.getElementById('pos6').innerHTML != "" 
    && document.getElementById('pos7').innerHTML != "" && document.getElementById('pos8').innerHTML != "" && document.getElementById('pos9').innerHTML != ""){
       document.getElementById('screenInfo').innerHTML = "No one wins!!";
    }
    }
    
function restart(pos){
    player1Name = "Player 1";
    player2Name = "Player 2";
    document.getElementById('screenInfo').innerHTML = "Tic Tac Toe"
    turn = true;
    for(let i=1; i<10; i++){
        document.getElementById(pos + i).innerHTML = "";
    }
}