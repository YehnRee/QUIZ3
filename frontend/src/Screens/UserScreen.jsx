import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, ListGroup, Button, Card } from 'react-bootstrap'
import accounts from '../accounts'

function UserScreen() {
    const { id } = useParams()
    const account = accounts.find((a) => a._id === id)
    return (
        <div>
            <Row>
                <Col md={6}>
                    <Card className='my-3 p-3 rounded'>
                        <Card.Body>
                            <Card.Title as="h3">{account.username}</Card.Title>
                            <ListGroup variant='flush'>
                                <ListGroup.Item>Email: {account.email}</ListGroup.Item>
                                <ListGroup.Item>Role: {account.role}</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card className='my-3 p-3 rounded'>
                        <Card.Body>
                            <Card.Title as="h4">Account Details</Card.Title>
                            <ListGroup variant='flush'>
                                <ListGroup.Item>
                                    <strong>Account Created:</strong> {account.createdAt}
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Link to="/" className="btn btn-light my-3">
                Go Back
            </Link>
        </div>
    )
}

export default UserScreen
