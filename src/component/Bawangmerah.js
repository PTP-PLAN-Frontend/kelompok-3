import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import './Bawangmerah.css';

export default function BawangMerahCultivation () {
  return (
    <Container>
    <div className='bawangmerah-main'>
      <center><h1>Budidaya Bawang Merah</h1></center>
      <center><img alt='bawang-merah' src="https://alamtani.com/wp-content/uploads/2014/04/bawang-merah.jpg"></img></center>
      <br></br>
      <p align="justify">A. Benih</p>
      
      <p align="justify">Benih yang digunakan merupakan umbi mini hasil perbanyakan dari biji/TSS dan merupakan varietas unggul.Kriteria umbi mini untuk bibit, yaitu cukup umur
      tanaman (70-80 hari) tergantung pada varietas yang ditanam, cukup umur simpan (2-4 bulan), padat atau kompak dan kulit umbinya tidak luka serta warnanya berkilau.
      Apabila benih bawang merah belum cukup umur simpan (tunas dalam benih masih sekitar 50-60%), dilakukan pemotongan ujung umbi (± 0,5 cm atau 1/3 bagian ujungnya) dengan
      tujuan untuk memecahkan dormansi.</p>
      
      <ul style={{ padding: 10 }}>
        <li>Kebutuhan benih sebanyak 1200 kg/ha.</li>
        <li>Benih bersih dari kulit yang kering atau kotoran.</li>
        <li>Untuk mencegah serangan penyakit layu fusarium, dilakukan perlakuan benih sebelum tanam dengan menggunakan fungisida Mankozeb (dosis 100 gr fungisida/100 kg benih dan disimpan dalam karung plastik selama 1-2 hari).</li>
      </ul>

      <p>B. Persiapan Lahan</p>
      <ul style={{ padding: 10 }}>
        <li>Lahan dibersihkan dari sisa-sisa tanaman sehingga siap olah..</li>
        <li>Pada lahan bekas padi sawah, tanah diolah dan dibuat bedengan-bedengan terlebih dahulu dengan lebar (1,2-1,5 m) dan panjangnya disesuaikan dengan kondisi lahan dengan kedalaman parit 50-60 cm dan lebar parit 40-50. Bedengan mengikuti arah Timur – Barat.</li>
        <li>Untuk daerah endemik orong-orong, diberikan insektisida karbofuran dengan dosis 30 kg/ha bersamaan dengan pemberian pupuk organik.</li>
      </ul> 
      
      <p>C. Penanaman</p>
      <p>Penanaman umbi dengan cara menancapkan atau membenamkan pada bedengan sedalam 3/4 bagian umbi.</p>

      <small className='text-muted'> Sumber: https://jabar.litbang.pertanian.go.id/index.php/info-teknologi/607-budidaya-bawang-merah
      </small>
    </div>
    </Container>
  );
}