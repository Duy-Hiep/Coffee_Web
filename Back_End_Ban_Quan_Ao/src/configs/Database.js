import mongoose from "mongoose";

const connectDb = async(url) => {
    try {
        const connect = await mongoose.connect(url);
        console.log(`Mongoose Connected: ${connect.connection.host} Thanh cong`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}

export default connectDb