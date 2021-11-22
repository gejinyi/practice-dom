import * as map from './map.js';
let game = document.getElementById('game');
    
function isCorrect (row,col) {
//    return map.correct.find(p => p.row == row && p.col == col)!== undefined;
for (var i = 0; i < map.correct.length; i++) {
    var point = map.correct[i];//拿到其中一个正确位置的坐标
    if (point.row === row && point.col === col) {
        return true;
    }
}
return false;
}

function setFather () {
    game.style.width = map.itemWidth * map.colNum + 'px';
    game.style.height = map.itemHeight * map.rowNum + 'px';
}
function createDom (row,col) {
    let value = map.content[row][col]; 
    let div = document.createElement('div');
    div.className = 'item';
    div.style.left = col*map.itemWidth + 'px';
    div.style.top = row*map.itemHeight + 'px';
    let correct = isCorrect(row, col);
    if (value === map.PLAYER) {
        div.classList.add("player");
    }
    else if (value === map.WALL) {
        div.classList.add("wall");
    }
    else if (value === map.BOX) {
        if (correct) {
            div.classList.add("correct-box");
        }
        else {
            div.classList.add("box");
        }
    }
    else {
        //空白
        if (correct) {
            div.classList.add("correct");
        }
        else {
            return; //只是一个普通空白
        }
    }
    game.appendChild(div)
}



//渲染函数
function init () {
    game.innerHTML = '';
    for (let i = 0;i<map.rowNum;i++) {
        for (let j =0;j < map.colNum;j++) {
            createDom (i,j)
        }
    }
}
export default  function () {
    setFather ();
    init();
}