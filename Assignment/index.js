const express = require("express");
const bodyParser = require("body-parser");
const orderRoutes = require("./routes/order"); // Import order routes
const app = express();
const port = process.env.PORT || 4500;

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use("/orders", orderRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
module.exports = app;
