window.onload=function(){
    var board=document.querySelector('.board-js');

board.addEventListener('click',addX,reset);

};
var centinel=false;

function addX(event){
    if(centinel)
        event.target.innerHTML='<strong>X</strong>';
    else
        event.target.innerHTML='<strong>O</strong>';
        centinel=!centinel;
}

board.addEventListener('click',reset);
function reset(){
    var td = document.getElementsByTagName('td');

    for(var i = 0; i < td.length; i++){
        td[i].innerHTML = ''
    }
}
