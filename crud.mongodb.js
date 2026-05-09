// ==========================
// Crear base de datos
// ==========================

use tienda_online


// ==========================
// Crear colección
// ==========================

db.createCollection("productos")


// ==========================
// Agregar productos
// ==========================

db.productos.insertMany([

  {
    nombre: "Laptop Lenovo",
    precio: 850,
    stock: 10,
    categoria: "Tecnología"
  },

  {
    nombre: "Mouse Logitech",
    precio: 25,
    stock: 50,
    categoria: "Accesorios"
  },

  {
    nombre: "Teclado Mecánico",
    precio: 70,
    stock: 20,
    categoria: "Accesorios"
  },

  {
    nombre: "Monitor MSI",
    precio: 300,
    stock: 5,
    categoria: "Tecnología"
  }

])


// ==========================
// CREATE
// Agregar un producto nuevo
// ==========================

db.productos.insertOne({

  nombre: "Audífonos HyperX",
  precio: 90,
  stock: 15,
  categoria: "Audio"

})


// ==========================
// READ
// Ver todos los productos
// ==========================

db.productos.find()


// Buscar un producto

db.productos.find({

  nombre: "Mouse Logitech"

})


// ==========================
// UPDATE
// Cambiar precio
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


// Ver cambio realizado

db.productos.find({

  nombre: "Mouse Logitech"

})


// ==========================
// DELETE
// Eliminar producto
// ==========================

db.productos.deleteOne({

  nombre: "Teclado Mecánico"

})


// Ver productos después de eliminar

db.productos.find()


// ==========================
// Consultas extra
// ==========================


// Productos mayores a 100

db.productos.find({

  precio: {
    $gt: 100
  }

})


// Productos de tecnología

db.productos.find({

  categoria: "Tecnología"

})


// Ordenar por precio

db.productos.find().sort({

  precio: 1

})


// Contar productos

db.productos.countDocuments()
