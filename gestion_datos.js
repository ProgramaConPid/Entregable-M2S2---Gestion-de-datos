// ? Welcome message to the program
console.log("Gestion de datos con Objetos, Sets y Maps.");

// ? Started products in an object
let products = {
  1: {id: 1, name: "Portatil Dell", price: 1750},
  2: {id: 2, name: "Teclado Redragon", price: 500},
  3: {id: 3, name: "Diademas Sony", price: 250}
}

console.log("Registered products in the inventory", products);

// ? Avoid duplicate products using Set
let setProducts = Object.values(products).map((product) => product.name)
console.log("Set of unique products", setProducts);

// ? Create a map to asscoiate each category with their respective product
let mapProducts = new Map([
  ["Electronic", `${products[1].name}`],
  ["Accesories", `${products[2].name}`],
  ["Headphones", `${products[3].name}`],
])

console.log("Map - Category and Product", mapProducts);

// ? Iterate the object using the loop for in
for (const id in products) {
  console.log(`Product ID:${id} =>`, products[id]);
}

// ? Iterate the Set using the loop for of
for (const product of setProducts) {
  console.log(`Unique product: ${product}`);
}

// ? Iterate the Map using the loop forEach
console.log("\n -- Products -- \n");
mapProducts.forEach((product, key) => {
  
  console.log(`Category: ${key} - Product: ${product}`);

})

// ? Testing and Validations
console.group("Testing and Validations");
console.log("Registered Products: ", products);
console.log("Unique products registered: ", setProducts);
console.log("Categories and Products: ", mapProducts);
console.groupEnd()

// ! Additional Functions
// ! Incorporate Functions to addProduct, deleteProduct and showProducts

const modalWindow = document.getElementById("modal")
const inventoryContainer = document.getElementById("inventory")
const setContainer = document.getElementById("set")
const mapContainer = document.getElementById("map")
const closeModalBtn = document.getElementById("close__modal")

// ? Function to add a new product (id, name, price)
function addProduct() {

  let id = prompt("Enter the ID of the product (must be a number):");
  
  // ? Validation to ensure that the ID is a number
  while (typeof id === "undefined" || id === null || id === "" || isNaN(id)) {
    id = prompt("Invalid ID. Please, Enter a valid ID (must be a number):");

    if (id !== null && id !== "" && isNaN(id)) {
      alert("The ID must be a number. Try again.");
      id = undefined; 
    }
  }

  // ? Validates if the ID already exists in the products object
  if (products[id]) {
    alert(`The ID ${id} already exists in the inventory. Please enter a unique ID.`);
    return; // Exit the function if the ID already exists
  }

  let name = prompt("Enter de name of the product:");
  let category = prompt("Enter the category of the product:")
  let price = parseFloat(prompt("Enter the price of the product:"));

  // ? Validates if all the data is right
  if (id && name && category && !isNaN(price)) {
    products[id] = {id: parseInt(id), name: name, price: price};
    setProducts.push(name);
    mapProducts.set(category, name);
    alert("Product added succesfully.");
  } else {
    alert("Invalid data. Please, try again.");
  }
}

// ? Function to delete a specific product from the inventory 
function deleteProduct() {
  let productName = prompt("Enter the name of the product to delete:");

  // ? Validates if productName is empty or undefined
  if (productName === "" || productName === undefined || productName === null) {
    alert("ERROR: You did not entered a product.");
  } else {
    let found = false; 

    // ? Iterate through the products object to find the product by name
    for (const id in products) {
      if (productName.toLowerCase() === products[id].name.toLowerCase()) {
        delete products[id];
        // ? Remove the product from the set
        mapProducts.forEach((value, key) => {
          if (value.toLowerCase() === productName.toLowerCase()) {
            mapProducts.delete(key);
          }
        });
        // ? Remove the product from the setProducts array
        setProducts = setProducts.filter(product => product.toLowerCase() !== productName.toLowerCase());
        alert(`✅ Product "${productName}" deleted succesfully`);
        found = true;
        break; // ? Break the loop once the product entered has been found
      }
    }

    // ? Show a message if the product does not exist in the inventory
    if (!found) {
      alert(`❌ Product "${productName}" not found in the inventory`);
    }
  }
}


// ? Function to show all the products of the inventory
function showProducts() {

  let inventoryKeys = Object.keys(products)

  if (inventoryKeys.length === 0) {
    alert("No products registered in the inventory.");
    return;
  } else {
    inventoryContainer.innerHTML = "<h2>Inventory Products</h2>";
    setContainer.innerHTML = "<h2>Unique Products</h2>";
    mapContainer.innerHTML = "<h2>Category - Product</h2>";

    // ? Iterate through the products object to display each product
    for (const id in products) {
      inventoryContainer.innerHTML += `<p>🆔: ${products[id].id}, Name: ${products[id].name}, Price: $${products[id].price}</p>`;
    }

    // ? Display unique products
    setProducts.forEach(product => {
      setContainer.innerHTML += `<p class="center">${product}</p>`;
    });

    // ? Display category and product from the Map
    mapProducts.forEach((product, category) => {
      mapContainer.innerHTML += `<p>Category: ${category} - Product: ${product}</p>`;
    });

    // ? Open the modal window to show the products
    modalWindow.showModal();
    modalWindow.classList.add("open");

    // ? Log the products, unique products, and categories with their respective products (updated)
    console.log("Resgistered products in the inventory:", products);
    console.log("Unique products in the inventory:", setProducts);
    console.log("Categories and Products in the Map:", mapProducts);
  }
}

// ? Function to close the modal window
function closeModal() {
  if (modalWindow.open) {
    modalWindow.close();
    modalWindow.classList.remove("open");
    console.log("Modal closed successfully.");
  }
  else {
    console.warn("Modal is not open. Cannot close.");
  }
}
