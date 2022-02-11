import "../styles/Home.css";
import background from "../assets/home_background.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="Home">
      <h1>abilnf's Awesome Shop</h1>
      <h1>Do you want awesome NFTs like this one?</h1>
      <img src={background} alt="" />
      <h1>Then head right to the shop!</h1>
      <Link to="/odin-shopping-cart/shop">SHOP NOW</Link>
    </div>
  );
}

export default Home;
