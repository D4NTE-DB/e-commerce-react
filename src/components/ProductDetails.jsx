import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const ProductDetails = () => {

    const products = useSelector(state => state.products)

    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={`${products[0]?.images?.[0].url}`} />
        <Card.Body>
          <Card.Title>{products[0]?.title}</Card.Title>
          <Card.Text>
            
            {products[0]?.description}

          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    );
};

export default ProductDetails;