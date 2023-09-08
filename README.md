# Fanztar_BE
Welcome to the Fanztar_BE repository! This is the backend part of our Fanztar project.
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Description

At Mobile Factory Pvt Ltd., we sell configurable mobiles, and with Fanztar, you can easily configure your dream mobile device. Customize your mobile by selecting the following components:

- **Screen:** Choose from LED, OLED, or AMOLED displays.
- **Camera:** Opt for a Wide-Angle or Ultra-Wide-Angle camera.
- **Port:** Select between USB-C, Micro-USB, or Lightning ports.
- **OS:** Pick either Android or iOS as your mobile's operating system.
- **Body:** Decide between a Metallic or Plastic body for your device.

An order will be considered valid if it contains exactly one part from each of the five categories (Screen, Camera, Port, OS, and Body)..

## Initial Data

To calculate prices, we use the following input data (stored locally in memory):

| Code | Price  | Part                  |
| ---- | ------ | --------------------- |
| A    | 10.28  | LED Screen            |
| B    | 24.07  | OLED Screen           |
| C    | 33.30  | AMOLED Screen         |
| D    | 25.94  | Wide-Angle Camera     |
| E    | 32.39  | Ultra-Wide-Angle Cam. |
| F    | 18.77  | USB-C Port            |
| G    | 15.13  | Micro-USB Port        |
| H    | 20.00  | Lightning Port        |
| I    | 42.31  | Android OS            |
| J    | 45.00  | iOS OS                |
| K    | 45.00  | Metallic Body         |
| L    | 30.00  | Plastic Body          |

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Shashwat2104/Fanztar_BE.git
2. **Navigate to the project directory:**
   ```bash
   cd Fanztar_BE/Assignment
3. ***Install Dependencies:**
   ```bash
   npm i
4. **Start the Application:**
   ```bash
   npm run server 
   
## How It Works

- **Input**: Make an HTTP POST request to `/orders` with a JSON payload specifying the components you want, like this:

   ```json
   {
     "components": ["I", "A", "D", "F", "K"]
   }

- **Output**

If the request is successful, you will receive a response with a status code `201` and details of your order in JSON format:

```json
{
  "order_id": "some-id",
  "total": 142.3,
  "parts": [
    "LED Screen",
    "Wide-Angle Camera",
    "USB-C Port",
    "Android OS",
    "Metallic Body"
  ]
}

```
- **Testing:**

To run the unit tests, use the following command:
``` bash
npm run test
```

 
   
## API Documentation

Explore our API documentation for detailed information on how to interact with Fanztar's backend [here](#api-documentation).

## Contributing

We welcome contributions from the community! Check out our [Contributing Guidelines](CONTRIBUTING.md) to get involved.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

We'd like to thank all of our contributors and supporters who have helped make Fanztar a reality.

## Contact

For any inquiries or feedback, please contact us at [shashwatmahender2104@gmail.com](mailto:your@email.com).   

