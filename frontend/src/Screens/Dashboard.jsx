import React, { useEffect, useState } from 'react'
import products from '../products'
import { Row, Col } from 'react-bootstrap'
import Product from '../Components/Card'
import Account from '../Components/Table'
import accounts from '../accounts'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../actions/productActions'
import Loader from '../Components/Loader'
import Message from '../Components/Message'

function Dashboard() {
  const dispatch = useDispatch()
  const productList = useSelector(state => state.productList)
  const {error, loading, products} = productList

  useEffect(() => {
      dispatch(listProducts())
  }, [])

  return (
    <div>
      <h1>Latest Products</h1>
      <Row>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
        <Col sm={12} md={8}>
          <Row>
            {products.map(product => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </Col>
        )}
        

        {/* Right column for accounts */}
        <Col sm={12} md={4}>
          <h2>Accounts</h2>
          <Account accounts={accounts} />
        </Col>
      </Row>
    </div>
  )
}

export default Dashboard
