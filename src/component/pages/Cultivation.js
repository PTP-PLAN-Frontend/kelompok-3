import React from 'react';
import '../../App.css';
import Container from 'react-bootstrap/Container';
import Figure from 'react-bootstrap/Figure';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ImageA from "./../images/6.jpeg";

function Cultivation() {
  const myStyle = {
    maxWidth: "100%",
    borderRadius:"15px",
    fontSize: "1rem",
    textAlign: "justify",
    textIndent: "45px",
  };

  return (
    <>
    <center>
      <Figure.Image width='100%' src={ImageA}/></center>

    <Container>
    <br></br>
    <center><h1>Ayo Budidayakan Tanaman Obat!</h1></center>
    <br></br>
    <Row>
        <Col lg={true}>
            <img className="w-100" src="https://www.pertanianku.com/wp-content/uploads/2021/02/Cara-Pengolahan-Tanah-Sebelum-Menanam-Tanaman-Buah-di-Pekarangan.jpg" style={myStyle} alt="about" />
          </Col>
          <Col lg={true}>
          <br></br>
          <br></br>
            <h3>Persiapan dan Pengolahan Tanah</h3>
            <hr></hr>
            <p align='justify'>
              Pada budidaya tanaman obat, persiapan dan pengolahan tanah merupakan perhatian pertama yang harus dilakukan 
              karena tanah menyediakan unsur-unsur hara yang merupakan makanan bagi tanaman. Kesuburan tanah meliputi, 
              kesuburan fisik (struktur tanah, suhu tanah, dan drainase tanah), kesuburan kimiawi (ketersediaan unsur hara 
              dan pH tanah), dan kesuburan biologi (aktivitas mikroorganisme tanah dan bahan organik tanah). Pengolahan tanah
              bertujuan untuk memperbaiki kondisi fisik tanah dan membersihkan tanah dari gulma (tanaman pengganggu).<br></br>
            </p>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col lg={true}>
            <br></br>
            <h3>Penanaman</h3>
            <hr></hr>
            <p align='justify'>
              Sebelum melakukan penanaman, terlebih dahulu melakukan pembibitan. Pembibitan dapat dilakukan bersamaan dengan
              kegiatan pengolahan tanah. Tujuan dilakukannya pembibitan adalah untuk mendapatkan tanaman dengan daya tumbuh yang baik
              dan seragam. Perbanyakan tanaman dapat dilakukan secara vegetatif (misalnya stek dan cangkok), dan generatif (misalnya dengan biji).<br></br>
            </p>
          </Col>
          <Col lg={true}>
            <img className="w-100" src="https://cdn.statically.io/img/digital-meter-indonesia.com/f=auto/wp-content/uploads/2016/02/Cara-Pengolahan-Tanah.jpg" style={myStyle} alt="about 2"/>
          </Col>
        </Row>
        <Row>
        <Col lg={true}>
          <br></br>
            <img className="w-100" src="https://oriflameid.com/wp-content/uploads/2020/04/Tahapan-Pemeliharaan-Budidaya-Tanaman-Obat.jpg" style={myStyle} alt="about" />
          </Col>
          <Col lg={true}>
          <br></br>
          <br></br>
          <br></br>
            <h3>Pemeliharaan</h3>
            <hr></hr>
            <p align='justify'>
              Pemeliharaan tanaman obat bertujuan agar tanaman terbebas dari gulma dan hama tanaman, sehingga hasil dari tanaman
              yang ditanam mendapatkan hasil maksimal. Adapun pemeliharaan yang dilakukan, meliputi pemupukan, penyiraman, penyiangan,
              serta pengendalian hama dan penyakit.<br></br>
            </p>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col lg={true}>
            <br></br>
            <br></br>
            <h3>Panen</h3>
            <hr></hr>
            <p align='justify'>
              Saat pemungutan/pengambilan hasil dati tanaman yang ditanam (panen) harus diperhatikan waktunya 
              agar menghasilkan simplisia dengan kandungan zat berkhasiat yang optimal. Hal ini disebabkan kandungan 
              kimia dalam tumbuhan tidak sama di setiap waktu.<br></br>
            </p>
          </Col>
          <Col lg={true}>
            <img className="w-100" src="https://www.teknikbudidaya.com/wp-content/uploads/2017/05/tanaman-2Bmenguntungkan.png" style={myStyle} alt="about 2"/>
            <br></br>
            <br></br>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Cultivation;