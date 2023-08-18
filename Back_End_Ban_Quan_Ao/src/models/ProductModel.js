import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2"
const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
        },
        price: {
            type: Number,
            require: true,
        },
        image: {
            type: String,
            require: true,
        },
        description: {
            type: String,
            require: true,
        },
        categoryId: {
            type: mongoose.Types.ObjectId,
            ref: "Category",
            require: true,
        }
    },
    {timestamps: true, versionKey: false}
    
);

productSchema.plugin(mongoosePaginate);
export default mongoose.model("Product", productSchema)