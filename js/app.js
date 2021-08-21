// update extra cost function
function updateExtra(idName, price) {
    const selectExtra = document.getElementById(idName);
    selectExtra.innerText = price;
}

// function to get price
function getPrice(idName) {
    const priceText = document.getElementById(idName);
    const price = parseInt(priceText.innerText);
    return price;
}

// update total price function
function updateTotalPrice() {
    // getting prices
    const bestPrice = getPrice('best-price');
    const extraMemoryCost = getPrice('memory-cost');
    const extraStorageCost = getPrice('storage-cost');
    const deliveryCharge = getPrice('delivery-cost');

    const totalPriceAmount = document.getElementById('total-price');
    const totalAmount = document.getElementById('total');

    // calculate total price
    const totalPrice = bestPrice + extraMemoryCost + extraStorageCost + deliveryCharge;

    // update total price and Total
    totalPriceAmount.innerText = totalPrice;
    totalAmount.innerText = totalPrice;

}


function buttonEvent(idName, price) {
    // update extra price
    updateExtra(idName, price);

    // update total price
    updateTotalPrice();
}


//******************Bonus Part******************//
// promo apply event 
document.getElementById('apply-button').addEventListener('click', function () {
    const promoInput = document.getElementById('promo-input');
    const promoInputText = promoInput.value.toLowerCase();

    if (promoInputText == 'stevekaku') {
        const total = document.getElementById('total');
        const totalPrice = getPrice('total-price');

        const discountedPrice = totalPrice - (totalPrice * .2);

        // update price after discount
        total.innerText = discountedPrice;
    }
    promoInput.value = '';
});