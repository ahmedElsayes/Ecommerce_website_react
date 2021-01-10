import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'

export default function Product({ singleItem }) {
    return (
        <div>
            <Card className='my-3 p-3 rounded'>
                <Link to={`/product/${singleItem._id}`}>
                    <Card.Img src={singleItem.image} variant='top' />
                </Link>

                <Card.Body>
                    <Link to={`/product/${singleItem._id}`}>
                    <Card.Title as='div'>
                        <strong>{singleItem.name}</strong>
                    </Card.Title>
                    </Link>

                    <Card.Text as='div'>
                        <Rating
                            value = {singleItem.rating}
                            text = {singleItem.numReviews}
                        />
                    </Card.Text>

                    <Card.Text as='h3'>${singleItem.price}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}
