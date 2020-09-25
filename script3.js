const userPassword = prompt('Пароль?' );

const ADMIN_PASSWORD = 'jqueryismyjam';

const CANCELED_BY_USER = 'Отменено пользователем!';
const ACCESS_IS_ALLOWED = 'Добро пожаловать!';
const ACCESS_DENIED = 'Доступ запрещен, неверный пароль!';
let message;
if(userPassword===ADMIN_PASSWORD&&userPassword!=null){
    message=ACCESS_IS_ALLOWED;
}else if(userPassword==null){
    message=CANCELED_BY_USER;
}else if(userPassword!=ADMIN_PASSWORD&&userPassword!=null){
    message=ACCESS_DENIED;
}
console.log(message);