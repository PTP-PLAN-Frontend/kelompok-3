import React from 'react';
import Card from 'react-bootstrap/Card';

export default function ResepJahe() {
    return (
        <Card>
        <Card.Header>Resep Minuman Jahe</Card.Header>
        <Card.Body>
            <blockquote className="blockquote mb-0">
            <h2>Bahan</h2>
            <ul>
                <li>1 rimpang jahe (memarkan)</li>
                <li>2 sdm madu</li>
                <li>1/2 buah lemon (peras airnya)</li>
                <li>1 gelar air</li>
                <li>Gula (secukupnya, jika ingin wedang yang lebih manis)</li>
            </ul>
            <h2>Cara Membuat</h2>
            <ul>
                <li>Rebus jahe dan air hingga mendidih serta keluar aroma harumnya.</li>
                <li>Tuang di gelas saji, tambahkan madu dan gula secukupnya.</li>
                <li>Tambahkan air lemon secukupnya.</li>
                <li>Aduk rata semua bahan, tunggu hingga hangat.</li>
                <li>Wedang jahe pun siap disajikan dan menghangatkan tubuh.</li>
            </ul>
            </blockquote>
        </Card.Body>
        </Card>
    );
}

