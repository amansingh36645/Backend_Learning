const app = require("./src/server/app");
const connectDB = require("./src/db/db")

connectDB()

app.listen(3000, () => {
  console.log("server is running on 3000");
});
