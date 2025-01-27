import mongoose from "mongoose";

export default async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URL!);
        const connection = mongoose.connection;

        connection.on('connected',()=>{
            console.log('Mongo connected');
        })
        connection.on('error',(err)=>{
            console.log('There is an error' + err);
            process.exit();
        })
    } catch (error) {
        console.log('Something is wrong')
        console.log(error)
    }
}