import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://sonihalim:soni123456@cluster0.k8gm5ii.mongodb.net/roomit-roast').then(()=>console.log("DB Connected"));
}