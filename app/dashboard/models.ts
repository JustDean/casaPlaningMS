import { Schema, model} from "mongoose"

const BlogSchema: Schema = new Schema({
    name: String
})

const Blog = model("Blog", BlogSchema)

export {Blog}