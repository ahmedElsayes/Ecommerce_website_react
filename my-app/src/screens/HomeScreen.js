import React, { useState, useEffect} from 'react'

//import Products from '../products'
import Product from '../components/Product'
import { Row, Col } from 'react-bootstrap'
import axios from 'axios'

export default function HomeScreen() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios.get('/api/products')
            
            setProducts(data)
        }
        fetchProducts()
    }, [])
    return (
        <div>
            <h1>Latest products</h1>
            <Row>
            {products.map((singleProduct) => {
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
