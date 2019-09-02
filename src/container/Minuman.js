import React from 'react';
import {Card, CardGroup} from 'react-bootstrap';
import './container.css';

function Minuman () {
    return (
        <div className="minuman">
            <h2>DAFTAR MINUMAN</h2>
            <CardGroup>
            <Card>
                <Card.Img variant="top" src="http://www.bistro301.com/wp-content/uploads/2019/04/Jenis-minuman-favorit-biasanya-ditawarkan-di-kedai-kopi.jpg" />
                <Card.Body>
                <Card.Title>Kopi/Rp.65,000</Card.Title>
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
                <Card.Img variant="top" src="https://cdn.popbela.com/content-images/post/20170302/wwwmydetoxdietcouk-d092ccf8ec67c874120bb4031ee69b2e_750x500.jpg" />
                <Card.Body>
                <Card.Title>Aneka Jus/Rp.55,000</Card.Title>
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
                <Card.Img variant="top" src="http://www.klikhotel.com/blog/wp-content/uploads/2015/07/KD-08-copy.jpg" />
                <Card.Body>
                <Card.Title>Minuman Dingin/Rp.75,000</Card.Title>
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
                <Card.Img variant="top" src="http://www.klikhotel.com/blog/wp-content/uploads/2015/07/KD-08-copy.jpg" />
                <Card.Body>
                <Card.Title>Coklat/Rp.65,000</Card.Title>
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
                <Card.Img variant="top" src="http://www.bistro301.com/wp-content/uploads/2019/04/Jenis-minuman-favorit-biasanya-ditawarkan-di-kedai-kopi.jpg" />
                <Card.Body>
                <Card.Title>Kopi Pahit/Rp.55,000</Card.Title>
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
                <Card.Img variant="top" src="https://cdn.popbela.com/content-images/post/20170302/wwwmydetoxdietcouk-d092ccf8ec67c874120bb4031ee69b2e_750x500.jpg" />
                <Card.Body>
                <Card.Title>Jus Buah/Rp.75,000</Card.Title>
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

export default Minuman;