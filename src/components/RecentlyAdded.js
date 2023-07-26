import React from 'react'
import  Card from 'react-bootstrap/Card'
import  Image from 'react-bootstrap/Image'
import  Nav from 'react-bootstrap/Nav'
import  Stack  from 'react-bootstrap/Stack'

const RecentlyAdded = () => {
  return (
    <section id="menu2">
    <Card style={{ width: "18rem",margin:"10px 0" }}>
      <Card.Img variant="top" src={require("./Data_Images/kutsaie.jpg")} />
      <Card.Body>
        <Card.Title className="text-info fw-bold d-flex justify-content-between">
          <p>NFT's</p>
          <span className='star'>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-half"></i>
            <i class="bi bi-star"></i>
            </span>
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
            className="d-flex  justify-content-evenly "
          >
            <Image
              src={require("./Data_Images/kutsaie.jpg")}
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
  )
}

export default RecentlyAdded