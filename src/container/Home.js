import React from 'react';
import {Jumbotron, Button} from 'react-bootstrap';
import './container.css';

function Home () {
    return (
        <div className="home">
            <Jumbotron className="img">
            <h1>Selamat Datang</h1>
            <p>
                This is a simple hero unit, a simple jumbotron-style component for calling
                extra attention to featured content or information.
                This is a simple hero unit, a simple jumbotron-style component for calling
                extra attention to featured content or information.
                This is a simple hero unit, a simple jumbotron-style component for calling
                extra attention to featured content or information.
                This is a simple hero unit, a simple jumbotron-style component for calling
                extra attention to featured content or information.
            </p>
            <h3>Silahkan Pesan Sekarang Juga!</h3>
            <p>
                <Button variant="warning">Pesan</Button>
            </p>
            </Jumbotron>
        </div>
    )
}

export default Home;