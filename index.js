/*function calculateTotalPrice(quantity=2, price=3000){
    const totalPrice = quantity * price;
    alert(`Стоимость вашей покупки - ${totalPrice.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' })}`);
}*/ 
//вариант с alert

function calculateTotalPrice(quantity, price=3000){
    quantity = +prompt('Какое количество вам необходимо?');
    const totalPrice = quantity * price;
    const total = document.getElementById('total');
    let message = `Стоимость вашей покупки - ${totalPrice.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' })}`;
    total.textContent = message;
}