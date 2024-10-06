import Producto from "../database/model/productos.js";


export const funcionPrueba = (req, res) => {
  console.log("alguien hizo una solicitud get a la ruta de prueba");
  res.send("hola mundo desde el backend");
};

export const crearProducto = async (req, res) => {
try {
  //extraer el producto del body de la solicitud (request)
      //validar los datos del body
  //crear un objeto con el modelo producto Producto
const productoNuevo = new Producto(req.body);
  //guardar el objeto en la BD
await productoNuevo.save()
  //enviar la respuesta que pdimos crear el prodcuto
res.status(201).json({mensaje:'El producto fue creado correctamente'})
} catch (error) {
  console.error(error)
  res.status(500).json({mensaje:'ocurrio un error,no se pudo crear el producto'})
}
};
