import "./sass/base.sass";

import Card from "./components/Card/Card";

const cards = [
  { title: "Audio Speaker", desc: "Audio", price: "$299" },
  { title: "Headphones", desc: "Audio", price: "$199" },
  { title: "Brownies", desc: "Classic Shoes", price: "$599" },
  { title: "Rocket", desc: "Polo T-shirt", price: "$39" },
  { title: "Hoodie", desc: "Clothes", price: "$139" },
  { title: "Retro Eye", desc: "Glasses", price: "$399" },
  { title: "Military Pants", desc: "Pants", price: "$199" },
];

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="cards">
          {cards.map((card) => {
            return <Card title={card.title} desc={card.desc} price={card.price} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
