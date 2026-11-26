const mongooose = require('mongoose')

const noteSchema = new mongooose.Schema({
  title:String,
  description:String,
})

const noteModle = new mongooose.model('note', noteSchema)

module.exports = noteModle