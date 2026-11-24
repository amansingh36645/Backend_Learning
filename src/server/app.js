const express = require("express");

const app = express();

let products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mouse", price: 800 },
  { id: 3, name: "Keyboard", price: 1500 },
];

app.use(express.json());

// GET

app.get("/product", (req, res) => {
  res.status(200).json({
    msg: "Product Fetched",
    Products: products,
  });
});

// GET BY ID

app.get("/product/:id", (req, res) => {
  const id = Number(req.params.id);
  const product = products.find((item) => item.id === id);

  if (Number.isNaN(id)) {
    res.status(400).json({
      msg: "Invalid product ID",
    });
    return;
  } else if (!product) {
    res.status(404).json({
      msg: "Product not found",
    });
    return;
  } else {
    res.status(200).json({
      msg: "Product By ID",
      product: product,
    });
    return;
  }
});

module.exports = app;
