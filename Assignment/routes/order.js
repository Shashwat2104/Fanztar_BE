const express = require("express");
const router = express.Router();
const orderController = require("../controllers/order");

// Define a route for creating a new order

router.post("/", orderController.createOrder);

// Define a route for getting all orders (GET)
router.get("/", orderController.getAllOrders);

module.exports = router;
