import mongoose from 'mongoose';
import { app } from './app';

const URI  = process.env.DB_URI;

const start = async () => {
  try {
    await mongoose.connect(URI!, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
  } catch (err) {
    console.error(err);
  }

  const port = process.env.PORT || 8000;
  app.listen(port, () => {
    console.log(`Listening on port ${port}!`);
  });
};

start();
