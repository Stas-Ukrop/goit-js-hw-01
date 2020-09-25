const orderPieces = prompt('Сколько дроидов хотите купить?' );

const credits = 23580;
const pricePerDroid = 3000;
const CANCELED_BY_USER = 'Отменено пользователем!';
const ACCESS_DENIED = 'Недостаточно средств на счету!';

let totalPrice=orderPieces*pricePerDroid;
let balanceCredit=credits-totalPrice;
let message;
if(balanceCredit>=0&&orderPieces!=null){
    message=`Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов`;
}else if(balanceCredit<0){
    message=ACCESS_DENIED;
}else if(orderPieces==null){
    message=CANCELED_BY_USER;
}
console.log(message);