import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import './Alang-alang.css';

export default function AlangCultivation() {
  return (
    <Container>
    <div className='alang-main'>
      <center><h1>Alang-alang (Imperata cylindrica)</h1></center>
      <center><img
      src="https://bibitbunga.com/wp-content/uploads/2017/02/tanaman-alang-alang.jpg"
      alt="alang-alang" /> </center>
      <br></br>
      <p align="justify">Sebagai gulma keberadaan alang-alang sulit dikendalikan, cepat menjadi banyak,
      dan cepat tinggi. Keberadaannya menghalangi tanaman utama secara fisik, dan secara kimiawi,
      penyerapan unsur-unsur pertumbuhan tannaman utama didalam tanah menjadi terganggu.</p>
    
      <p align="justify">Menurut Balit Karet Sembawa (1996), pengendalian alang-alang dapat dilakukan dengan teknik perebahan, mekanis, kultur teknis, kimia dan terpadu, seperti dibawah ini.</p>
    
      <p>A. Teknik Perebahan</p>
      <ul style={{ padding: 10 }}>
        <li>Daun dan batang alang-alang yang telah direbahkan akan kering dan mati tanpa merangsang pertumbuhan tunas dan rimpang,dan dapat berfungsi sebagai mulsa.</li>
        <li>Perebahan dapat menggunakan papan, potongan kayu atau drum.</li>
        <li>Setelah alang-alang terkendali,lahan siap untuk usaha tani dengan tahap-tahap perebahan tersebut.</li>
      </ul>
      
      <p>B. Teknik Mekanis</p>
      <ul style={{ padding: 10 }}>
        <li>Dilakukan dengan pengolahan tanah dengan membajak atau mencangkul.</li>
        <li>Penebasan dengan alat yang dapat mengurangi persaingan alang-alang dengan tanaman pokok tetapi hanya bersifat sementara dan harus sering diulangi minimum sebulan sekali.</li>
         <li>Setelah alang-alang terkendali, lahan siap untuk ditanami.</li>
      </ul>
      
      <p>C. Teknik Kultur Teknis</p>
      <ul style={{ padding: 10 }}>
        <li>Penggunaan tanaman penutup tanah leguminosa(PTL).Jenis-jenis PTL yang sesuai meliputi Centrosema pubescens,Puerariajavanica, P. triloba, C.mucunoides, Mucuna spp.,dan Stylosantehes guyanensis.</li>
        <li>Semprot alang-alang dengan herbisida dengan model lorong,lebar lorong 2m.,jarak antar lorong 4 m.</li>
        <li>Apabila alang-alang sudah kering ,buat dua alur tanaman sedalam 5 cm.,jarak antar alur 70 cm.</li>
        <li>Gunakan PTL sesuai rekomendasi daerah setempat,kebutuhan benih 2 kg/ha.</li>
        <li>Benih dicampur pupuk SP-36 sebanyak 24 kg/ha kemudian ditaburkan di dalam alur.</li>
        <li>Tutup alur dengan tanah setebal 1 cm .</li>
        <li>Alang-alang akan mati oleh tajuk PTL.</li>
        <li>Metode ini lebih tepat untuk lahan yang sudah ada tanaman pokoknya.</li>
      </ul>

      <p>D. Teknik Pengendalian Terpadu</p>
      <ul style={{ padding: 10 }}>
        <li>Semprot alang-alang yang sudah tumbuh dengan herbisida sistemik.</li>
        <li>Rebahkan alang-alang yang sudah mati dan kering.</li>
        <li>Tanam tanaman semusim dengan cara tugal sebagai pre-crop-ping.</li>
        <li>Bersamaan dengan itu lahan siap ditanami tanaman penaung dan tanaman pokok dengan tahab-tahab seperti yang telah diuraikan.</li>
        <li>Pada pengendaliannya, alang-alang yang mati selain dibakar dapat juga dimanfaatkan sebagai mulsa untuk konserfasi lahan, atau sebagai bahan pupuk kompos.</li>
      </ul>

      <small className='text-muted'>
      Sumber:https://genagraris.id/post/mengenal-alang-alang-sebagai-gulma-dan-pengendaliannya#:~:text=Menurut%20Balit%20Karet%20Sembawa%20(1996,dan%20terpadu%2C%20seperti%20dibawah%20ini.&text=Daun%20dan%20batang%20alang%2Dalang,dan%20dapat%20berfungsi%20sebagai%20mulsa.
      </small>
    </div>
    </Container>
  );
}