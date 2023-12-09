const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./routes/products");
const priceRoutes = require('./routes/prices');
const userRoutes = require('./routes/users');
const { dbUser, dbPassword } = require("./config");

const app = express();
const port = 3000;

// MongoDB connection
mongoose
  .connect(
    `mongodb://${dbUser}:${dbPassword}@ac-aemgtkt-shard-00-00.unqyghm.mongodb.net:27017,ac-aemgtkt-shard-00-01.unqyghm.mongodb.net:27017,ac-aemgtkt-shard-00-02.unqyghm.mongodb.net:27017/?replicaSet=atlas-y8oxsk-shard-0&ssl=true&authSource=admin`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Conectado a MongoDB"))
  .catch((err) => console.error("Error al conectar con MongoDB", err));

app.use(express.json());

// Routes
app.use("/api", productRoutes);
app.use('/api', priceRoutes);
app.use('/api', userRoutes);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
