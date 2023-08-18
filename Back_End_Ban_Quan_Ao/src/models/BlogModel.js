import mongoose from "mongoose";
const blogSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        image: {
            type: String,
        },
        description: {
            type: String,
        },
    },
    { timestamps: true, versionKey: false }
);
export default mongoose.model("Blog", blogSchema);