const express = require("express");
const cors = require("cors");

const data = require("./data/products.json");

const app = express();
const port = process.env.PORT || 3000;
app.use(cors({origin:true}));

app.get("/", (req, res) => {
    res.send("Server is Running. Get all Products API Data : [/api/products] and Individual Product  API Data : [/api/products/id]");
});

app.get("/api/products", (req, res) => {
    res.send(data);
});
const findById = (data, id) => {
    return data.find(item => item.id === id);
};

app.get("/api/products/:id", (req, res) => {
    const id = req.params.id;
    const result = findById(data, id);
    res.send(result);
});
app.listen(port, () => {
    console.log(`Server is Running on Port : ${port}`);
  });