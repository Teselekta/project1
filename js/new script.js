'use strict';


const num = 50;

/*if (num < 49) {
    console.log('Error!');
} else if (num > 100) {
    console.log('Многго');
} else {
    console.log('Ok!');
}

(num === 50) ? console.log('Cock!') : console.log('Error');
*/
switch (num) {
    case 49: 
        console.log('Нэвэльный');
        break;
    case 100: 
        console.log('Нэвэльный!');
        break;
    case 51:
        console.log('Вельный!');
        break;
    default:
        console.log('Попробуй еще раз');
        break;
}