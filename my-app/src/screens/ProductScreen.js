import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating'
import products from '../products'

export default function ProductScreen({ match }) {

    const singleProduct = products.find((p) => {return p._id === match.params.id})
    return (
        <div> {singleProduct.name} </div>
    )
}
