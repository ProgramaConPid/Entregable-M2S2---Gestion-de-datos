console.log("Gestion de datos con Objetos, Sets y Maps.");

// Started products in an object
let products = {
  1: {id: 1, name: "Portatil Dell", price: 1750},
  2: {id: 2, name: "Teclado Redragon", price: 500},
  3: {id: 3, name: "Diademas Sony", price: 250}
}

console.log("Productos registrados en el inventario", products);

// Avoid duplicate products using Set
let setProducts = Object.values(products).map((product) => product.name)
console.log("Set de productos unicos", setProducts);

// Create a map to asscoiate each category with their respective product
let mapProducts = new Map([
  ["Electronica", `${products[1].name}`],
  ["Accesorios", `${products[2].name}`],
  ["Accsesorios", `${products[3].name}`],
])
console.log("Mapa de productos y categorias", mapProducts);

// Iterate the object using the loop for in
for (const id in products) {
  console.log(`Product ID:${id} =>`, products[id]);
}

// Iterate the Set using the loop for of
for (const product of setProducts) {
  console.log(`Producto unico: ${product}`);
}

// Iterate the Map using the loop forEach
console.log("\n -- Products -- \n");
mapProducts.forEach((product, key) => {
  
  console.log(`Category: ${key} - Product: ${product}`);

})

// Testing and Validations
console.group("Pruebas y Validaciones");
console.log("Productos registrados: ", products);
console.log("Productos registrados unicos: ", setProducts);
console.log("Categorias y productos: ", mapProducts);
console.groupEnd()

// ! Additional Functions
// ! Incorporate Functions to addProduct, deleteProduct and showProducts

// ? Function to add a new product (id, name, price)
function addProduct() {

  let id = prompt("Ingrese el ID del producto (debe ser un numero):");

  // ? Validation to ensure that the ID is a number
  while (typeof id === "undefined" || id === null || id === "") {
    id = prompt("ID invalido. Por favor, ingrese un ID valido (debe ser un numero):");
    if (id !== null && id !== "" && isNaN(id)) {
      alert("El ID debe ser un numero. Intente de nuevo.");
      id = undefined; 
    }
  }

  let name = prompt("Ingrese el nombre del producto:");
  let price = parseFloat(prompt("Ingrese el precio del producto:"));

  // ? Validates if all the data is right
  if (id && name && !isNaN(price)) {
    products[id] = {id: parseInt(id), name: name, price: price};
    setProducts.push(name);
    mapProducts.set("name", name);
    alert("Producto agregado exitosamente.");
  } else {
    alert("Datos invalidos. Por favor, intente de nuevo.");
  }
}

// ? Function to delete a specific product from the inventory 
function deleteProduct() {
  let productName = prompt("Ingresa el nombre del producto a eliminar");

  // ? Validates if productName is empty or undefined
  if (productName === "" || productName === undefined || productName === null) {
    alert("ERROR: No ingresaste ningún producto.");
  } else {
    let found = false; 

    for (const id in products) {
      if (productName.toLowerCase() === products[id].name.toLowerCase()) {
        delete products[id];
        alert(`✅ Producto "${productName}" eliminado con éxito.`);
        found = true;
        break; // ? Break the loop once the product entered has been found
      }
    }

    // ? Show a message if the product does not exist in the inventory
    if (!found) {
      alert(`❌ Producto "${productName}" no encontrado en el inventario.`);
    }
  }
}


// ? Function t show all the products of the inventory
function showProducts() {

  alert("Productos registrados: " + JSON.stringify(products, null, 2));
  console.log("Productos registrados", products);

}