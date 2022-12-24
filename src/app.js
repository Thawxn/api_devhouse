import express from "express";
import mongoose from "mongoose";
import routes from "./routes";

class App{

    constructor(){
        this.server = express();

        mongoose.set("strictQuery", true);
        mongoose.connect("mongodb+srv://thawxn:40028922Th.@devhouse.mzp8dqb.mongodb.net/devhouse?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        this.middleware();
        this.routes();
    };

    middleware(){
        this.server.use(express.json());
    };

    routes(){
        this.server.use(routes);
    };
};

export default new App().server;