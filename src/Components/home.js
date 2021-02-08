import React from 'react';
import * as ReactBootStrap from "react-bootstrap";

const dank = () => {
    return (
        <div className="App">
            <ReactBootStrap.Carousel style={{ marginTop: '10px' }}>
                <ReactBootStrap.Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://source.unsplash.com/1400x400/?audi-auction"
                        alt="First slide"
                    />
                    <ReactBootStrap.Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </ReactBootStrap.Carousel.Caption>
                </ReactBootStrap.Carousel.Item>
                <ReactBootStrap.Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://source.unsplash.com/1400x400/?ford-auction"
                        alt="Third slide"
                    />

                    <ReactBootStrap.Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </ReactBootStrap.Carousel.Caption>
                </ReactBootStrap.Carousel.Item>
                <ReactBootStrap.Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://source.unsplash.com/1400x400/?car-auction"
                        alt="Third slide"
                    />

                    <ReactBootStrap.Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </ReactBootStrap.Carousel.Caption>
                </ReactBootStrap.Carousel.Item>
            </ReactBootStrap.Carousel>

            <div>
                <h1 style={{ borderWidth: 0, borderBottomWidth: 2, borderStyle: 'dashed', borderColor: 'blue' }}>Latest Auction</h1>
                <ReactBootStrap.CardDeck style={{ margin: 10 }}>
                    <ReactBootStrap.Card>
                        <ReactBootStrap.Card.Img variant="top" src="https://source.unsplash.com/1400x400/?Ford-car-auction" />
                        <ReactBootStrap.Card.Body>
                            <ReactBootStrap.Card.Title>Card title</ReactBootStrap.Card.Title>
                            <ReactBootStrap.Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </ReactBootStrap.Card.Text>
                        </ReactBootStrap.Card.Body>
                        <ReactBootStrap.Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </ReactBootStrap.Card.Footer>
                    </ReactBootStrap.Card>
                    <ReactBootStrap.Card>
                        <ReactBootStrap.Card.Img variant="top" src="https://source.unsplash.com/1400x400/?Audi-car-auction0" />
                        <ReactBootStrap.Card.Body>
                            <ReactBootStrap.Card.Title>Card title</ReactBootStrap.Card.Title>
                            <ReactBootStrap.Card.Text>
                                This card has supporting text below as a natural lead-in to additional
        content.{' '}
                            </ReactBootStrap.Card.Text>
                        </ReactBootStrap.Card.Body>
                        <ReactBootStrap.Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </ReactBootStrap.Card.Footer>
                    </ReactBootStrap.Card>
                    <ReactBootStrap.Card>
                        <ReactBootStrap.Card.Img variant="top" src="https://source.unsplash.com/1400x400/?car-auction" />
                        <ReactBootStrap.Card.Body>
                            <ReactBootStrap.Card.Title>Card title</ReactBootStrap.Card.Title>
                            <ReactBootStrap.Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This card has even longer content than the first to
                                show that equal height action.
      </ReactBootStrap.Card.Text>
                        </ReactBootStrap.Card.Body>
                        <ReactBootStrap.Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </ReactBootStrap.Card.Footer>
                    </ReactBootStrap.Card>
                </ReactBootStrap.CardDeck>
            </div>
        </div>
    )
}

export default dank;