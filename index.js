/*function calculateTotalPrice(quantity=2, price=3000){
    const totalPrice = quantity * price;
    alert(`Стоимость вашей покупки - ${totalPrice.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' })}`);
}*/ 
//вариант с alert

function calculateTotalPrice(quantity=2, price=3000){
    const totalPrice = quantity * price;
    const total = document.getElementById('total');
    let message = `Стоимость вашей покупки - ${totalPrice.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' })}`;
    total.textContent = (message);
}