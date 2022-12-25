import express from "express";
import mongoose from "mongoose";
import path from "path";
import routes from "./routes";

class App{

    constructor(){
        this.server = express();

        mongoose.set("strictQuery", true);
        mongoose.connect("mongodb+srv://DevHouse:2001@devhouse.mzp8dqb.mongodb.net/DevHouse?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        this.middleware();
        this.routes();
    };

    middleware(){

        this.server.use(
            '/files',
            express.static(path.resolve(__dirname, '..', 'uploads'))
        )

        this.server.use(express.json());
    };

    routes(){
        this.server.use(routes);
    };
};

export default new App().server;