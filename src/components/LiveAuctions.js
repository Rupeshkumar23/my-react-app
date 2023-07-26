import React from "react";
import  Card from "react-bootstrap/Card";
import   Image from "react-bootstrap/Image";
import   Nav from "react-bootstrap/Nav";
import   Stack  from "react-bootstrap/Stack";

const LiveAuctions = () => {
  return (
    <section id="menu1">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={require("./Data_Images/steve.jpg")} />
        <Card.Body>
          <Card.Title className="text-info fw-bold d-flex justify-content-start">
            NFT's
          </Card.Title>

          <Card.Text>
            <div className="d-flex justify-content-between ">
              <p>Digital NFT's</p>
              <span>15,000₹</span>
            </div>
          </Card.Text>
          <Card.Body className=" p-0 m-0 ">
            <Stack
              direction="horizontal"
              gap={0}
              className="d-flex  justify-content-evenly "
            >
              <Image
                src={require("../images/nft1.jpg")}
                width={"30px"}
                roundedCircle
              />
              <div className="custom_av">
                <Image
                  src={require("./Data_Images/Bird.jpg")}
                  width={"30px"}
                  roundedCircle
                />
              </div>
              <Stack
                direction="vertical"
                className="d-flex justify-content-center "
              >
                <p className="fs-6">Collections of NFT's</p>
              </Stack>
              <Nav.Link href="#H">
                <i className="bi bi-heart"></i>
              </Nav.Link>
              <span>350</span>
            </Stack>
          </Card.Body>
        </Card.Body>
      </Card>
    </section>
  );
};

export default LiveAuctions;
