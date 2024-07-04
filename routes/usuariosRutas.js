<<<<<<< HEAD
const ruta = require("express").Router();
const UsuarioClase = require("../clases/usuarioClase");
const UsuarioDB = require("../bd/usuarioDB");
const ProductoClase = require("../clases/productoClase");
const ProductoDB = require("../bd/productoDB"); //fdfdfdfgdfg

ruta.get("/productos", async (req, res) => {
    const productobd = new ProductoDB()
    var productos = await productobd.mostrarProductos();
    var productosCorrectos=[];
    productos.forEach(productos =>{
        const producto1 = new ProductoClase(productos);
        if(producto1.nombre!=undefined && producto1.categoria!=undefined && producto1.descripcion!=undefined){
            productosCorrectos.push(producto1.obtenerDatosP);
        }
    });
    res.render("mostrarProductos", {productosCorrectos});
});

ruta.get("/agregarProducto",(req,res)=>{
    res.render("formularioProducto");
});

ruta.post("/agregarProducto", async (req, res) => {
    console.log(req.body);
    const producto1 = new ProductoClase(req.body);
    if (producto1.nombre!=undefined && producto1.categoria!=undefined && producto1.descripcion!=undefined) {
        const productoDB = new ProductoDB();
        productoDB.nuevoProducto(producto1.obtenerDatosP);
        res.render("mostrarDatosP", producto1.obtenerDatosP);
    } 
    else {
        res.render("error");
    }
});

ruta.get("/editarProducto/:idproducto", async(req, res)=>{
    const productobd = new ProductoDB();
    const [[productos]]=await productobd.buscarProductoPorID(req.params.idproducto);
    console.log(productos);
    res.render("editarProducto", productos);
});

ruta.post ("/editarProducto", async (req, res) =>{
    const productobd = new ProductoDB();
    const producto1 = new ProductoClase(req.body);
    if (producto1.nombre!=undefined && producto1.categoria!=undefined && producto1.descripcion!=undefined) {
        await productobd.editarProducto(req.body);
        res.redirect("/productos");
    }
    else{
        res.render("error");
    }
});

ruta.get("/borrarProducto/:idproducto",async(req, res)=>{
    const productobd = new ProductoDB();
    await productobd.borrarProducto(req.params.idproducto);
    res.redirect("/productos");
});

ruta.get("/", async (req, res) => {
    const usuariobd = new UsuarioDB()
    var usuarios = await usuariobd.mostrarUsuarios();
    var usuariosCorrectos=[];
    usuarios.forEach(usuario =>{
        const usuario1 = new UsuarioClase(usuario);
        if(usuario1.nombre!=undefined && usuario1.celular!=undefined && usuario1.correo!=undefined){
            usuariosCorrectos.push(usuario1.obtenerDatos);
        }
    });
    res.render("mostrarUsuarios", {usuariosCorrectos});
});

ruta.get("/agregarUsuario",(req,res)=>{
    res.render("formulario");
});

ruta.post("/agregarUsuario", async (req, res) => {
    console.log(req.body);
    const usuario1 = new UsuarioClase(req.body);
    if (usuario1.nombre!=undefined && usuario1.celular!=undefined && usuario1.correo!=undefined) {
        const usuarioDB = new UsuarioDB();
        usuarioDB.nuevoUsuario(usuario1.obtenerDatos);
        res.render("mostrarDatos", usuario1.obtenerDatos);
    } 
    else {
        res.render("error");
    }
});

ruta.get("/editarUsuario/:idusuario", async(req, res)=>{
    const usuariobd = new UsuarioDB();
    const [[usuario]]=await usuariobd.buscarUsuarioPorID(req.params.idusuario);
    console.log(usuario);
    res.render("editarUsuario",usuario);
});

ruta.post ("/editarUsuario", async (req, res) =>{
    const usuariobd = new UsuarioDB();
    const usuario1 = new UsuarioClase(req.body);
    if(usuario1.nombre!=undefined && usuario1.celular!=undefined && usuario1.correo!=undefined){
        await usuariobd.editarUsuario(req.body);
        res.redirect("/");
    }
    else{
        res.render("error");
    }
});

ruta.get("/borrarUsuario/:idusuario",async(req, res)=>{
    const usuariobd = new UsuarioDB();
    await usuariobd.borrarUsuario(req.params.idusuario);
    res.redirect("/");
});

