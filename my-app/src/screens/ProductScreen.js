import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating'
import products from '../products'

export default function ProductScreen({ match }) {

    const singleProduct = products.find((p) => {return p._id === match.params.id})
    return (
        <div>
            <Link className='btn btn-light my-3' to='/'>
                Go Back
            </Link>
            <Row>
                <Col md={6}>
                    <Image src={singleProduct.image} alt={singleProduct.name} fluid />
                </Col>
                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h3>{singleProduct.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating
                                value={singleProduct.rating}
                                text={`${singleProduct.numReviews} reviews`}
                            />
                        </ListGroup.Item>
                        <ListGroup.Item>Price: ${singleProduct.price}</ListGroup.Item>
                        <ListGroup.Item>Description: {singleProduct.description}</ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </div>
    )
}
