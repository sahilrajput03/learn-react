const http = require("http");
const express = require("express");
const config = require("./utils/config");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const blogsRouter = require("./controllers/blogs");
const usersRouter = require("./controllers/users");
const loginRouter = require("./controllers/login");
const middleware = require("./utils/middleware");
const logger = require("./utils/logger");
// const Blog = mongoose.model('Blog', blogSchema)
// the above variable is assigned to post to the collection named 'Blog', irrespective of the name of the variable.

// const mongoUrl =
// above mongourl is for the database named - blog-database, for some just change the name to some-other-database
mongoose.set("useCreateIndex", true);
logger.info("*CONNECTING TO:", config.MONGODB_URI.toUpperCase());
mongoose
  .connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    logger.info("*connected to MongoDB".toUpperCase());
    logger.info("__________________________________________");
  })
  .catch((error) => {
    logger.error("error connection to MongoDB:", error.message);
  });

app.use(cors());
app.use(bodyParser.json());
app.use(middleware.requestLogger);
app.use(middleware.tokenExtractor);
app.use("/api/login", loginRouter);
app.use("/api/blogs", blogsRouter);
app.use("/api/users", usersRouter);
module.exports = app;
// const PORT = 3003
// app.listen(PORT, () => {console.log(`Server running on port ${PORT}`)})
