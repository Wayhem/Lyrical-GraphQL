const express = require("express");
const dotenv = require("dotenv");
const models = require("./models");
const expressGraphQL = require("express-graphql");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const schema = require("./schema/schema");
var cors = require("cors");

dotenv.config();
const app = express();

// Replace with your mongoLab URI
const MONGO_URI = `mongodb://${process.env.user}:${process.env.password}@ds347707.mlab.com:47707/graphql_practice`;
if (!MONGO_URI) {
  throw new Error("You must provide a MongoLab URI");
}

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI);
mongoose.connection
  .once("open", () => console.log("Connected to MongoLab instance."))
  .on("error", error => console.log("Error connecting to MongoLab:", error));

// app.use(
//   "/graphql",
//   expressGraphQL({
//     schema,
//     graphiql: true
//   })
// );

app.use(
  "/graphql",
  cors(),
  bodyParser.json(),
  expressGraphQL(req => {
    return {
      schema,
      context: {
        user: req.user
      }
    };
  })
);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const webpackMiddleware = require("webpack-dev-middleware");
const webpack = require("webpack");
const webpackConfig = require("../webpack.config.js");
app.use(webpackMiddleware(webpack(webpackConfig)));

module.exports = app;
