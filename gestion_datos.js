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
