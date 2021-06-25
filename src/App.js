//styles
import "./sass/base.sass";

import CardImage1 from "./assets/Audio Speacker.png";
import CardImage2 from "./assets/headphones.png";
import CardImage3 from "./assets/drum_cut.jpeg";
import CardImage4 from "./assets/Rocket.png";
import CardImage5 from "./assets/Microphone.png";
import CardImage6 from "./assets/Bomb.png";
import CardImage7 from "./assets/Tv.png";

// component
import Card from "./components/Card/Card";

const cards = [
  {
    title: "Audio Speaker",
    desc: "Audio",
    price: "$299",
    pathImage: CardImage1,
    id: "1",
    styles: { isDark: false, isCenter: false, padding: true, isBackgroundImage: false },
  },
  {
    title: "Headphones",
    desc: "Audio",
    price: "$199",
    pathImage: CardImage2,
    id: "2",
    styles: { isDark: true, isCenter: true, padding: false, isBackgroundImage: false },
  },
  {
    title: "Brownies",
    desc: "Classic Shoes",
    price: "$599",
    pathImage: CardImage3,
    id: "3",
    styles: { isDark: false, isCenter: true, padding: false, isBackgroundImage: false },
  },
  {
    title: "Rocket",
    desc: "Polo T-shirt",
    price: "$39",
    pathImage: CardImage4,
    id: "4",
    styles: { isDark: false, isCenter: false, padding: true, isBackgroundImage: false },
  },
  {
    title: "Hoodie",
    desc: "Clothes",
    price: "$139",
    pathImage: CardImage5,
    id: "5",
    styles: { isDark: false, isCenter: false, padding: false, isBackgroundImage: false },
  },
  {
    title: "Retro Eye",
    desc: "Glasses",
    price: "$399",
    pathImage: CardImage6,
    id: "6",
    styles: { isDark: false, isCenter: false, padding: false, isBackgroundImage: false },
  },
  {
    title: "Military Pants",
    desc: "Pants",
    price: "$199",
    pathImage: CardImage7,
    id: "7",
    styles: { isDark: false, isCenter: false, padding: false, isBackgroundImage: true },
  },
];

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="cards">
          {cards.map((card) => {
            return (
              <Card
                title={card.title}
                key={card.id}
                padding={card.styles.padding}
                src={card.pathImage}
                desc={card.desc}
                price={card.price}
                isDark={card.styles.isDark}
                isCenter={card.styles.isCenter}
                // isBackgroundImage={card.styles.isBackgroundImage}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
