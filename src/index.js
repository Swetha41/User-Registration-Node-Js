const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();
const userRouter = require("./routers/user");

const app = express();

//DB connection
mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('DB Connected'))
    .catch((err) => console.log(err));

//middlewares
app.use(express.json());

//routes
app.use(userRouter);

//Port
const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
  console.log(`Server is started on port ${PORT}`);
});
