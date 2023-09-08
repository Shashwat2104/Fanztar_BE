const orders = [];

// Sample data (Replace with your own data)
const componentPrices = {
  A: 10.28, // LED Screen
  B: 24.07, // OLED Screen
  C: 33.3,  // AMOLED Screen
  D: 25.94, // Wide-Angle Camera
  E: 32.39, // Ultra-Wide-Angle Camera
  F: 18.77, // USB-C Port
  G: 15.13, // Micro-USB Port
  H: 20.0,  // Lightning Port
  I: 42.31, // Android OS
  J: 45.0,  // iOS OS
  K: 45.0,  // Metallic Body
  L: 30.0,  // Plastic Body
};

// Create a new order
exports.createOrder = (req, res) => {
     
  const { components } = req.body;

  // Check if components array is valid and contains exactly 5 unique components
  if (
    !Array.isArray(components) ||
    components.length !== 5 ||
    new Set(components).size !== 5
  ) {
    return res.status(400).json({
      error: "Invalid request. You must provide exactly 5 unique components.",
    });
  }

  // Check if there is only one part selected from each category
  const categories = {
    screen: ["A", "B", "C"], // LED, OLED, AMOLED
    camera: ["D", "E"], // Wide-Angle, Ultra-Wide-Angle
    port: ["F", "G", "H"], // USB-C, Micro-USB, Lightning
    os: ["I", "J"], // Android, iOS
    body: ["K", "L"], // Metallic, Plastic
  };

  for (const category in categories) {
    const selectedPartsInCategory = components.filter((part) =>
      categories[category].includes(part)
    );

    if (selectedPartsInCategory.length !== 1) {
      return res.status(400).json({
        error: `Invalid selection in the ${category} category. You must select exactly one part.`,
      });
    }
  }

  // Calculate the total price and selected parts
  let total = 0;
  const selectedParts = [];

  for (const componentCode of components) {
    if (!componentPrices[componentCode]) {
      return res
        .status(400)
        .json({ error: `Invalid component code: ${componentCode}` });
    }
    total += componentPrices[componentCode];
    selectedParts.push(getPartName(componentCode));
  }

  const order = {
    order_id: generateOrderId(),
    total: parseFloat(total.toFixed(2)),
    parts: selectedParts,
  };
  orders.push(order);

  res.status(201).json(order);
};

exports.getAllOrders = (req, res) => {
  // Return all orders
  res.status(200).json(orders);
};

// Helper function to get the part name based on the component code
function getPartName(componentCode) {
  const partMap = {
    A: "LED Screen",
    B: "OLED Screen",
    C: "AMOLED Screen",
    D: "Wide-Angle Camera",
    E: "Ultra-Wide-Angle Camera",
    F: "USB-C Port",
    G: "Micro-USB Port",
    H: "Lightning Port",
    I: "Android OS",
    J: "iOS OS",
    K: "Metallic Body",
    L: "Plastic Body",
  };
  return partMap[componentCode] || "Unknown Part";
}

// Dummy function to generate a unique order ID
function generateOrderId() {
  const timestamp = Date.now().toString();
  const randomNum = Math.floor(Math.random() * 10000).toString();
  const orderId = timestamp + randomNum;
  return orderId;
}
