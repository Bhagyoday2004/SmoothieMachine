// Smoothie class to store and structure smoothie details
class Smoothie {
    constructor(name, size, ingredients, instructions) {
        this.name = name; // Customer's name
        this.size = size; // Smoothie size
        this.ingredients = ingredients; // Selected ingredients
        this.instructions = instructions; // Special instructions
    }
}

// Event listener for the Order button
document.getElementById('order-btn').addEventListener('click', () => {
    // Getting values from the form
    const name = document.getElementById('customer-name').value;
    const size = document.getElementById('smoothie-size').value;
    const ingredients = Array.from(document.querySelectorAll('input[name="ingredients"]:checked'))
                             .map(input => input.value); // Array of selected ingredients
    const instructions = document.getElementById('special-instructions').value;

    // Validate form inputs
    if (!name || !size || ingredients.length === 0) {
        alert("Please fill out all required fields!");
        return;
    }

    // Create a Smoothie object
    const smoothie = new Smoothie(name, size, ingredients, instructions);

    // Save the order to local storage
    localStorage.setItem('smoothieOrder', JSON.stringify(smoothie));

    // Redirect to the order summary page
    window.location.href = 'order.html';
});
