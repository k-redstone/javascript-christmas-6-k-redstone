import OrderController from "./controller/OrderController.js";

class App {
  async run() {
    const order = new OrderController();
    await order.run();
  }
}

export default App;
