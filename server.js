// 1. Import dependencies
const express = require("express");
const app = express();
const path = require("path");
require("dotenv").config();

// 1.1 Allow parsing on request bodies
app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("<h1>Front Page!</h1>");
// });
// 2. Import routes for api
const watsonRoutes = require("./routes/api/watson");
// 2.1 Direct requests to /api/watson to Watson Routes
app.use("/api/watson", watsonRoutes);

//Serve static assets if in production

if (process.env.NODE_ENV === "production") {
  //set static folder
  app.use(express.static("client-side/build"));

  app.get("*", async (req, res) => {
    res.sendFile(path.resolve(__dirname, "client-side", "build", "index.html"));
  });
}

// 3. Start server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Server listening on port ", port);
  console.log("hello there");
});
