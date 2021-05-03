import React from 'react';
import Container from 'react-bootstrap/Container';
import Figure from 'react-bootstrap/Figure';
import Carousel from 'react-bootstrap/Carousel';
import ImageD from "./../images/images-a.png";
import ImageE from "./../images/images-b.png";

function Carrousell() {
  const myStyle = {
    maxWidth: "100%",
  };

  return (
    <Carousel>
      <Carousel.Item>
        <img className="w-100" src={ImageD} style={myStyle} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="w-100" src={ImageE} style={myStyle} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

function Simplisia() {
  const myStyle = {
    maxWidth: "1500",
    borderRadius:"15px",
    fontSize: "1rem",
    textAlign: "justify",
    textIndent: "45px",
  };

  return (
  <>
    <Carrousell/>
    <Container>
    <br></br>
    <Figure>
    <center><h1>SIMPLISIA</h1></center>
    <br></br>
      <center><Figure.Image
        width={800}
        height={200}
        src="https://cdn.popmama.com/content-images/post/20201125/30-pengobatan-rumahan-tradisional-yang-ampuh-2jpg-f47a9f6a6f0009ce35b806c9256d87d4_600xauto.jpg"
      /></center>
        <p align="justify" style={myStyle}><h5>Menurut farmakope Indonesia edisi ketiga, simplisia adalah bahan alam yang digunakan sebagai obat
        alam yang belum mengalami pengolahan apapun juga, kecuali dinyatakan lain berupa bahan yang telah dikeringkan. Berikut adalah
        tata cara pembuatan Simplisia :</h5></p>

        <h5>1. Pengumpulan Bahan Baku</h5>
        <h5>2. Sortasi Basah</h5>
        <h5>3. Pencucian</h5>
        <h5>4. Peranjangan atau Pengirisan</h5>
        <h5>5. Pengeringan</h5>
        <h5>6. Sortasi Basah</h5>
        <h5>7. Pengemasan</h5>
        <h5>8. Penyimpanan</h5>
        <h5>9. Pemeriksaan Mutu</h5>
    </Figure>
    </Container>
  </>
  );
}

export default Simplisia;
