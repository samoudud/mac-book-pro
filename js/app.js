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

//******************Memory buttons events******************//
// 8GB Memory button event
document.getElementById('memory-8gb').addEventListener('click', function () {
    updateExtra('memory-cost', 0);
    updateTotalPrice();
});

// 16GB Memory button event
document.getElementById('memory-16gb').addEventListener('click', function () {
    updateExtra('memory-cost', 180);
    updateTotalPrice();
});


//******************storage buttons events******************//
// 256GB storage button event
document.getElementById('storage-256gb').addEventListener('click', function () {
    updateExtra('storage-cost', 0);
    updateTotalPrice();
});

// 512GB storage button event
document.getElementById('storage-512gb').addEventListener('click', function () {
    updateExtra('storage-cost', 100);
    updateTotalPrice();
});

// 1TB storage button event
document.getElementById('storage-1tb').addEventListener('click', function () {
    updateExtra('storage-cost', 180);
    updateTotalPrice();
});



//******************delivery buttons events******************//
// Aug 25 delivery button event
document.getElementById('delivery-regular').addEventListener('click', function () {
    updateExtra('delivery-cost', 0);
    updateTotalPrice();
});

// Aug 21 delivery button event
document.getElementById('delivery-argent').addEventListener('click', function () {
    updateExtra('delivery-cost', 20);
    updateTotalPrice();
});


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