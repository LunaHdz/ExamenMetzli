# ExamenMetzli
Examen para Desarrollador Full Stack

# Gestión de Productos y Categorías

Este es un proyecto que permite gestionar productos y categorías en una tienda en línea mediante una API REST. La interfaz permite listar productos, crear nuevos productos y categorías, actualizar el stock de productos y eliminar productos.

## Requisitos

Para ejecutar el proyecto, asegúrate de tener instalados los siguientes programas:

- **Git**: Para clonar el repositorio.
- **Node.js**: Para instalar las dependencias y ejecutar el servidor de desarrollo (si usas un backend de Node.js).
- **Servidor Web** (si usas una API en Laravel o PHP): Para ejecutar la API (o usa un servidor local en tu backend).
- **Navegador Web**: Para probar la interfaz.

## Instrucciones para clonar y ejecutar el proyecto

### 1. **Clonar el repositorio**

Primero, clona el repositorio en tu máquina local utilizando Git. Abre tu terminal y ejecuta el siguiente comando:


git clone  https://github.com/LunaHdz/ExamenMetzli.git

Se crea una nueva rama

git branch NuevaRama

Se cambia a la nueva rama

git checkout NuevaRama

Se actualiza a la rama donde subi los cambios MetzliExamen

git pull origin MetzliExamen

Este sistema es una aplicación web que permite gestionar productos y categorías en una tienda en línea. Los usuarios pueden:

Listar todos los productos con su categoría y stock disponible.

Crear nuevos productos y categorías mediante formularios.

Actualizar el stock de los productos existentes.

Eliminar productos del inventario.

El sistema está diseñado con un backend basado en una API REST (que puede estar implementado en tecnologías como Laravel o Node.js) y una interfaz frontend simple usando HTML, CSS y JavaScript para interactuar con la API.

Decisiones técnicas tomadas
Arquitectura basada en API REST:

API RESTful: La aplicación sigue la arquitectura REST para la gestión de recursos (productos y categorías), lo que facilita su escalabilidad y separación entre el frontend y el backend.

HTTP Methods:

GET para listar productos y categorías.

POST para crear productos y categorías.

PUT para actualizar el stock de un producto.

DELETE para eliminar productos.

Backend (API):

Se puede usar Laravel o Node.js (con Express) como el framework backend. Ambos frameworks son robustos y bien soportados para crear API RESTful.

Laravel: Utiliza PHP y ofrece una estructura de trabajo robusta, además de herramientas integradas como migraciones de base de datos y autenticación.

Node.js: Proporciona un entorno rápido y ligero para la creación de APIs con JavaScript, utilizando frameworks como Express.js.

Base de Datos:

La base de datos está diseñada con dos tablas principales: products (productos) y categories (categorías), donde productos tiene una clave foránea (category_id) que hace referencia a categories.

Utilización de relaciones entre tablas (uno a muchos): Un producto pertenece a una categoría.

Frontend:

HTML, CSS y JavaScript se usan para diseñar la interfaz de usuario y permitir la interacción con la API a través de AJAX (mediante la Fetch API).

El frontend está diseñado para ser sencillo y funcional, permitiendo a los usuarios realizar todas las acciones necesarias sin recargar la página.

Comunicaciones cliente-servidor:

La interfaz de usuario realiza solicitudes HTTP al servidor backend utilizando Fetch API, que permite obtener, crear, actualizar y eliminar productos de manera asíncrona sin necesidad de recargar la página.

Autenticación y autorización:

Para este ejemplo básico, no se implementa un sistema de autenticación o autorización. Sin embargo, Laravel y Node.js ofrecen opciones para implementar JWT o OAuth si se desea añadir autenticación en el futuro.

Estilo de desarrollo:

El código está estructurado para seguir buenas prácticas de organización. Los formularios están separados en secciones, y las funcionalidades de la API están modularizadas en el backend.

Opcionales: Notas sobre posibles mejoras
Autenticación de usuarios:

Actualmente, no se ha implementado un sistema de autenticación, lo que significa que cualquiera puede acceder a la API sin restricciones. Se podría agregar autenticación de usuarios mediante JWT o OAuth, lo que permitiría manejar roles de usuarios (admin, usuario) y control de acceso.

Interfaz más avanzada:

La interfaz es sencilla y funcional, pero podría mejorarse con un diseño más interactivo utilizando bibliotecas como React o Vue.js. Esto haría la aplicación más dinámica y fácil de mantener a largo plazo.

Implementar validaciones más robustas en los formularios y agregar mensajes de error y éxito.

Búsqueda y filtrado:

Agregar funcionalidades de búsqueda y filtrado para los productos, como filtrar por categoría o por stock disponible. Esto mejoraría la usabilidad de la plataforma cuando se tiene un número elevado de productos.

Paginación:

Implementar paginación en la lista de productos para evitar cargar demasiados productos en una sola página. Esto optimiza el rendimiento y mejora la experiencia del usuario.

Optimización de rendimiento:

Caché de datos: Implementar mecanismos de caché en el backend para reducir la carga de las consultas a la base de datos, especialmente cuando la lista de productos o categorías es grande.

Lazy loading o infinite scrolling para cargar los productos a medida que el usuario se desplaza hacia abajo.

Testing:

Implementar pruebas unitarias y pruebas de integración tanto para el frontend como para el backend. En el backend, se podrían usar herramientas como PHPUnit para Laravel o Jest para Node.js, y en el frontend, se podrían realizar pruebas con Jest o Mocha.

Documentación de la API:

Utilizar herramientas como Swagger o Postman para documentar la API de manera más formal, lo que facilitaría la integración con otros sistemas o el uso por parte de otros desarrolladores.

Despliegue en producción:

Actualmente, el proyecto está diseñado para ejecutarse localmente, pero se podría añadir un proceso de despliegue automatizado usando herramientas como Docker o servicios en la nube como AWS, Heroku, o Vercel para facilitar el despliegue en un entorno de producción.

Internacionalización (i18n):

Si se desea ampliar el sistema a más idiomas, se podría implementar un sistema de internacionalización en el frontend (por ejemplo, usando i18next en React) y en el backend (por ejemplo, en Laravel utilizando las capacidades de traducción).

Resumen:
Este sistema es una solución sencilla para la gestión de productos y categorías en una tienda en línea. Las decisiones técnicas adoptadas se centran en una arquitectura RESTful con tecnologías ampliamente utilizadas como Laravel/Node.js para el backend y HTML/JavaScript para el frontend. Las posibles mejoras incluyen la implementación de autenticación, un diseño de interfaz más avanzado, y optimización de rendimiento, entre otras.

