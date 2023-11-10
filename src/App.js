import OrderController from "./controller/OrderController.js";

class App {
  async run() {
    const order = new OrderController();
    order.run();
  }
}

export default App;
