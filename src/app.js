import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';
import routes from './routes';
import 'dotenv/config';

class App {
  constructor() {
    this.server = express();

    mongoose.connect(process.env.CONNECTIONSTRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    this.middleware();
    this.routes();
  }

  middleware() {
    this.server.use(cors());

    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'uploads'))
    );

    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
