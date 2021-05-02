import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Ayo Budidayakan Tanaman Obat!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://bibitbunga.com/wp-content/uploads/2017/02/tanaman-alang-alang.jpg'
              text='Alang-alang (Imperata cylindrica)'
              label='Simplisia'
              path='/cultivation-alang-alang'
            />
            <CardItem
              src='https://alamtani.com/wp-content/uploads/2014/04/bawang-merah.jpg'
              text='Bawang merah (Allium ascalonicum)'
              label='Rhizoma'
              path='/cultivation-bawang-merah'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='http://3.bp.blogspot.com/-WnXySINBfvo/UuPbbZPwKMI/AAAAAAAAA9g/0HUspdG63I8/s1600/tanaman+jahe.jpg'
              text='Jahe Merah (Zingiber officinale varietas)'
              label='Rhizoma'
              path='/cultivation-jahe-merah'
            />
            <CardItem
              src='https://i2.wp.com/gdm.id/wp-content/uploads/2020/07/budidaya-kencur-1040x675.jpg'
              text='Kencur (Kaempferia galanga)'
              label='Rhizoma'
              path='/cultivation-kencur'
            />
            <CardItem
              src='https://akcdn.detik.net.id/community/media/visual/2020/06/05/kunyit.jpeg?w=574'
              text='Kunyit (Curcuma longa)'
              label='Rhizoma'
              path='/cultivation-kunyit'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;