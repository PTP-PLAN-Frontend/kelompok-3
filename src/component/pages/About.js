import React from "react";
import { Carousel } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image1 from "./../images/images-4.png";
import Image2 from "./../images/images-5.png";
import ImageA from "./../images/images-about-1.jpg";
import ImageB from "./../images/images-about-2.jpg";

function CarrousellAbout() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="w-100" src={Image1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="w-100" src={Image2} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

function About() {
  const myStyle = {
    maxWidth: "1500",
    borderRadius:"15px",
    fontSize: "1rem",
    textAlign: "justify",
    textIndent: "45px",
  };
  return (
    <>
      <h1 className="about">ABOUT</h1>
      <div className="m-4">
        <Row>
        <Col lg={true}>
            <img className="w-100" src={ImageA} style={myStyle} alt="about" />
          </Col>
          <Col lg={true}>
            <h3>Latar Belakang</h3>
            <hr></hr>
            <p style={myStyle}>
              Indonesia merupakan Negara yang mempunyai banyak jenis bahan
              alami, yang dapat dijadikan obat herbal untuk kesehatan. Salah
              satu bahan alami yang dapat digunakan sebagai obat herbal adalah
              simplisia rhizoma. Simplisia rhizoma merupakan tanaman obat yang
              berasal dari akar tunggal, yang telah dikeringkan. Di era ini,
              perkembangan teknologi dan informasi telah mengubah setiap aspek
              kehidupan manusia, termasuk dalam pembuatan obat. Sehingga,
              permintaan bahan baku simplisia semakin meningkat dengan
              bertambahnya industri jamu untuk dijadikan bentuk obat yang lebih
              modern.<br></br>
            </p>
            <p style={myStyle}>
              Efek samping yang terdapat pada obat sintetis menjadi lebih berat
              jika dibandingkan dengan obat tradisional. Maka dari itu kami
              ingin membantu masyarakat luas untuk lebih mengenal bahan-bahan
              alami yang dapat dijadikan obat serta cara budidaya tanaman obat
              secara tradisional, khususnya tentang simplisia rhizoma melalui
              media smartphone yaitu android.
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={true}>
            <br></br>
            <h3>Tujuan</h3>
            <hr></hr>
            <p style={myStyle}>
              Untuk memberikan informasi tentang tanaman obat, khususnya pada
              tanaman rimpang berbasis web, sehingga dapat menambah wawasan dan
              pengetahuan masyarakat dibidang kesehatan secara efisien.
            </p>
            <h3>Manfaat</h3>
            <hr></hr>
            <ul>
              <li>
                Memberikan kemudahan kepada masyarakat dalam mendapatkan
                informasi tentang simplisia rhizoma.
              </li>
              <li>
                Sebagai media belajar dan membantu masyarakat untuk memahami
                kegunaan dari simplisia rhizoma.
              </li>
              <li>
                Sebagai media belajar dan membantu masyarakat untuk mengetahui
                macam-macam simplisia rhizoma.
              </li>
              <li>
                Sebagai media belajar dan membantu masyarakat dalam membudidaya
                tanaman obat khususnya pada tanaman rimpang.
              </li>
              <li>
                Sebagai bahan evaluasi tentang pengetahuan masyarakat pada
                tanaman rimpang.
              </li>
            </ul>
          </Col>
          <Col lg={true}>
            <br></br>
            <img className="w-100" src={ImageB} style={myStyle} alt="about 2"/>
          </Col>
        </Row>
      </div>
      <Card style={{textAlign:'center'}} >
        <Card.Header>Quote</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p><b>Biarkan makanan menjadi obatmu dan obat menjadi makananmu.</b></p>
            <footer className="blockquote-footer">
              <cite title="Source Title">Hippocrates</cite>
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
      <CarrousellAbout />
    </>
  );
}
export default About;
