import React from 'react'
import products from '../products'
import { Row, Col } from 'react-bootstrap'
import Product from '../Components/Card'
import Account from '../Components/Table'
import accounts from '../accounts'

function Dashboard() {
  return (
    <div>
      <h1>Latest Products</h1>
      <Row>
        {products.map(product => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
            </Col>
        ))}
      </Row>
    </div>
  )
}

export default Dashboard
