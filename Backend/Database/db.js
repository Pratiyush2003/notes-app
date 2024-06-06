import { connect } from "mongoose";

const connectToMongo = async () => {
    try {
        await connect('mongodb+srv://mongod400:Gholat123456@cluster0.vmmy4f0.mongodb.net/eNotebook?retryWrites=true&w=majority')
        console.log('data base connected successfully');
    } catch (error) {
        console.log(error);
    }
}

export default connectToMongo