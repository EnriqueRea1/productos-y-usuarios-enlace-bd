const ConectarBD = require ("./conexionBD");

class ProductoDB extends ConectarBD {
    constructor() {
        super();
    }

    async nuevoProducto(producto) {
        const sql = "INSERT INTO producto VALUES(null, '"+producto.nombre+"', '"+producto.categoria+"', '"+producto.descripcion+"');";
        try {
            await this.conectarMySQL();
            await this.conexion.execute(sql);
            await this.cerrarConexion();
            console.log("Producto insertado a MySql");
        } catch (error) {
            console.error("Error al insertar producto en MySql" +error);
            console.error(sql);
        }
    }

    async mostrarProductos(){
        const sql = "SELECT * FROM producto";
        var productosBD;
        try{
            await this.conectarMySQL();
            [productosBD]=await this.conexion.execute(sql);
            await this.cerrarConexion();
            console.log("Productos Recuperados");
            // console.log(usuariosBD);
            return productosBD;
        } catch (error){
            console.error("Error al recuperar los datos de productos "+error);
            console.error(sql);
        }
    }
    async buscarProductoPorID(idProducto){
        const sql="SELECT * FROM producto WHERE idproducto="+ idProducto;
        try {
            await this.conectarMySQL();
            const producto=await this.conexion.execute(sql);
            await this.cerrarConexion();
            console.log("Producto recuperado correctamente");
            return producto;
        } catch (error){
            console.error("Error al recuperar el producto "+ error);
            console.error(sql);
        }
    }

    async editarProducto(producto){
        const sql2=`
        UPDATE producto SET
        nombre="${producto.nombre}",
        categoria="${producto.categoria}",
        descripcion="${producto.descripcion}"
        WHERE idproducto="${producto.idproducto}"
        `;
        try {
            await this.conectarMySQL();
            await this.conexion.execute(sql2);
            await this.cerrarConexion();
        } catch (error) {
            console.error("Error al editar producto"+error);
            console.error(sql12);
        }
    }

    async borrarProducto (idproducto){
        const sql="DELETE FROM producto WHERE idproducto="+idproducto;
        try {
            await this.conectarMySQL();
            await this.conexion.execute(sql);
            await this.cerrarConexion();
        } catch (error) {
            console.error("Error al borrar el producto"+error);
            console.error(sql);
        }
    }
}
module.exports = ProductoDB;