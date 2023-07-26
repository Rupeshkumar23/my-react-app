/**
 * The `Header` component is a React functional component that renders a header section with a title,
 * description, and an image card.
 * @returns The Header component is returning a JSX element.
 */
import React from "react";
import  Stack  from "react-bootstrap/Stack";
import  Image  from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../App.css";

const Header = () => {
  return (
      <Container fluid className="background-image-container">
        <Row className="align-items-center">
          {/* Left Side */}
          <Col lg={6}>
            <h1 className="display-2 fw-bold">
              <span className="text-danger">Discover</span> Digital art &
              Collect NFTs
            </h1>
            <p className="text-dark">
              Explore the fascinating world of digital art and embrace the new
              era of collecting NFTs (Non-Fungible Tokens). Immerse yourself in
              unique, blockchain-backed creations from talented artists
              worldwide. Start your NFT journey today and own exclusive,
              verifiable, and one-of-a-kind digital assets that redefine the
              concept of ownership in the digital realm.
            </p>
          </Col>

          {/* Right Side */}
          <Col lg={6} className="custom1-card">
            <Card
              className="shadow-lg bg-body-tertiary mt-4 custom-card"
              style={{ width: "75%", height: "auto", borderRadius: "1rem" }}
            >
              <div className="rounded-top overflow-hidden">
                <Card.Img
                  className="border  rounded-top-4 "
                  variant="top"
                  src={require("../images/nft1.jpg")}
                />
              </div>
              <Card.Body>
                <Stack direction="horizontal" gap={2}>
                  <Image
                    src={require("../images/nft1.jpg")}
                    width={"70px"}
                    roundedCircle
                  />
                  <Stack direction="vertical"className="d-flex justify-content-center me-5">
                    <h5 className="text-primary">Digital NFT</h5>
                    <h6>Collections of NFT's</h6>
                  </Stack>
                </Stack>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
  );
};

export default Header;
