// import logo from './logo.svg';
// import './App.css';
// import MyButton from "./components/button";
// import NavScrollExample from "./components/navbar";
// import Slider from"./components/slider"
// import Categories from './components/categories';
// import card from './components/card';
// import img1 from'./images/gift-card.png';
// import img2 from'./images/beauty.png';
// import img3 from'./images/brands-west-points.png';
// import img4 from'./images/grocery.png';
// import img5 from'./images/home-decor-item.png';
// import img6 from'./images/electonics.png';
// ;

// const products = [
//   {
//     title: "Apple iPhone 15 Pro",
//     image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-blue-titanium_AV1_GEO_EMEA?wid=940&hei=1112&fmt=png-alpha&.v=1692890246405",
//     link: "https://www.apple.com/shop/buy-iphone/iphone-15-pro"
//   },
//   {
//     title: "Samsung Galaxy S24 Ultra",
//     image: "https://images.samsung.com/is/image/samsung/p6pim/levant/2401/gallery/levant-galaxy-s24-ultra-sm-s928bzyzmea-thumb-538892151",
//     link: "https://www.samsung.com/us/smartphones/galaxy-s24-ultra/"
//   },
//   {
//     title: "Sony WH-1000XM5 Headphones",
//     image: "https://m.media-amazon.com/images/I/61bDuU+xPXL._AC_SL1500_.jpg",
//     link: "https://www.sony.com/electronics/headband-headphones/wh-1000xm5"
//   },
//   {
//     title: "Dell XPS 15 Laptop",
//     image: "https://i.dell.com/sites/imagecontent/products/PublishingImages/xps-15-9520-laptop/spi/ng/notebook-xps-15-9520-campaign-hero-504x350-ng.png",
//     link: "https://www.dell.com/en-us/shop/dell-laptops/xps-15-laptop/spd/xps-15-9520-laptop"
//   },
//   {
//     title: "Apple Watch Series 9",
//     image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQGQ3ref_VW_34FR+watch-case-41-alum-starlight-nc-se_VW_34FR_WF_CO?wid=800&hei=800&fmt=jpeg&qlt=90&.v=1660799921415",
//     link: "https://www.apple.com/shop/buy-watch/apple-watch"
//   },
//   {
//     title: "Nintendo Switch OLED",
//     image: "https://m.media-amazon.com/images/I/61k05QljTuL._AC_SL1500_.jpg",
//     link: "https://www.nintendo.com/switch/oled-model/"
//   },
//   {
//     title: "Canon EOS R6 Mark II Camera",
//     image: "https://m.media-amazon.com/images/I/91TxIvsC6sL._AC_SL1500_.jpg",
//     link: "https://www.usa.canon.com/shop/p/eos-r6-mark-ii-body"
//   },
//   {
//     title: "Logitech MX Master 3S Mouse",
//     image: "https://resource.logitech.com/w_800,c_lpad,ar_16:9,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/mice/mx-master-3s/gallery/mx-master-3s-top-view-graphite.png?v=1",
//     link: "https://www.logitech.com/en-us/products/mice/mx-master-3s.html"
//   }
// ];
// function App() {
//   return (
//     <>

//         <>
//     <NavScrollExample item1="Home"
//     item2="MOBILE & TABLET"
//     item3="FASHION"
//     item4="ELECTRONIC"
//     item5="BRANDS"/>
//     </>
    

//     <Slider/>
    
//     <>
    
//     <Categories
//         categoryTitles={[
//           "Gift Cards",
//           "Fashion",
//           "Grocery",
//           "Beauty",
//           "Home & Decor",
//           "Mobile & Tablets",
//           "Electronics",
//           "New on Shopon",
//         ]}
//         categorImg={[img1, img2, img3, img4, img5, img6]}
//       />
//     </>

//     <>
  
//     </>
//     </>
//   );
// }

// export default App;




import logo from './logo.svg';
import './App.css';
  import MyButton from "./components/button";
import NavScrollExample from "./components/navbar";
import Slider from "./components/slider";
import Categories from './components/categories';
import ProductCards from './components/card'; // Ensure the correct import
import img1 from './images/gift-card.png';
import img2 from './images/beauty.png';
import img3 from './images/brands-west-points.png';
import img4 from './images/grocery.png';
import img5 from './images/home-decor-item.png';
import img6 from './images/electonics.png';

// Products Data
const products = [
  {
    title: "Apple iPhone 15 Pro",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-blue-titanium_AV1_GEO_EMEA?wid=940&hei=1112&fmt=png-alpha&.v=1692890246405",
    link: "https://www.apple.com/shop/buy-iphone/iphone-15-pro"
  },
  {
    title: "Samsung Galaxy S24 Ultra",
    image: "https://images.samsung.com/is/image/samsung/p6pim/levant/2401/gallery/levant-galaxy-s24-ultra-sm-s928bzyzmea-thumb-538892151",
    link: "https://www.samsung.com/us/smartphones/galaxy-s24-ultra/"
  },
  {
    title: "Sony WH-1000XM5 Headphones",
    image: "https://m.media-amazon.com/images/I/61bDuU+xPXL._AC_SL1500_.jpg",
    link: "https://www.sony.com/electronics/headband-headphones/wh-1000xm5"
  },
  {
    title: "Dell XPS 15 Laptop",
    image: "https://i.dell.com/sites/imagecontent/products/PublishingImages/xps-15-9520-laptop/spi/ng/notebook-xps-15-9520-campaign-hero-504x350-ng.png",
    link: "https://www.dell.com/en-us/shop/dell-laptops/xps-15-laptop/spd/xps-15-9520-laptop"
  },
  {
    title: "Apple Watch Series 9",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQGQ3ref_VW_34FR+watch-case-41-alum-starlight-nc-se_VW_34FR_WF_CO?wid=800&hei=800&fmt=jpeg&qlt=90&.v=1660799921415",
    link: "https://www.apple.com/shop/buy-watch/apple-watch"
  },
  {
    title: "Nintendo Switch OLED",
    image: "https://m.media-amazon.com/images/I/61k05QljTuL._AC_SL1500_.jpg",
    link: "https://www.nintendo.com/switch/oled-model/"
  },
  {
    title: "Canon EOS R6 Mark II Camera",
    image: "https://m.media-amazon.com/images/I/91TxIvsC6sL._AC_SL1500_.jpg",
    link: "https://www.usa.canon.com/shop/p/eos-r6-mark-ii-body"
  },
  {
    title: "Dell XPS 15 Laptop",
    image: "https://i.dell.com/sites/imagecontent/products/PublishingImages/xps-15-9520-laptop/spi/ng/notebook-xps-15-9520-campaign-hero-504x350-ng.png",
    link: "https://www.dell.com/en-us/shop/dell-laptops/xps-15-laptop/spd/xps-15-9520-laptop"
  }
];

function App() {
  return (
    <>
      {/* Navbar */}
      <NavScrollExample 
        item1="Home"
        item2="MOBILE & TABLET"
        item3="FASHION"
        item4="ELECTRONIC"
        item5="BRANDS"
      />

      {/* Slider */}
      <Slider />

      {/* Categories Section */}
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

      {/* Products Section */}
      <ProductCards products={products} />
    </>
  );
}

export default App;
