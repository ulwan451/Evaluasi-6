import React from 'react';
import {Card} from 'react-bootstrap';
import './container.css';

function Kontak () {
    return (
        <div className="kontak">

            <Card border="warning" style={{ width: '18rem' }}>
                <Card.Header><h3>Kontak Kami</h3></Card.Header>
                <Card.Body>
                <Card.Text>
                BRB Pesan Antar juga melayani pesanan secara online. Cukup masuk ke web www.brb.com lalu klik online order, daftarkan data diri Anda berikut menu BRB yang Anda pilih, pesanan Andapun akan segera diantar, kapan saja dan di mana saja.
                </Card.Text>
                </Card.Body>
            </Card>

            <Card bg="primary" text="white" style={{ width: '18rem' }}>
                <Card.Header><h4>Alamat</h4></Card.Header>
                <Card.Body>
                <Card.Title>Bandung restaurant basecamp</Card.Title>
                <Card.Text>
                    <h5>Office</h5>
                    <p>Bandung, Jl. Cimahi N0.189, West Java, Indonesia</p>
                </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Kontak;