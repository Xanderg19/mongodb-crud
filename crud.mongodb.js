
use tienda_online


// Crear colección

db.createCollection("productos")


// ==========================
// CREATE
// Agregar productos
// ==========================

db.productos.insertMany([

  {
    nombre: "Laptop Lenovo",
    precio: 850,
    stock: 10
  },

  {
    nombre: "Mouse Logitech",
    precio: 25,
    stock: 50
  }

])


// ==========================
// READ
// Ver productos
// ==========================

db.productos.find()


// ==========================
// UPDATE
// Actualizar precio
// ==========================

db.productos.updateOne(

  {
    nombre: "Mouse Logitech"
  },

  {
    $set: {
      precio: 30
    }
  }

)


// ==========================
// DELETE
// Eliminar producto
// ==========================

db.productos.deleteOne({

  nombre: "Laptop Lenovo"

})
