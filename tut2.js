var count =0;
function blackJack(card){
    switch(card){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case 'j':
        case 'q':
        case 'k':
        case 'a':
            count--;
            break;
    }
    
    var holdBet = 'hold';
    if(count>0)
        holdBet = 'bet';
    return count + " " + holdBet;
}

blackJack(4); blackJack(5); blackJack('q'); blackJack('a');
console.log(blackJack('j'));