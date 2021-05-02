import React from 'react';
import Container from 'react-bootstrap/Container';
import Figure from 'react-bootstrap/Figure';

const Simplisia = () => {
  return (
    <Container>
    <br></br>
    <Figure>
    <center><h1>SIMPLISIA</h1></center>
      <center><Figure.Image
        width={800}
        height={200}
        src="https://cdn.popmama.com/content-images/post/20201125/30-pengobatan-rumahan-tradisional-yang-ampuh-2jpg-f47a9f6a6f0009ce35b806c9256d87d4_600xauto.jpg"
      /></center>
        <p align="justify"><h5>Menurut farmakope Indonesia edisi ketiga, simplisia adalah bahan alam yang digunakan sebagai obat
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
  );
}

export default Simplisia;
