import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

const styles = {
    carousel: {
        image: {
            width: '600px',
            height: '450px'
        }
    },
    container: {
        width: '100%'
    }
}

function OurClients({logo, links = []}) {
    return (
        <div className = '__KA__why_us' style={styles.container} >
            <div>
                <h1 className="text-center mb-0" id="why">Our Clients</h1>
            </div>
            <br />
            <br />
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://www.gstatic.com/webp/gallery/1.jpg"
                    alt="First slide"
                    style={styles.carousel.image}
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://www.gstatic.com/webp/gallery/1.jpg"
                    alt="Third slide"
                    style={styles.carousel.image}
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://www.gstatic.com/webp/gallery/1.jpg"
                    alt="Third slide"
                    style={styles.carousel.image}
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default OurClients;
