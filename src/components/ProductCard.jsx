import React from 'react';
import { Row, Col, Card, Carousel } from 'react-bootstrap';
import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
import '../App.css'

const ProductCard = () => {

    const products = useSelector((state) => state.products)
    
    return (
        <div>
            <h2>Products</h2>
            <h3>{products[0]?.title}</h3>
            {products.map((prod) => (
                <Row key={prod.id}xs={1} md={2} className="g-4">
                    {Array.from({ length: 4 }).map((_, idx) => (
                        <Col key={idx}>
                            <Card bg='info'>
                                {/* <Card.Img variant="top" src={`${prod.images[0].url}`} /> */}
                                {/* <Link to='/chdet'/> */}
                                <Carousel>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={`${prod.images[0].url}`}
                                            alt="First slide"
                                        />

                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={`${prod.images[1].url}`}
                                            alt="Second slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={`${prod.images[2].url}`}
                                            alt="Third slide"
                                        />
                                    </Carousel.Item>
                                </Carousel>
                                {/* <Link/> */}
                                <Card.Body>
                                    <Card.Title>{prod.title}</Card.Title>
                                    <Card.Text>

                                        {prod.description}

                                    </Card.Text>
                                    <Card.Footer>
                                        <small className="text-muted">Created At: {prod.createdAt}</small>
                                        <br />
                                        <small className="text-muted">Updated At: {prod.updatedAt}</small>

                                    </Card.Footer>
                                </Card.Body>

                            </Card>
                        </Col>
                    ))}
                </Row>
            ))}
        </div>
    );
};

export default ProductCard;