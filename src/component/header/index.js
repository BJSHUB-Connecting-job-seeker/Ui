import React from 'react';

import Nav from 'react-bootstrap/Nav';
//import Navbar from 'react-bootstrap/Navbar';

const styles = {
    logo: {
        width: '100px',
        borderRadius: '50px',
        marginTop: '-10px',
        maxHeight: '60px'
    }
}

function Header({logo, links = []}) {
    return (
        <div className = '__KA__header_container' >
            <Nav className="justify-content-end navbar navbar-light navbar-expand-md bg-white py-4" activeKey="/home">
                <div style={{marginRight: '40%'}} >
                    <img src='https://www.bjshub.com/img/bjshublogo.png' alt='loading' style={styles.logo} />
                </div>
                <Nav.Item>
                    <Nav.Link href="/home">
                        Home
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="https://www.bjs360training.com/">
                        Training
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/ourClients">
                        Our Clients
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="https://www.bjshub.com/index.html#team">
                        Team
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="https://www.bjshub.com/gallery.html">
                        Gallery
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="https://www.bjshub.com/daily-walkins-cities-wise.html">
                        Daily Walk-ins
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    )
}



export default Header;
