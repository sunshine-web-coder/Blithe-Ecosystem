import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../../assets/logo-sm.png';

const Download = () => {
  return (
    <section className="bg-warning text-light py-5 py-lg-7 text-center">
        <Container>
            <Row>
                <Col sm="12">
                    <div className="logo-area mb-4">
                        <img src={logo} alt="Logo"/>
                    </div>
                    <h3 className='fs-4xl mb-4'>Get Started</h3>
                    <button className="btn btn-light">Download Blithe</button>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Download