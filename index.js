import express from "express";
import morgan from "morgan";
import cors from "cors";

console.log("hola mundo");
// 1- configurar un puerto
const app = express();

app.set("port", process.env.PORT || 4000);
app.listen(app.get("port"), () => {
  console.info("Estoy escuchando el puerto " + app.get("port"));
});

//2- configurar middlewares
app.use(morgan("dev")); // nos da informacion extra en la terminar
app.use(cors()); // permite conexiones remotas
app.use(express.json()); //interpretar losd ato en formato json de la solicitud
app.use(express.urlencoded({ extended: true }));

// 3- configurar las rutas
// http://localhost:4000/prueba
app.get("/prueba", (req, res, next) => {
  console.log("alguien hizo una solicitud get a la ruta de prueba");
  res.send("hola mundok desde el backend");
});
