import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import './Lengkuas.css';

export default function Lengkuas() {
  return (
    <Container>
      <div className='lengkuas-main'>
        <center><h1>Lengkuas (Languatis Rhizoma)</h1></center>
        <center><img 
        src="https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/2020/02/15/3592512459.jpg" 
        alt="lengkuas" 
        width="300px"
        height="300px"/></center>

        <p>Nama tanaman asal : Alpinia Officinarum Hance., Aplinia Galanga L., Languas Galanga I.</p>
        <p>Nama famili       : Zingiberaceae</p>
        <p align='justify'>Lengkuas memiliki zat berkhasiat yaitu minyak atsiri yang mengandung metilsinamat, sineol, kamfer, dan galangol.
        Simplisia ini digunakan sebagai antifungsi dan karminatif. Languatis rhizoma memiliki bau aromatik yang khas dan rasa yang pedas.
        Bagian dari tanaman yang digunakan ialah kepingan akar tinggalnya. Penyimpanan simplisia ini dilakukan dalam wadah yang tertutup dengan baik.
        Lengkuas dapat dipanen ketika tanaman nya berumur 2,5 sampai 4 bulan untuk memperoleh rimpang muda yang belum banyak berserat dengan cara
        dicabut, kemudian rimpangnya dipisahkan dari batang. Rimpang tersebut selanjutnya dicuci dan dikeringkan. Contoh sediaan lengkuas yang dikenal
        yaitu Imacil (Imfarmind).
      </p>
      </div>
    </Container>
  );
}