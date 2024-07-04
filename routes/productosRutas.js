<<<<<<< HEAD
// const ruta = require("express").Router();
// const ProductoClase = require("../clases/productoClase");
// const ProductoDB = require("../bd/productoDB");

// ruta.get("/productos", async (req, res) => {
//     const productobd = new ProductoDB()
//     var productos = await productobd.mostrarProductos();
//     var productosCorrectos = [];
//     productos.forEach(productos => {
//         const producto1 = new ProductoClase(productos);
//         if (producto1.nombre != undefined && producto1.categoria != undefined && producto1.descripcion != undefined) {
//             productosCorrectos.push(producto1.obtenerDatosP);
//         }
//     });
//     res.render("mostrarProductos", { productosCorrectos });
// });

// ruta.get("/agregarProducto", (req, res) => {
//     res.render("formulario");
// });

// ruta.post("/agregarProducto", async (req, res) => {
//     console.log(req.body);
//     const producto1 = new ProductoClase(req.body);
//     if (producto1.nombre != undefined && producto1.categoria != undefined && producto1.descripcion != undefined) {
//         const productoDB = new ProductoDB();
//         productoDB.nuevoProducto(producto1.obtenerDatosP);
//         res.render("mostrarDatosP", producto1.obtenerDatosP);
//     }
//     else {
//         res.render("error");
//     }
// });

// ruta.get("/editarProducto/:idproducto", async (req, res) => {
//     const productobd = new ProductoDB();
//     const [[productos]] = await productobd.buscarProductoPorID(req.params.idproducto);
//     console.log(productos);
//     res.render("editarProducto", productos);
// });

// ruta.post("/editarProducto", async (req, res) => {
//     const productobd = new ProductoDB();
//     const producto1 = new ProductoClase(req.body);
//     if (producto1.nombre != undefined && producto1.categoria != undefined && producto1.descripcion != undefined) {
//         await productobd.editarProducto(req.body);
//         res.redirect("/productos");
//     }
//     else {
//         res.render("error");
//     }
// });

// ruta.get("/borrarProducto/:idproducto", async (req, res) => {
//     const productobd = new ProductoDB();
//     await productobd.borrarProducto(req.params.idproducto);
//     res.redirect("/productos");
// });

// module.exports = ruta;
=======
// const ruta = require("express").Router();
// const ProductoClase = require("../clases/productoClase");
// const ProductoDB = require("../bd/productoDB");

// ruta.get("/productos", async (req, res) => {
//     const productobd = new ProductoDB()
//     var productos = await productobd.mostrarProductos();
//     var productosCorrectos = [];
//     productos.forEach(productos => {
//         const producto1 = new ProductoClase(productos);
//         if (producto1.nombre != undefined && producto1.categoria != undefined && producto1.descripcion != undefined) {
//             productosCorrectos.push(producto1.obtenerDatosP);
//         }
//     });
//     res.render("mostrarProductos", { productosCorrectos });
// });

// ruta.get("/agregarProducto", (req, res) => {
//     res.render("formulario");
// });

// ruta.post("/agregarProducto", async (req, res) => {
//     console.log(req.body);
//     const producto1 = new ProductoClase(req.body);
//     if (producto1.nombre != undefined && producto1.categoria != undefined && producto1.descripcion != undefined) {
//         const productoDB = new ProductoDB();
//         productoDB.nuevoProducto(producto1.obtenerDatosP);
//         res.render("mostrarDatosP", producto1.obtenerDatosP);
//     }
//     else {
//         res.render("error");
//     }
// });

// ruta.get("/editarProducto/:idproducto", async (req, res) => {
//     const productobd = new ProductoDB();
//     const [[productos]] = await productobd.buscarProductoPorID(req.params.idproducto);
//     console.log(productos);
//     res.render("editarProducto", productos);
// });

// ruta.post("/editarProducto", async (req, res) => {
//     const productobd = new ProductoDB();
//     const producto1 = new ProductoClase(req.body);
//     if (producto1.nombre != undefined && producto1.categoria != undefined && producto1.descripcion != undefined) {
//         await productobd.editarProducto(req.body);
//         res.redirect("/productos");
//     }
//     else {
//         res.render("error");
//     }
// });

// ruta.get("/borrarProducto/:idproducto", async (req, res) => {
//     const productobd = new ProductoDB();
//     await productobd.borrarProducto(req.params.idproducto);
//     res.redirect("/productos");
// });

// module.exports = ruta;
>>>>>>> 2bcf9ef260450b658da6e2fcab87e55e51e9196c
