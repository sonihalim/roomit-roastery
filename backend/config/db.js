import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://roomitroaster:soni123456@cluster0.uhyfo4g.mongodb.net/roomit-roast').then(()=>console.log("DB Connected"));
}