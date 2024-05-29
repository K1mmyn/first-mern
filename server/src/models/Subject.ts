import mongoose from "mongoose"

const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId



const SubjectSchema = new Schema({
   title: String,
   todos: [String]
})

const SubjectModel = mongoose.model('Subject', SubjectSchema)

export default SubjectModel

// !! TODO export todo model then create todo model when creating todo and add it ithe list of todos