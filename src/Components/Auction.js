import React from 'react';
import * as ReactBootStrap from "react-bootstrap";


const Feature = () => {
    return (
        <div className="App">
            <h1 style={{ borderWidth: 0, borderBottomWidth: 2, borderStyle: 'dashed', borderColor: 'blue', marginTop: 10 }}>Latest Auction</h1>
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
    )
}

export default Feature;