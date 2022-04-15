import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";

function App() {
  return (
    <div>
      <Header />
      <Home
        img="model-3.jpg"
        titel="Model 3"
        text={[
          "Order Online for ",
          <a href="https://www.tesla.com/">Touchless Delivery</a>,
        ]}
      />
      <Home
        img="model-y.jpg"
        titel="Model Y"
        text={[
          "Order Online for ",
          <a href="https://www.tesla.com/">Touchless Delivery</a>,
        ]}
      />
      <Home
        img="model-s.jpg"
        titel="Model s"
        text={[
          "Order Online for ",
          <a href="https://www.tesla.com/">Touchless Delivery</a>,
        ]}
      />
      <Home
        img="model-x.jpg"
        titel="Model X"
        text={[
          "Order Online for ",
          <a href="https://www.tesla.com/">Touchless Delivery</a>,
        ]}
      />
      <Home
        img="solar-panel.jpg"
        titel="Solar Panel"
        text="Lowest Cost Solar Panels in America"
      />
      <Home
        img="solar-roof.jpg"
        titel="Solar Roof"
        text="Produce Clean Energy From Your Roof

        "
      />
      <Home img="accessories.jpg" titel="Accessories" text="Order Online for" />
    </div>
  );
}

export default App;
