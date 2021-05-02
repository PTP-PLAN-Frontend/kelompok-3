import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Carousel } from "react-bootstrap";
import Collapse from "react-bootstrap/Collapse";
import ImageA from "./../images/images-1.png";
import ImageB from "./../images/images-2.png";
import ImageC from "./../images/images-3.png";
import ImageD from "./../images/images-a.png";
import ImageE from "./../images/images-b.png";
import ImageF from "./../images/images-c.png";
import ImageG from "./../images/jahe -lemon.jpg";
import ImageH from "./../images/kunyit.jpg";
import ImageI from "./../images/temu-kunci.jpg";
import ImageJ from "./../images/temulawak.jpg";
import ImageK from "./../images/images-d.png";
import ImageL from "./../images/images-e.png";
import ImageM from "./../images/icon_9.svg";
import ImageN from "./../images/icon_5.svg";

function Carrousell1() {
  const myStyle = {
    maxWidth: "100%",
  };

  return (
    <Carousel className="Carrousell1">
      <Carousel.Item>
        <img className="w-100" src={ImageA} style={myStyle} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="w-100" src={ImageB} style={myStyle} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="w-100" src={ImageC} style={myStyle} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

function Carrousell2() {
  const myStyle = {
    maxWidth: "100%",
  };

  return (
    <Carousel className="Carrousell1">
      <Carousel.Item>
        <img className="w-100" src={ImageD} style={myStyle} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="w-100" src={ImageE} style={myStyle} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="w-100" src={ImageF} style={myStyle} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

function Home() {
  const myStyle = {
    maxWidth: "1500",
    fontSize: "1rem",
    textAlign: "justify", 
  };
  return (
    <>
    <Carrousell1 /><Carrousell2 />
    <div className="m-4">
      <Row>
        <Col lg={true}>
          <img className="w-100" src={ImageL} style={myStyle} />
        </Col>
        <Col lg={true}>
          <img className="img-home" src={ImageM}/>
          <h3>Bersumber Lokal</h3>
          <p style={myStyle}>Khasiat tanaman obat sudah dikenali dengan baik oleh masyarakat lokal Indonesia. Setiap daerah memiliki cara pengolahan tersendiri dalam memanfaatkan tanaman obat tradisional. Budaya memanfaatkan sumber daya alam untuk menjaga atau meningkatkan kesehatan telah diturunkan ke setiap generasi. Pengolahan dan tujuan penggunaan yang tepat dapat memberikan efek yang baik terhadap proses pengobatan gejala penyakit atau penyakit tertentu. Perkembangan ilmu pengetahuan juga semakin mendukung perkembangan etnomedisin di dunia, termasuk Indonesia.</p>
        </Col>
      </Row>
      <Row>
        <Col lg={true}>
        <img className="img-home" src={ImageN}/>
          <h3>Obat Tradisional</h3>
          <p style={myStyle}>Menurut Organisasi Kesehatan Dunia (WHO), pengobatan tradisional yang termasuk dalam lingkup etnomedisin merupakan pengetahuan, keyakinan, dan praktik dalam pengobatan yang didasarkan pada pengalaman masyarakat adat atau etnis tertentu sebagai upaya peningkatan derajat kesehatan. Pada tahun 2013, WHO juga menaruh perhatian pada dunia etnomedisin dengan disusunnya strategi pengobatan tradisional WHO dengan tujuan, sebagai berikut (Junaidi, 2016) :
              <ul>
                <li>Memanfaatkan potensi pengobatan tradisional untuk kesehatan rakyat.</li>
                <li>Mempromosikan pengobatan tradisional yang efektif dan aman kepada rakyat.</li>
              </ul>
          </p>
        </Col>
        <Col lg={true}>
          <img className="w-100" src={ImageK} style={myStyle} />
        </Col>
      </Row>
    </div>
    <Resep/>
    </>
  );
}

function Resep() {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  return (
    <Container>
      <div className="home-title">Resep Olahan Minuman</div>
      <Row>
        <Col className="card-wrapper">
          <Card className="card-image">
            <Card.Img variant="top" src={ImageG} />
            <Card.Body>
              <Card.Title>Jahe Lemon</Card.Title>
              <Card.Text>
                Jahe menjadi salah satu rempah yang memiliki khasiat luar biasa
                buat kesehatan tubuh.
              </Card.Text>
              <Button
                variant="primary"
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
              >
                Klik Resep
              </Button>
              <Collapse in={open}>
                <div id="example-collapse-text">
                  <p style={{ paddingTop: 15 }}>Bahan</p>
                  <ul>
                    <li>1 rimpang jahe (memarkan)</li>
                    <li>2 sdm madu</li>
                    <li>1/2 buah lemon (peras airnya)</li>
                    <li>1 gelar air</li>
                    <li>
                      Gula (secukupnya, jika ingin wedang yang lebih manis)
                    </li>
                  </ul>
                  <p>Cara Membuat</p>
                  <ul>
                    <li>
                      Rebus jahe dan air hingga mendidih serta keluar aroma
                      harumnya.
                    </li>
                    <li>
                      Tuang di gelas saji, tambahkan madu dan gula secukupnya.
                    </li>
                    <li>Tambahkan air lemon secukupnya.</li>
                    <li>Aduk rata semua bahan, tunggu hingga hangat.</li>
                    <li>
                      Wedang jahe pun siap disajikan dan menghangatkan tubuh.
                    </li>
                  </ul>
                </div>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>

        <Col className="card-wrapper">
          <Card className="card-image">
            <Card.Img variant="top" src={ImageH} />
            <Card.Body>
              <Card.Title>Kunyit Asam</Card.Title>
              <Card.Text>
                Dipercaya bisa melancarkan haid, mengatasi bau badan, &
                menghaluskan kulit.
              </Card.Text>
              <Button
                variant="primary"
                onClick={() => setOpen2(!open2)}
                aria-controls="example-collapse-text"
                aria-expanded={open2}
              >
                Klik Resep
              </Button>
              <Collapse in={open2}>
                <div id="example-collapse-text">
                  <p style={{ paddingTop: 15 }}>Bahan</p>
                  <ul>
                    <li>600 ml air</li>
                    <li>100 gram gula jawa, sisir</li>
                    <li>20 gr asam jawa</li>
                    <li>8 buah kunyit ukuran besar</li>
                  </ul>
                  <p>Cara Membuat</p>
                  <ul>
                    <li>
                      Cuci bersih kunyit yang masih segar, kemudian kupas
                      kulitnya. Parut atau blender dengan sedikit air, kemudian
                      peras airnya hingga benar-benar habis.
                    </li>
                    <li>
                      Didihkan air, kemudian rebus air perasan kunyit, gula, dan
                      asam jawa.
                    </li>
                    <li>
                      Setelah jamu mendidih, angkat dari kompor dan tunggu
                      sampai dingin. Saring ke dalam gelas atau botol.
                    </li>
                    <li>
                      Demikian cara membuat jamu kunyit asam tradisional.
                      Sajikan kunyit asam dalam keadaan hangat atau dingin.
                    </li>
                  </ul>
                </div>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>

        <Col className="card-wrapper">
          <Card className="card-image">
            <Card.Img variant="top" src={ImageJ} />
            <Card.Body>
              <Card.Title>Temulawak</Card.Title>
              <Card.Text>
                Temulawak salah satu tanaman obat populer yang biasa dijadikan
                sebagai bahan jamu.
              </Card.Text>
              <Button
                variant="primary"
                onClick={() => setOpen3(!open3)}
                aria-controls="example-collapse-text"
                aria-expanded={open3}
              >
                Klik Resep
              </Button>
              <Collapse in={open3}>
                <div id="example-collapse-text">
                  <p style={{ paddingTop: 15 }}>Bahan</p>
                  <ul>
                    <li>100 gram temulawak</li>
                    <li>50 gram kencur</li>
                    <li>40 gram asam jawa</li>
                    <li>200 ml air mineral</li>
                    <li>200 gram gula aren atau gula jawa</li>
                    <li>2 lembar daun pandan</li>
                    <li>2 liter air putih</li>
                  </ul>
                  <p>Cara Membuat</p>
                  <ul>
                    <li>
                      Bersihkan temulawak dan kencur setelah itu iris-iris
                      keduanya. Sangrai irisan temulawak dan kencur di atas
                      wajan sebentara saja.
                    </li>
                    <li>
                      Haluskan temulawak, kencur, asam jawa dan 200 liter air
                      sampai semua bahan-bahan tersebut halus.{" "}
                    </li>
                    <li>
                      Rebus dua liter air, masukkan gula aren dan daun pandan,
                      masak hingga mendidih. Tuang temulawak dan kencur yang
                      telah dihaluskan ke dalam rebusan air dan gula aren.
                      Aduk-aduk sampai semua bahan merata.{" "}
                    </li>
                    <li>
                      Saring larutan sebelum diambil airnya. Tuang temulawak
                      yang telah disaring ke dalam gelas dan sajikan. Selamat
                      mencoba!
                    </li>
                  </ul>
                </div>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>

        <Col className="card-wrapper">
          <Card className="card-image">
            <Card.Img variant="top" src={ImageI} />
            <Card.Body>
              <Card.Title>Temu Kunci</Card.Title>
              <Card.Text>
                Khasiat tanaman ini diketahui dapat mengobati obat batuk,
                sebagai obat gatal, dll.
              </Card.Text>
              <Button
                variant="primary"
                onClick={() => setOpen4(!open4)}
                aria-controls="example-collapse-text"
                aria-expanded={open4}
              >
                Klik Resep
              </Button>
              <Collapse in={open4}>
                <div id="example-collapse-text">
                  <p style={{ paddingTop: 15 }}>Bahan</p>
                  <ul>
                    <li>1 liter air</li>
                    <li>4 ruas temu kunci</li>
                    <li>1 ruas jahe dan kunyit</li>
                    <li>4 ruas kencur</li>
                    <li>4 batang serai</li>
                    <li>1 batang kayu manis</li>
                    <li>5 lembar daun sirih</li>
                    <li>250 gram gula jawa</li>
                    <li>25 gram asam jawa.</li>
                  </ul>
                  <p>Cara Membuat</p>
                  <ul>
                    <li>Blender temu kunci, jahe, kunyit, dan kencur</li>
                    <li>
                      Campur semua bahan di panci, kemudian panaskan hingga
                      mendidih
                    </li>
                    <li>Matikan kompor, biarkan dingin, kemudian saring.</li>
                    <li>
                      Jamu temu kunci bisa langsung dikonsumsi. Anda juga bisa
                      memasukkan jamu ke botol tertutup, kemudian menyimpannya
                      di kulkas agar tahan lama.
                    </li>
                  </ul>
                </div>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
