console.log("Welcome to tic tac toe");
let music = new Audio('music.mp3');
let turnaud = new Audio('ting.mp3');
let gameover = new Audio('gameover.mp3');
let turn = "X";
const changeTurn = ()=>{
    return turn==="X"?"0":"X";    
}
let isgameover = false;
const checkWin = ()=>{
    let boxtexts = document.getElementsByClassName('boxtext');
    const list = [
        [0,1,2,5,4,0],
        [3,4,5,5,12,0],
        [6,7,8,5,20,0],
        [0,3,6,-4,12,90],
        [1,4,7,4.5,12,90],
        [2,5,8,12,12,90],
        [0,4,8,5,5,12.5,45],
        [2,4,6,4,12.5,135],
    ];
    list.forEach(element => {
        if((boxtexts[element[0]].textContent==boxtexts[element[1]].textContent)&&(boxtexts[element[0]].textContent==boxtexts[element[2]].textContent)&&(boxtexts[element[0]].textContent!=''))
        {
            isgameover = true;
            console.log('won');
            document.getElementsByClassName('info')[0].innerHTML = turn + " Won";
            document.getElementById('winImage').style.width = "10vw";
            document.getElementsByClassName("line")[0].style.width = "15vw";
            document.getElementsByClassName("line")[0].style.transform = "translate("+element[3]+"vw,"+element[4]+"vw) rotate("+element[5]+"deg)";
        }
    });  

}
//music.play();
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element=>{
    element.addEventListener("click",()=>{
        let boxtext = element.querySelector('.boxtext');
        if(boxtext.innerHTML=='')
        {
            boxtext.innerHTML = turn;
            turnaud.play();
            checkWin();
            turn = changeTurn();
            if(isgameover==false)
                document.getElementsByClassName('info')[0].innerHTML = "Turn for"+turn;
        }
        document.getElementsByClassName('reset')[0].addEventListener("click",()=>{
            boxtext.innerHTML='';
            document.getElementById('winImage').style.width = "0";
            turn="X";
            document.getElementsByClassName('info')[0].innerHTML = "Turn for "+turn;
            document.getElementsByClassName("line")[0].style.width = "0vw";
        })
    });
});