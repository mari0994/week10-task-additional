function calculateTotalPrice(quantity=2, price=3000){
    const totalPrice = quantity * price;
    alert(`Стоимость вашей покупки - ${totalPrice.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' })}`);
}