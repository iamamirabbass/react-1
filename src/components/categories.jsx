// import Col from "react-bootstrap/Col";
// import Container from "react-bootstrap/Container";
// import Image from "react-bootstrap/Image";
// import Row from "react-bootstrap/Row";
// import './components.css'
// function Categories({ categorImg, categorytittle }) {
//   return (
//     <div className="categories-container">
//     <Container className="text-center">
//       <h2>{categorytittle}</h2> 
//       <Row>
//         {categorImg.map((imgSrc, index) => (
//           <Col key={index} xs={6} md={6} lg={4} xl={3}>
//             <Image src={imgSrc} rounded fluid />
//           </Col>
//         ))}
//       </Row>
//     </Container>
//     </div>
//   );
// }

// export default Categories;

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import "./components.css"; // Import the CSS file
function Categories({ categorImg, categoryTitles }) {
  return (
    <div className="categories-container">
      <Container className="text-center">
        <Row>
          {categorImg.map((imgSrc, index) => (
            <Col key={index} xs={6} md={4} lg={3} xl={2}>
              <div className="category-box">
                <Image src={imgSrc} className="category-image" />
              </div>
              <div>
              <p className="category-title">{categoryTitles[index]}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Categories;
