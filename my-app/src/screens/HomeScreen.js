import React from 'react'
import Products from '../products'
import Product from '../components/Product'
import { Row, Col } from 'react-bootstrap'

export default function HomeScreen() {
    return (
        <div>
            <h1>Latest products</h1>
            <Row>
            {Products.map((singleProduct) => {
                return (
                    <Col key={singleProduct._id} sm={12} md={6} lg={4} xl={3}>
                        <Product singleItem={singleProduct}/>
                    </Col>
                )
            })}
            </Row>
        </div>
    )
}
