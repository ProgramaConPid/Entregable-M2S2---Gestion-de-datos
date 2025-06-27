// ? Welcome message to the program
console.log("Gestion de datos con Objetos, Sets y Maps.");

// ? Started products in an object
let products = {
  1: {id: 1, name: "Portatil Dell", price: 1750},
  2: {id: 2, name: "Teclado Redragon", price: 500},
  3: {id: 3, name: "Diademas Sony", price: 250}
}

console.log("Productos registrados en el inventario", products);

// ? Avoid duplicate products using Set
let setProducts = Object.values(products).map((product) => product.name)
console.log("Set de productos unicos", setProducts);

// ? Create a map to asscoiate each category with their respective product
let mapProducts = new Map([
  ["Electronica", `${products[1].name}`],
  ["Accesorios", `${products[2].name}`],
  ["Accsesorios", `${products[3].name}`],
])
console.log("Mapa de productos y categorias", mapProducts);

// ? Iterate the object using the loop for in
for (const id in products) {
  console.log(`Product ID:${id} =>`, products[id]);
}

// ? Iterate the Set using the loop for of
for (const product of setProducts) {
  console.log(`Producto unico: ${product}`);
}

// ? Iterate the Map using the loop forEach
console.log("\n -- Products -- \n");
mapProducts.forEach((product, key) => {
  
  console.log(`Category: ${key} - Product: ${product}`);

})

// ? Testing and Validations
console.group("Pruebas y Validaciones");
console.log("Productos registrados: ", products);
console.log("Productos registrados unicos: ", setProducts);
console.log("Categorias y productos: ", mapProducts);
console.groupEnd()

// ! Additional Functions
// ! Incorporate Functions to addProduct, deleteProduct and showProducts

// ? Function to add a new product (id, name, price)
function addProduct() {

  let id = prompt("Enter the ID of the product (must be a number):");

  // ? Validation to ensure that the ID is a number
  while (typeof id === "undefined" || id === null || id === "") {
    id = prompt("Invalid ID. Please, Enter a valid ID (must be a number):");
    if (id !== null && id !== "" && isNaN(id)) {
      alert("The ID must be a number. Try again.");
      id = undefined; 
    }
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

  alert("Registered products: " + JSON.stringify(products, null, 2));
  alert("Registered unique products: " + JSON.stringify(setProducts, null, 2));
  alert("Registered products (Category - Product): " + JSON.stringify(Array.from(mapProducts.entries()), null, 2));

}