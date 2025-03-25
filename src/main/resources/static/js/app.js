/**
 * 
 */

const API_URL = 'http://localhost/api'; // Cambia la URL de la API si es necesario

// Referencias a los elementos del DOM
const productTable = document.getElementById('products-table').getElementsByTagName('tbody')[0];
const createProductForm = document.getElementById('create-product-form');
const createCategoryForm = document.getElementById('create-category-form');
const updateStockForm = document.getElementById('update-stock-form');
const productCategorySelect = document.getElementById('product-category');
const updateProductSelect = document.getElementById('update-product');

// Función para listar los productos
const listProducts = async () => {
    try {
        const response = await fetch(`${API_URL}/products`);
        const products = await response.json();

        // Limpiar la tabla
        productTable.innerHTML = '';

        // Agregar los productos a la tabla
        products.forEach(product => {
            const row = productTable.insertRow();
            row.innerHTML = `
                <td>${product.name}</td>
                <td>${product.category.name}</td>
                <td>${product.stock}</td>
                <td>
                    <button onclick="deleteProduct(${product.id})">Eliminar</button>
                </td>
            `;
        });

        // Llenar el selector de producto para actualizar stock
        updateProductSelect.innerHTML = '';
        products.forEach(product => {
            const option = document.createElement('option');
            option.value = product.id;
            option.textContent = product.name;
            updateProductSelect.appendChild(option);
        });
    } catch (error) {
        console.error('Error al listar productos:', error);
    }
};

// Función para listar categorías en el formulario
const listCategories = async () => {
    try {
        const response = await fetch(`${API_URL}/categories`);
        const categories = await response.json();

        // Llenar el selector de categorías
        productCategorySelect.innerHTML = '';
        categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category.id;
            option.textContent = category.name;
            productCategorySelect.appendChild(option);
        });
    } catch (error) {
        console.error('Error al listar categorías:', error);
    }
};

// Función para crear un producto
const createProduct = async (event) => {
    event.preventDefault();
    const productName = document.getElementById('product-name').value;
    const categoryId = document.getElementById('product-category').value;
    const stock = document.getElementById('product-stock').value;

    const product = {
        name: productName,
        category_id: categoryId,
        stock: stock
    };

    try {
        const response = await fetch(`${API_URL}/products`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        });

        if (response.ok) {
            alert('Producto creado correctamente');
            listProducts(); // Recargar la lista de productos
        }
    } catch (error) {
        console.error('Error al crear el producto:', error);
    }
};

// Función para crear una categoría
const createCategory = async (event) => {
    event.preventDefault();
    const categoryName = document.getElementById('category-name').value;

    const category = {
        name: categoryName
    };

    try {
        const response = await fetch(`${API_URL}/categories`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(category)
        });

        if (response.ok) {
            alert('Categoría creada correctamente');
            listCategories(); // Recargar la lista de categorías
        }
    } catch (error) {
        console.error('Error al crear la categoría:', error);
    }
};

// Función para actualizar el stock de un producto
const updateStock = async (event) => {
    event.preventDefault();
    const productId = updateProductSelect.value;
    const stock = document.getElementById('update-stock').value;

    const updatedProduct = {
        stock: stock
    };

    try {
        const response = await fetch(`${API_URL}/products/${productId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        });

        if (response.ok) {
            alert('Stock actualizado correctamente');
            listProducts(); // Recargar la lista de productos
        }
    } catch (error) {
        console.error('Error al actualizar el stock:', error);
    }
};

// Función para eliminar un producto
const deleteProduct = async (productId) => {
    try {
        const response = await fetch(`${API_URL}/products/${productId}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            alert('Producto eliminado correctamente');
            listProducts(); // Recargar la lista de productos
        }
    } catch (error) {
        console.error('Error al eliminar el producto:', error);
    }
};

// Cargar la lista de productos y categorías al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    listProducts();
    listCategories();
});

// Asignar los manejadores de eventos a los formularios
createProductForm.addEventListener('submit', createProduct);
createCategoryForm.addEventListener('submit', createCategory);
updateStockForm.addEventListener('submit', updateStock);
