import Item from "../components/Item";
import "../styles/Shop.css";

function Shop(props) {
  return (
    <div className="Shop">
      <h1>
        Feel free two pick whatever you like from those extremely awesome NFTs!
      </h1>

      <div>
        {items.map((nft) => (
          <Item
            key={nft.nft}
            nft={nft.nft}
            name={nft.name}
            price={nft.price}
            addToCart={(amount) => props.addToCart(nft, amount)}
          />
        ))}
      </div>
    </div>
  );
}

export default Shop;

const items = [
  {
    nft: "doge",
    name: "Doge",
    price: 550,
  },
  {
    nft: "dolan",
    name: "Dolan",
    price: 120,
  },
  {
    nft: "forever_alone",
    name: "Forever Alone",
    price: 169,
  },
  {
    nft: "kappa",
    name: "Kappa",
    price: 696,
  },
  {
    nft: "lenny_face",
    name: "Lenny Face",
    price: 42,
  },
  {
    nft: "monkaS",
    name: "MonkaS",
    price: 420,
  },
  {
    nft: "nyan_cat",
    name: "Nyan Cat",
    price: 730,
  },
  {
    nft: "pepe_the_frog",
    name: "Pepe The Frog",
    price: 600,
  },
  {
    nft: "slender_man",
    name: "Slender Man",
    price: 150,
  },
  {
    nft: "trollface",
    name: "Trollface",
    price: 800,
  },
  {
    nft: "ugandan_knuckles",
    name: "Dolan",
    price: 50,
  },
];
