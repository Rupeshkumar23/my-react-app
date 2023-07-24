import React from "react";
import { Container, Row, Col, Form, Button, Stack } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-light mt-5 py-4">
      <Container>
        <Row>
          {/* Column 1 */}
          <Col md={3}>
            <h5 className="text-danger text-start fw-bold">Company</h5>
            <ul className="list-unstyled text-start">
              <li>NFTHub</li>
              <li>DigitalArtify</li>
              <li>CryptoCollect</li>
              <li>PixelVault</li>
              <li>MetaNFT</li>
              <li>NFTExpo</li>
              <li>TokenCanvas</li>
              <li>ArtChain</li>
            </ul>
          </Col>

          {/* Column 2 */}
          <Col md={2}>
            <h5 className="text-danger text-start fw-bold">Products</h5>
            <ul className="list-unstyled text-start">
              <li>Art NFTs</li>
              <li>Collectible NFTs</li>
              <li>Virtual Real Estate NFTs</li>
              <li>Gaming NFTs</li>
              <li>Music NFTs</li>
              <li>Domain Names NFTs</li>
              <li>Meme NFTs</li>
            </ul>
          </Col>

          {/* Column 3 */}
          <Col md={3}>
            <Stack gap={1} direction="vertical" >
              <div className="d-flex align-items-center mb-2 fw-bold ms-1">
                <img
                  src={require("../images/ethereum-nft.png")}
                  alt="Logo"
                  width="40"
                  height="40"
                  className="me-2"
                />
                <span className="text-danger fs-3">E</span>
                <span className="text-primary fs-3">da</span>
                <span className="text-danger fs-3">Face</span>
              </div>
              <div className="text-danger fw-bold me-5">
                Subscribe to the Newsletters.
              </div>

              <Form className="d-flex mt-2 ">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <Button variant="danger">Search</Button>
              </Form>
            </Stack>
          </Col>

          {/* Column 4 */}
          <Col md={2}>
            <h5 className="text-danger text-start fw-bold">Legal</h5>
            <ul className="list-unstyled text-start">
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
              <li>Disclaimer</li>
              <li>Copyright Notice</li>
            </ul>
          </Col>

          {/* Column 5 */}
          <Col md={2}>
            <h5 className="text-danger text-start fw-bold">Communities</h5>
            <ul className="list-unstyled text-start">
              <li>
                <a  className="face text-decoration-none"href="https://www.facebook.com">
                  <i className="bi bi-facebook face "></i>Facebook
                </a>
              </li>
              <li>
                <a className="inst text-decoration-none" href="https://www.instagram.com">
                  <i className="bi bi-instagram inst"></i>Instagram
                </a>
              </li>
              <li>
                <a  className="twit text-decoration-none"href="https://www.twitter.com">
                  <i className="bi bi-twitter twit"></i>Twitter
                </a>
              </li>
              <li>
                <a className="teleg text-decoration-none" href="https://www.telegram.org">
                  <i className="bi bi-telegram teleg"></i>Telegram
                </a>
              </li>
            </ul>
          </Col>
        </Row>

        {/* Copyright */}
        <Row>
          <Col className="text-center ">
            <p>&copy; 2024 EdaFace. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
