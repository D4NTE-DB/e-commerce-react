import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {

    const products = useSelector(state => state.products);

    const { id } = useParams();
    console.log(id)
    return (
     
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={`${products[id]?.images?.[id]?.url}`} />
        <Card.Body>
          <Card.Title>{products[id]?.title}</Card.Title>
          <Card.Text>
            
            {products[id]?.description}

          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    );
};

export default ProductDetails;