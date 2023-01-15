// In the following shopping cart add, remove, edit items
//     => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//     - add 'Meat' in the beginning of your shopping cart if it has not been already added
//     - add Sugar at the end of your shopping cart if it has not been already added
//     - remove 'Honey'
//     - modify Tea to 'Green Tea'

let shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

// - add 'Meat' in the beginning of your shopping cart if it has not been already added

shoppingCart.unshift("Meat");
console.log(shoppingCart);

// - add Sugar at the end of your shopping cart if it has not been already added

shoppingCart.push("Sugar");
console.log(shoppingCart);

// - remove 'Honey'

function removeElement(array, element) {
  let newarry = [];
  for (let i = 0; i <= array.length - 1; i++) {
    if (array[i] !== element) {
      newarry.push(array[i]);
    }
  }
  return newarry;
}

let result = removeElement(shoppingCart, "Honey");
console.log(result);

// - modify Tea to 'Green Tea'

shoppingCart.splice(3, 1, "GreenTea");
console.log(shoppingCart);
