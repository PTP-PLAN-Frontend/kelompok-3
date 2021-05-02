import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';

import './Rhizoma.css'
const Rhizoma = () => {
  return (
    <Container>
      <br></br>
      <Carousel fade>
        <Carousel.Item>
          <img 
            className="d-block w-100"
            src="https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1608521969/l853ktaxuqxmn3puzbej.jpg"
            alt="First slide"
            width="1200"
            height='530'
          />

          <Carousel.Caption>
            <h1>RHIZOMA</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/dk0z4ums3/image/upload/v1601603417/attached_image/inilah-manfaat-lengkuas-bagi-kesehatan.jpg"
            alt="Second slide"
            width="1200"
            height='530'
          />

          <Carousel.Caption>
            <h1>RHIZOMA</h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <br></br>

      <h5 align='justify'>Rhizoma merupakan nama latin dari akar tinggal atau rimpang. Adapun istilah lain yang biasa digunakan oleh masyarakat jawa,
        ialah empon-empon. Empon-empon berasal dari kata "Empu", yang berarti rimpang induk. Kata ini digunakan untuk menyebut kelompok tanaman
        yang memiliki akar tinggal. Pada umumnya, tanaman rimpang dapat dimanfaatkan untuk pengobatan tradisional dan bumbu dasar pada masakan.
        Tanaman rimpang menyimpan banyak minyak atsiri dan alkaloid yang berkhasiat dalam pengobatan.
      </h5>

      <br></br>
      <Row>
        <Col xs={12} md={4}>
          <Card>
            <Card.Img variant="top" 
            src="https://assets.pikiran-rakyat.com/crop/0x0:0x0/750x500/photo/2020/10/09/1092541095.jpg" 
            width='100px'
            height='250px'
            />
            <Card.Body>
              <Card.Title><center><h3>Kunyit</h3></center></Card.Title>
              <Card.Text className="card-text">
                <p>Nama Latin : Curcumae Domesticae Rhizoma</p>
                Kunyit mengandung zat berkhasiat seperti minyak atsiri, kurkumin, pati, dan damar.
              </Card.Text>
              <center><Button variant="primary"><Link to='/kunyit' className='link'>View More</Link></Button></center>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={4}>
          <Card>
            <Card.Img variant="top" 
            src="https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/2020/02/15/3592512459.jpg" 
            width='100px'
            height='250px'
            />
            <Card.Body>
              <Card.Title><center><h3>Lengkuas</h3></center></Card.Title>
              <Card.Text>
                <p>Nama Latin : Languatis Rhizoma</p>
                Lengkuas memiliki zat berkhasiat yaitu minyak atsiri yang mengandung metilsinamat, sineol, kamfer, dan galangol.
              </Card.Text>
              <center><Button variant="primary"><Link to='/lengkuas' className='link'>View More</Link></Button></center>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={4}>
          <Card>
            <Card.Img variant="top" 
            src="https://asset.kompas.com/crops/uelOSdnazmi0R7ixKrT9XMAPA3Q=/5x70:995x730/750x500/data/photo/2020/06/13/5ee4b01b2ced6.jpg" 
            width='100px'
            height='250px'
            />
            <Card.Body>
              <Card.Title><center><h3>Temulawak</h3></center></Card.Title>
              <Card.Text>
                <p>Nama Latin : Curcumae Rhizoma</p>
                Temulawak mengandung zat berkhasiat yaitu kurkumin, pati, serta minyak atsiri yang mengandung felandren dan tumerol.
              </Card.Text>
              <center><Button variant="primary"><Link to='/temulawak' className='link'>View More</Link></Button></center>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row style={{marginTop: 20}}>
        <Col xs={12} md={4}>
          <Card> 
            <Card.Img variant="top" 
            src="https://res.cloudinary.com/dk0z4ums3/image/upload/v1603162903/attached_image/khasiat-kencur-bisa-menyaingi-efek-obat-obatan-modern.jpg" 
            width='100px'
            height='250px'
            />
            <Card.Body>
              <Card.Title><center><h3>Kencur</h3></center></Card.Title>
              <Card.Text className="card-text">
                <p>Nama Latin : Kaempferiae Rhizoma</p>
                Kencur mengandung zat berkhasiat yaitu alkaloid, mineral, dan logam alkali.
              </Card.Text>
              <center><Button variant="primary"><Link to='/kencur' className='link'>View More</Link></Button></center>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={4}>
          <Card>
            <Card.Img variant="top" 
            src="https://images.tokopedia.net/img/cache/700/product-1/2020/4/11/8264261/8264261_b51c7ceb-0651-49e6-8e0d-460f1fc45867_867_867.jpg" 
            width='100px'
            height='250px'
            />
            <Card.Body>
              <Card.Title><center><h3>Alang-Alang</h3></center></Card.Title>
              <Card.Text>
                <p>Nama Latin : Imperatae Rhizoma</p>
                Alang-alang mengandung zat berkhasiat yaitu asam kersik, damar, dan logam alkali.
              </Card.Text>
              <center><Button variant="primary"><Link to='/alang-alang' className='link'>View More</Link></Button></center>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={4}>
          <Card>
            <Card.Img variant="top" 
            src="https://awsimages.detik.net.id/community/media/visual/2020/03/16/da18e454-90f7-4153-81d3-f9c4082bb520.jpeg?w=700&q=90" 
            width='100px'
            height='200px'
            />
            <Card.Body>
              <Card.Title><center><h3>Jahe</h3></center></Card.Title>
              <Card.Text>
                <p>Nama Latin : Zingiberis Rhizoma</p>
                Jahe memiliki zat berkhasiat yaitu minyak atsiri yang mengandung zingeron, zingiberol, zingiberin, borneol, kamfer, sineol dan felandren.
              </Card.Text>
              <center><Button variant="primary"><Link to='/jahe' className='link'>View More</Link></Button></center>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Rhizoma;
