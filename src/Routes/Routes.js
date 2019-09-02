import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from '../component/Navbar';
import Makanan from '../container/Makanan';
import Minuman from '../container/Minuman';
import Kontak from '../container/Kontak';
import Home from '../container/Home';
import Footer from '../container/Footer';

function Routes () {
    return (
        <Router>
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route path="/makanan" component={Makanan} />
            <Route path="/minuman" component={Minuman} />                        
            <Route path="/kontak" component={Kontak} />
            <Footer />
        </Router>
    )
}

export default Routes;