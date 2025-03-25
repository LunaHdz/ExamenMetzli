-- init.sql

-- Crear la tabla categories
CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

-- Crear la tabla products
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    stock INT NOT NULL,
    category_id INT,
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE
);

-- Insertar algunas categorías de ejemplo
INSERT INTO categories (name) VALUES
('Electronics'),
('Clothing'),
('Furniture');

-- Insertar algunos productos de ejemplo
INSERT INTO products (name, stock, category_id) VALUES
('Laptop', 10, 1),
('Smartphone', 20,
