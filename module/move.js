import * as map from "./map.js";

function getNext (row,col,direction) {
    
    if (direction == 'left') {
        return{
            row,
            col:col-1,
            value:map.content[row][col-1],
        }
    }
    if (direction == 'right') {
        return{
            row,
            col:col+1,
            value:map.content[row][col+1],
        }
    }
    if (direction == 'up') {
        return{
            row:row-1,
            col,
            value:map.content[row-1][col],
        }
    }
    if (direction == 'down') {
        return{
            row:row+1,
            col,
            value:map.content[row+1][col],
        }
    }
}

function getPlayer () {
   
    for (let row = 0;row < map.rowNum; row++) {
        for (let col = 0;row < map.colNum;col++){
            if(map.content[row][col] == map.PLAYER){
                return{
                    row,
                    col,
                }
            }
        }
    }
    throw new Error("地图上居然没有玩家");
}

function exchange (item1,item2) {
    let item = map.content[item1.row][item1.col];
    map.content[item1.row][item1.col] = map.content[item2.row][item2.col];
    map.content[item2.row][item2.col] = item;
}

export function move (direction) {
    let player = getPlayer () ;
    let nextItem = getNext (player.row,player.col,direction);
    if(nextItem.value == map.SPACE){
        exchange(player,nextItem);
        return true;
    }
    if(nextItem.value == map.WALL){
        //不能移动
        return false;
    }
    if(nextItem.value == map.BOX){
        let nnext = getNext (nextItem.row,nextItem.col,direction);
        if (nnext.value == map.SPACE) {
           exchange(nnext,nextItem);
           exchange(nextItem,player);
           return true;
        }
       else{
           return false
       }
    }
}

export function isover () {
    for (let i = 0; i < map.correct.length; i++){
        let Cbox = map.correct[i];
        if (map.content[Cbox.row][Cbox.col] == map.BOX){
            return true
        }else{
            return false
        }
    }
   
}