import logo from './logo.svg';
import './App.css';
import MyButton from "./components/button";
import NavScrollExample from "./components/navbar";
import Slider from"./components/slider"
import Categories from './components/categories';
import img1 from'./images/gift-card.png';
import img2 from'./images/beauty.png';
import img3 from'./images/brands-west-points.png';
import img4 from'./images/grocery.png';
import img5 from'./images/home-decor-item.png';
import img6 from'./images/electonics.png';
function App() {
  return (
    <>

        <>
    <NavScrollExample item1="Home"
    item2="MOBILE & TABLET"
    item3="FASHION"
    item4="ELECTRONIC"
    item5="BRANDS"/>
    </>
    

    <Slider/>
    
    <>
    
    <Categories
        categoryTitles={[
          "Gift Cards",
          "Fashion",
          "Grocery",
          "Beauty",
          "Home & Decor",
          "Mobile & Tablets",
          "Electronics",
          "New on Shopon",
        ]}
        categorImg={[img1, img2, img3, img4, img5, img6]}
      />
    </>
    </>
  );
}

export default App;
