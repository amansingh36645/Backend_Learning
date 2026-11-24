const mongoose = require('mongoose')


async function connectDB (){
  await mongoose.connect(`mongodb+srv://backend-learning:qYUIK3SgU1qP36eA@backend-learning.vmsrpyx.mongodb.net/mydb`)

  console.log("connected to database")
}

module.exports = connectDB