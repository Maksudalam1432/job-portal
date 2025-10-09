    import mongoose from "mongoose";

    const connectdb=async ()=>{
        try{
    
        await mongoose.connect(process.env.MONGO_URL)
        console.log("MONGO DB CONNECTION Succesfully")
        }
        catch(error){
            console.log("connection failed",error)
        }
    }

    export default connectdb