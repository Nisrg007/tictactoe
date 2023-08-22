console.log("Welcome to Tic Tac Toe")

let turn="X"
let gameover=false;

//change turn function
const changeTurn=()=>{

    return turn === "X"?"0":"X"
}

//check win
const checkWin=()=>{
    let boxtexts=document.getElementsByClassName('boxtext');
    let wins = [

        [0,1,2,1,3.5,0],
        [3,4,5,1,13.5,0],
        [6,7,8,1,23.5,0],
        [0,3,6,-9,15,90],
        [1,4,7,1,15,90],
        [2,5,8,11,15,90],
        [0,4,8,0.5,12.98,45],
        [2,4,6,0.99,13.98,135],
    ]
    wins.forEach(e=>{
        if ((boxtexts[e[0]].innerText===boxtexts[e[1]].innerText)&& (boxtexts[e[2]].innerText===boxtexts[e[1]].innerText)&&(boxtexts[e[0]].innerText!=="")){
            document.querySelector('.info').innerText=boxtexts[e[0]].innerText+"Won"
        gameover=true;
        document.querySelector(".line").style.width="30vw";  //backticks for doller sign to change according value
        document.querySelector(".line").style.transform=`translate(${e[3]}vw,${e[4]}vw)rotate(${e[5]}deg)`  //backticks for doller sign to change according value
        }
    })

}

//main game logic starts here

let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if (boxtext.innerText==='') {
            boxtext.innerText=turn;
          turn =  changeTurn();
            checkWin();
            if (!gameover) {
                
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })

})

let reset=document.getElementById('reset');

reset.addEventListener('click',()=>{
   let boxtexts=document.querySelectorAll('.boxtext');
   Array.from(boxtexts).forEach(element=>{
    element.innerText=""
   });
turn="X";

gameover=false
document.querySelector(".line").style.width="0vw";  //backticks for doller sign to change according value

document.getElementsByClassName("info")[0].innerText="Turn for "+turn;

})