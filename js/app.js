// update extra cost function
function updateExtra(idName, price) {
    const selectExtra = document.getElementById(idName);
    selectExtra.innerText = price;
}
function getPrice(idName) {
    const priceText = document.getElementById(idName);
    const price = parseInt(priceText.innerText);
    return price;
}
// update total price function
function updateTotalPrice() {
    const bestPrice = getPrice('best-price');
    const extraMemoryCost = getPrice('memory-cost');
    const extraStorageCost = getPrice('storage-cost');
    const deliveryCharge = getPrice('delivery-cost');
    const totalPrice = bestPrice + extraMemoryCost + extraStorageCost + deliveryCharge;

    const totalPriceAmount = document.getElementById('total-price');
    totalPriceAmount.innerText = totalPrice;

}

//                    Memory buttons events                             ///
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


//                    storage buttons events                             ///
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



//                    delivery buttons events                             ///
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