const express = require("express");
const noteModle = require("./models/note.model");

const app = express();

// let products = [
//   { id: 1, name: "Laptop", price: 50000 },
//   { id: 2, name: "Mouse", price: 800 },
//   { id: 3, name: "Keyboard", price: 1500 },
// ];

app.use(express.json());

// GET

// app.get("/product", (req, res) => {
//   res.status(200).json({
//     msg: "Product Fetched",
//     Products: products,
//   });
// });

// GET BY ID

// app.get("/product/:id", (req, res) => {
//   const id = Number(req.params.id);
//   const product = products.find((item) => item.id === id);

//   if (Number.isNaN(id)) {
//     res.status(400).json({
//       msg: "Invalid product ID",
//     });
//     return;
//   } else if (!product) {
//     res.status(404).json({
//       msg: "Product not found",
//     });
//     return;
//   } else {
//     res.status(200).json({
//       msg: "Product By ID",
//       product: product,
//     });
//     return;
//   }
// });

// ABOVE COMMENTED APIS USED WHEN WE DONT USED ANY DATABASE

// POST

app.post("/notes", async (req, res) => {
  const data = req.body;
  await noteModle.create({
    title: data.title,
    description: data.description,
  });

  res.status(201).json({
    msg: "notes created",
  });
});

// GET

app.get("/notes", async (req,res) => {
  const note = await noteModle.find()
  res.status(200).json({
    "msg":"fetched msg",
    "notes": note
  })
})

// GET BY ID

app.get("/notes/:id", async (req,res)=>{
  const id = req.params.id
  const note = await noteModle.findOne({
    _id: id
  })

  res.status(200).json({
    "msg": "fetched by id",
    "notes": note
  })
})

// DELETE

app.delete("/notes/:id", async (req,res) => {
  const id = req.params.id
  await noteModle.findOneAndDelete({
    _id: id
  })

  res.status(200).json({
    "msg":"notes deleted"
  })
})

// PATCH

app.patch("/notes/:id", async (req,res) => {
  const id = req.params.id
  const description = req.body.description

  await noteModle.findOneAndUpdate({
    _id : id
  },{
    "description" : description
  })

  res.status(200).json({
    "msg":"updated by id"
  })
})




module.exports = app;
