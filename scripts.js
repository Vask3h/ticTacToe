let player1Name = "";
let player2Name = "";
let winnerName = "";
let turn = true;

function saveNames(){
    player1Name = document.getElementById('p1Name').value;
    player2Name = document.getElementById('p2Name').value;
    console.log(player1Name);
    console.log(player2Name);
}

function board(pos){
    if(turn === true){
        document.getElementById(pos).innerHTML = "<a href='https://google.com'>click aqui</a>";
        turn = !turn;
        console.log("entra si");
    }else {
        document.getElementById(pos).innerHTML = "o";
        turn = !turn;
        console.log("entra no");
    }
}
function restart(){
    winnerName = "Dont have a winner yet"
    turn = true
    console.log(turn);

}