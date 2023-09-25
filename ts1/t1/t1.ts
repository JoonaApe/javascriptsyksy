// Define the 'Item' interface with 'name', 'price', and 'quantity' properties
interface Item {
    name: string;
    price: number;
    quantity: number;
  }

  // Create an empty array named 'cart' to store the items
  const cart: Item[] = [];

  // Implement a loop to prompt the user for item details
  // Use 'while' loop to keep prompting until an empty item name is entered
  while (true) {
    // Prompt user for item name, price, and quantity
    const itemName = prompt("Enter item: ")!;

    // Break the loop if an empty item name is entered
    if (!itemName) {
      break;
    }

    const itemPrice = +prompt("Enter item price: ")!;
    const itemQuantity = +prompt("Enter item quantity: ")!;

    // Create an item object and add it to the 'cart' array
    const newItem: Item = { name: itemName, price: itemPrice, quantity: itemQuantity };
    cart.push(newItem);
  }

  // Calculate the total cost using the 'map' and 'reduce' functions
  const totalCost = cart.map(item => item.price * item.quantity).reduce((sum, cost) => sum + cost, 0);

  // Display the total cost to the user
  console.log(`Total cost of the shopping cart: $${totalCost.toFixed(2)}`);