module.exports = ruta;
=======
const ruta = require("express").Router();
const UsuarioClase = require("../clases/usuarioClase");
const UsuarioDB = require("../bd/usuarioDB");
const ProductoClase = require("../clases/productoClase");
const ProductoDB = require("../bd/productoDB");

ruta.get("/productos", async (req, res) => {
    const productobd = new ProductoDB()
    var productos = await productobd.mostrarProductos();
    var productosCorrectos=[];
    productos.forEach(productos =>{
        const producto1 = new ProductoClase(productos);
        if(producto1.nombre!=undefined && producto1.categoria!=undefined && producto1.descripcion!=undefined){
            productosCorrectos.push(producto1.obtenerDatosP);
        }
    });
    res.render("mostrarProductos", {productosCorrectos});
});

ruta.get("/agregarProducto",(req,res)=>{
    res.render("formularioProducto");
});

ruta.post("/agregarProducto", async (req, res) => {
    console.log(req.body);
    const producto1 = new ProductoClase(req.body);
    if (producto1.nombre!=undefined && producto1.categoria!=undefined && producto1.descripcion!=undefined) {
        const productoDB = new ProductoDB();
        productoDB.nuevoProducto(producto1.obtenerDatosP);
        res.render("mostrarDatosP", producto1.obtenerDatosP);
    } 
    else {
        res.render("error");
    }
});

ruta.get("/editarProducto/:idproducto", async(req, res)=>{
    const productobd = new ProductoDB();
    const [[productos]]=await productobd.buscarProductoPorID(req.params.idproducto);
    console.log(productos);
    res.render("editarProducto", productos);
});

ruta.post ("/editarProducto", async (req, res) =>{
    const productobd = new ProductoDB();
    const producto1 = new ProductoClase(req.body);
    if (producto1.nombre!=undefined && producto1.categoria!=undefined && producto1.descripcion!=undefined) {
        await productobd.editarProducto(req.body);
        res.redirect("/productos");
    }
    else{
        res.render("error");
    }
});

ruta.get("/borrarProducto/:idproducto",async(req, res)=>{
    const productobd = new ProductoDB();
    await productobd.borrarProducto(req.params.idproducto);
    res.redirect("/productos");
});

ruta.get("/", async (req, res) => {
    const usuariobd = new UsuarioDB()
    var usuarios = await usuariobd.mostrarUsuarios();
    var usuariosCorrectos=[];
    usuarios.forEach(usuario =>{
        const usuario1 = new UsuarioClase(usuario);
        if(usuario1.nombre!=undefined && usuario1.celular!=undefined && usuario1.correo!=undefined){
            usuariosCorrectos.push(usuario1.obtenerDatos);
        }
    });
    res.render("mostrarUsuarios", {usuariosCorrectos});
});

ruta.get("/agregarUsuario",(req,res)=>{
    res.render("formulario");
});

ruta.post("/agregarUsuario", async (req, res) => {
    console.log(req.body);
    const usuario1 = new UsuarioClase(req.body);
    if (usuario1.nombre!=undefined && usuario1.celular!=undefined && usuario1.correo!=undefined) {
        const usuarioDB = new UsuarioDB();
        usuarioDB.nuevoUsuario(usuario1.obtenerDatos);
        res.render("mostrarDatos", usuario1.obtenerDatos);
    } 
    else {
        res.render("error");
    }
});

ruta.get("/editarUsuario/:idusuario", async(req, res)=>{
    const usuariobd = new UsuarioDB();
    const [[usuario]]=await usuariobd.buscarUsuarioPorID(req.params.idusuario);
    console.log(usuario);
    res.render("editarUsuario",usuario);
});

ruta.post ("/editarUsuario", async (req, res) =>{
    const usuariobd = new UsuarioDB();
    const usuario1 = new UsuarioClase(req.body);
    if(usuario1.nombre!=undefined && usuario1.celular!=undefined && usuario1.correo!=undefined){
        await usuariobd.editarUsuario(req.body);
        res.redirect("/");
    }
    else{
        res.render("error");
    }
});

ruta.get("/borrarUsuario/:idusuario",async(req, res)=>{
    const usuariobd = new UsuarioDB();
    await usuariobd.borrarUsuario(req.params.idusuario);
    res.redirect("/");
});

module.exports = ruta;
>>>>>>> 2bcf9ef260450b658da6e2fcab87e55e51e9196c
