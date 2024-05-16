import query from "../db/utils";

async function findOne(productId) {
    return await query('SELECT * FROM products WHERE ProductID = ?;', [productId]);

};

async function findAll() {
    return await query('SELECT * FROM products;');
};

async function addOne(product) {
    return await query('INSERT INTO products (ProductID, Name, Price, CategoryID, OnSale, StockLevel) VALUES(?, ?, ?, ?, ?, ?)', [product.ProductID, product.Name, product.Price, product.CategoryID, product.OnSale, product.StockLevel ] )
};

async function updateOne(productId, products) {
    return await query('UPDATE products SET ? WHERE ProductID = ?', [products, productId]);
};

async function removeOne(productId) {
    return await query('DELETE FROM products WHERE ProductID = ?', [productId]);

};

//Export the entire module as the default export
export  {
    findOne,
    findAll,
    addOne,
    updateOne,
    removeOne,
};