import React from "react";
import Card  from "react-bootstrap/Card";
import Image  from "react-bootstrap/Image";
import Stack  from "react-bootstrap/Stack";
const TopCreators = () => {
  return (
    <section id="menu">
      <Card
        className="shadow-lg mt-4 "
        style={{ width: "100%", height: "auto", borderRadius: ".5rem" }}
      >
        <Card.Body className="bg_blue">
          <Stack direction="horizontal" gap={0}>
            <Image
              src={require("./Data_Images/vanessa.jpg")}
              width={"70px"} height={"70px"} 

            />
            <Stack
              direction="vertical"
              className="d-flex justify-content-center"
            >
              <h6 className="blue">Digital NFT</h6>
              <h6 className="L_blue">Collections of NFT's</h6>
            </Stack>
          </Stack>
        </Card.Body>
      </Card>
    </section>
  );
};

export default TopCreators;
