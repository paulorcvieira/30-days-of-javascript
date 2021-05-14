import mongoose from 'mongoose';

export default mongoose
  .connect('mongodb://localhost:27017/day_14', {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() => console.log("MongoDB: Connected!"))
  .catch(() => console.log("MongoDB: Error!"));