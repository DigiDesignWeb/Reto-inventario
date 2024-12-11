/** 
 * 1 - Filtrar Productos con Descuento: Usa filter para obtener un nuevo array con los productos 
 * que tienen un descuento aplicado (es decir, discount > 0).
 * 
**/

const products = [
    { name: "Laptop",           category: "electrónica",    price: 1200,    stock: 5,       discount: 0 },
    { name: "Televisor",        category: "electrónica",    price: 800,     stock: 3,       discount: 10 },
    { name: "Sofá",             category: "hogar",          price: 500,     stock: 8,       discount: 15 },
    { name: "Mesa de comedor",  category: "hogar",          price: 700,     stock: 2,       discount: 0 },
    { name: "Pan",              category: "alimentos",      price: 1.5,     stock: 50,      discount: 0 },
    { name: "Leche",            category: "alimentos",      price: 1.2,     stock: 20,      discount: 5 },
];

let productsNew = products.filter((element) => {
    return(element.discount > 0)
}) 

console.log("Productos con Descuento:", productsNew);

/** 2- Calcular el Precio Final con Descuento: Usa map para calcular el precio final de los productos 
*    que tienen descuento y crea un nuevo array que incluya el priceAfterDiscount.
*/ 

const descuento = productsNew.map(productsNew => 
    
    { let priceAfterDiscount = productsNew.price - (productsNew.price * (productsNew.discount / 100)); 
        return { ...productsNew, priceAfterDiscount };
    }); 

console.log("Precio Final con Descuento:", descuento)

/* 3- Identificar Productos con Stock Bajo: Usa un bucle para identificar los productos 
*    con menos de 5 unidades en inventario y guárdalos en un array nuevo.
**/

let productStockBajo = products.filter((element) => {
    return(element.stock < 5)
}) 

console.log("Productos con Stock Bajo:", productStockBajo);

/* 4. Actualizar el Stock de un Producto: 
*     Crea una función que reciba el nombre de un producto y una cantidad a agregar. 
*     Usa un try...catch para verificar si el producto existe en el array.
*     Si existe, incrementa su stock; si no, lanza un error.
*/

function addStock(nameProduct, cantidad) { 
    
    try { 
        
        let product = products.find(product => product.name === nameProduct); 
        
        if (product) { 
            product.stock += cantidad; 
        } 
        else { 
            throw new Error(`El producto '${nameProduct}' no existe en el array.`); 
        } 
    } 
    catch (error) { 
        console.error(error.message);
    }
}
addStock("Sofá", 2) // Stock 10
addStock("Cama", 2) // El producto 'Cama' no existe en el array.
console.log("Stock actualizado: ",products)


/* 5. Resumen por Categorías: Usa un bucle para contar cuántos productos hay en cada categoría 
*     (electrónica, hogar, alimentos) y devuelve un objeto con este resumen.
*/

function stockCategoria(products) { 

    let resumen = { 'electrónica': 0, 'hogar': 0, 'alimentos': 0 }
    
    for (let i = 0; i < products.length; i++) { 
        
        let categoria = products[i].category; 
        
        if (resumen[categoria] !== undefined) { 
            
            resumen[categoria]++; 
        } 
    } return resumen; 
} 

let resumen = stockCategoria(products); 

console.log("Stock por categoría: ",resumen);