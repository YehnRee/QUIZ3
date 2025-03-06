import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap'
import Rating from '../Components/Rating'
import products from '../products'
import axios from 'axios'

function ProductScreen() {
    const { id } = useParams()
    const [product, setProduct] = useState([])

    useEffect(() => {
        async function fetchProducts() {
            const {data} = await axios.get(`api/products/${id}`)
            setProduct(data)
        }
    })
  return (
    <div>
        <Row>
            <Col md={6}>
                <Image src={product.image} alt={product.name} fluid></Image>
            </Col>
            <Col md={3}>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <h3>{product.name}</h3>
                    </ListGroup.Item>
                    <ListGroup.Item>{product.description}</ListGroup.Item>
                    <ListGroup.Item>
                        <Rating
                            value={product.rating}
                            text={`${product.numReviews} reviews`}
                            color={"#f8e825"}
                        />
                    </ListGroup.Item>
                    <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
                </ListGroup>
            </Col>
            <Col md={3}>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <Row>
                            <Col>Price:</Col>
                            <Col>
                                <strong>${product.price}</strong>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col>Availability</Col>
                            <Col>
                                {product.countInStock > 0 ? "In stock" : "Out of stock"}
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Button
                                //onClick={addToCartHandler}
                                className='btn-block'
                                type="button"
                                disabled={product.countInStock === 0}
                            >
                                Add to Cart
                            </Button>
                        </Row>
                    </ListGroup.Item>
                </ListGroup>
            </Col>
        </Row>
        {product.name}
        <Link to="/" className="btn btn-light my-3">
            Go Back
        </Link>    
    </div>
  )
}

export default ProductScreen