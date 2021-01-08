import React from 'react'
import { Card } from 'react-bootstrap'

export default function Product({ singleItem }) {
    return (
        <div>
            <Card className='my-3 p-3 rounded'>
                <a href={`/product/${singleItem._id}`}>
                    <Card.Img src={singleItem.image} variant='top' />
                </a>

                <Card.Body>
                    <a href={`/product/${singleItem._id}`}>
                    <Card.Title as='div'>
                        <strong>{singleItem.name}</strong>
                    </Card.Title>
                    </a>

                    <Card.Text as='div'>
                    <div className='my-3'>
                        {singleItem.rating} from {singleItem.numReviews} reviews
                    </div>
                    </Card.Text>

                    <Card.Text as='h3'>${singleItem.price}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}
