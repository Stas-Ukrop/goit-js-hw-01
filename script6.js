let message;
let total=0;
let p=0;
while(true){
    if(p!=null){
        p=prompt('Введите число');
        total=total+Number(p);
        console.log(total);
    }else{
        alert(`Общая сумма чисел равна ${total}`);
        break;
    }

}