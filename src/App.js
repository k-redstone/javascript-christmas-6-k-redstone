import OrderController from "./controller/OrderController";

class App {
  async run() {
    const order = new OrderController();
    order.run();
  }
}

export default App;
