import React,{useState} from "react";
import Container from "react-bootstrap/Container";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { productData, responsive } from "./data";
import Product from "./Product";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import TopCreators from "./TopCreators";
import LiveAuctions from "./LiveAuctions";
import RecentlyAdded from "./RecentlyAdded";

const Sections = () => {
  const product = productData.map((item, id) => (
    <Product key={id} name={item.name} url={item.imageurl} />
  ));
  const [menu] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  const [menu1] = useState([1, 2, 3, 4]);
  const [menu2] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  return (
    <div>
      <Container>
        <div className="display-5 d-flex justify-content-center mt-4 fw-bold text-danger">
          Hot Collections
        </div>
        <div className="App mt-4">
          <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            responsive={responsive}
          >
            {product}
          </Carousel>
        </div>
        <div className="display-5 d-flex justify-content-center mt-4 fw-bold text-danger">
          Top Creators
        </div>
        <Row>
          {menu.map((item) => {
            return (
              <Col md={6} lg={3} key={item}>
                <TopCreators />
              </Col>
            );
          })}
        </Row>
        <div className="display-5 d-flex justify-content-center mt-4 mb-3 fw-bold text-danger">
          Live Auctions
        </div>
        <Row >
          {menu1.map((item) => {
            return (
              <Col className="menu-col" md={6} lg={3} key={item}>
                <LiveAuctions />
              </Col>
            );
          })}
        </Row>
        <div className="display-5 d-flex justify-content-center mt-4 mb-3 fw-bold text-danger">
          Recently Added NFTs
        </div>
        <Row>
          {menu2.map((item) => {
            return (
              <Col md={6} lg={3} key={item}>
                <RecentlyAdded />
              </Col>
            );
          })}
        </Row>
        <Button className="mt-4" variant="info">
          Load More
        </Button>
      </Container>
    </div>
  );
};

export default Sections;
