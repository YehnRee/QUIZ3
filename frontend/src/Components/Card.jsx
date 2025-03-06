import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

function Product({product}) {
  return (
    <Card className='my-3 p-3 rounded'>
        <Link to={`/product/${product._id}`}>
          <Card.Img src={product.image} />
        </Link>

        <Card.Body>
          <Link to={`/product/${product._id}`}>
            <Card.Title as="div">
              <strong>{product.name}</strong>
            </Card.Title>
          </Link>

          <Card.Text as="div">
            <div className='my-3'>
              <Rating value={product.rating} text={`${product.numReviews} review`} color='gold' />
            </div>
          </Card.Text>

          <Card.Text as='h3'>
            ${product.price}
          </Card.Text>
        </Card.Body>

        <Link to={`/product/${product._id}`}>
            <Button variant="primary" className="w-100">
                View Product
            </Button>
        </Link>
    </Card>
  )
}

export default Product
