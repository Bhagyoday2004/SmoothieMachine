function loadOrderDetails() {
    const order = JSON.parse(localStorage.getItem('smoothieOrder'));

    if (!order) {
        alert("No order data found!");
        window.location.href = 'index.html';
        return;
    }

    document.getElementById('customer-name').textContent = order.name;
    document.getElementById('smoothie-size').textContent = order.size;
    document.getElementById('smoothie-ingredients').textContent = order.ingredients.join(', ');
    document.getElementById('special-instructions').textContent = order.instructions || "None";
}

loadOrderDetails();
