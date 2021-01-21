import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import { listProducts } from '../actions/productActions'

const HomeScreen = () => {
  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products } = productList

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  return (
    <>
      <h1>Latest Products</h1>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <Row>
          {products.map((product, indx) => (
            <Col key={indx} sm={12} md={6} lg={4} xl={3}>
                {/* <div>Product{indx}</div> */}
                <Product singleItem={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  )
}

export default HomeScreen