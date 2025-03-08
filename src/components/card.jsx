// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";
// function BasicExample(productimg,producttittle) {
//   return (
//     <div>
// <Row>
//   <col xs={12} md={8} lg={6} xl={6}>
//   {productimg.map((imgsrc,index)=>(

// <Card style={{ width: '18rem' }}>
//       <Card.Img src ={imgsrc} />
//       <Card.Body>
//         <Card.Title>{producttittle}</Card.Title>
        
//       </Card.Body>
//     </Card>
//   ))}
  
//   </col>
//   </Row>      
//     </div>
//   );
// }

// export default BasicExample;


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function ProductCards({ products }) {
  return (
    <div className="container mt-4">
      <Row className="g-4">
        {products.map((product, index) => (
          <Col xs={12} md={6} lg={4} xl={3} key={index}>
            <Card style={{ width: '18rem' }} className="shadow-sm">
              <Card.Img variant="top" src={product.image} alt={product.title} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default ProductCards;
