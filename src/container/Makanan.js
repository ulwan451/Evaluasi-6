import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './container.css';

function Makanan () {
    return (
        <div className="makanan">
          <h2>DAFTAR MAKANAN</h2>
            <CardGroup>
  <Card>
    <Card.Img variant="top" src="https://cdn.sindonews.net/dyn/620/content/2019/02/27/185/1382349/cari-teman-makan-siang-bikin-ayam-bakar-bumbu-siram-saja-SoU.jpg" />
    <Card.Body>
      <Card.Title>Ayam Bakar/Rp.150,000</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://img.taste.com.au/JXEqnOBT/w720-h480-cfill-q80/taste/2018/10/kecap-manis-nasi-goreng_1980x1320-142073-1.jpg" />
    <Card.Body>
      <Card.Title>Nasi Goreng/Rp.50,000</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3w1TNObisa5nCVQRyutm4S8tvp7tm84dvu-mJ-c92Ly33TY9p" />
    <Card.Body>
      <Card.Title>Sate Padang/Rp.80,000</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>


<CardGroup>
  <Card>
    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3w1TNObisa5nCVQRyutm4S8tvp7tm84dvu-mJ-c92Ly33TY9p" />
    <Card.Body>
      <Card.Title>Sate Madura/Rp.150,000</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://cdn.sindonews.net/dyn/620/content/2019/02/27/185/1382349/cari-teman-makan-siang-bikin-ayam-bakar-bumbu-siram-saja-SoU.jpg" />
    <Card.Body>
      <Card.Title>Ayam Goreng/Rp.50,000</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://img.taste.com.au/JXEqnOBT/w720-h480-cfill-q80/taste/2018/10/kecap-manis-nasi-goreng_1980x1320-142073-1.jpg" />
    <Card.Body>
      <Card.Title>Sate Unta/Rp.80,000</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
        </div>
    )
}

export default Makanan;