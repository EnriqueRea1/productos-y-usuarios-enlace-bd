class Producto {
    constructor(producto) {
        this.id = producto.idproducto;
        this.nombre = producto.nombre;
        this.categoria = producto.categoria;
        this.descripcion = producto.descripcion;
    }

    set id(id) {
        this._id = id;
    }

    set nombre(nombre) {
        var regexNombre = /^[A-ZÁÉÍÓÚÑ][a-záéíóúñ']{1,}([ ][A-ZÁÉÍÓÚÑ][a-záéíóúñ']{1,}){0,}$/;
        if (regexNombre.test(nombre)) {
            this._nombre = nombre;
        } else {
            console.error("Nombre inválido");
            this._nombre = null;
        }
    }

    set categoria(categoria) {
        if (typeof categoria === 'string') {
            this._categoria = categoria;
        } else {
            console.error("Categoría inválida");
            this._categoria = null;
        }
    }

    set descripcion(descripcion) {
        if (typeof descripcion === 'string') {
            this._descripcion = descripcion;
        } else {
            console.error("Descripción inválida");
            this._descripcion = null;
        }
    }

    get id() {
        return this._id;
    }

    get nombre() {
        return this._nombre;
    }

    get categoria() {
        return this._categoria;
    }

    get descripcion() {
        return this._descripcion;
    }

    get obtenerDatosP() {
        return {
            idproducto: this.id,
            nombre: this.nombre,
            categoria: this.categoria,
            descripcion: this.descripcion
        }
    }
}

module.exports = Producto;