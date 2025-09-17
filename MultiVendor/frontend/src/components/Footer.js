import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
    return (
        <footer className="bg-dark text-light mt-5">
            <Container fluid className="py-5">
                <Row className="justify-content-center">
                    <Col md={8} className="text-center">
                        <h5 className="text-uppercase fw-bold mb-4" style={{ color: '#ff6b6b' }}>
                            Merkatoshop
                        </h5>
                        <p className="mb-4">
                            Your one-stop destination for quality products and exceptional shopping experience
                        </p>
                        
                        
                        <div className="mb-4">
                            <a href="#" className="text-light mx-2 fs-5">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="text-light mx-2 fs-5">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="text-light mx-2 fs-5">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" className="text-light mx-2 fs-5">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </Col>
                </Row>
                
                <Row className="border-top pt-4">
                    <Col className="text-center">
                        <p className="mb-2 text-muted">
                            &copy; {new Date().getFullYear()} Merkatoshop. All rights reserved.
                        </p>
                        <div className="text-muted small">
                            <a href="#" className="text-muted text-decoration-none mx-2">Privacy Policy</a>
                            <span className="mx-1">•</span>
                            <a href="#" className="text-muted text-decoration-none mx-2">Terms of Service</a>
                            <span className="mx-1">•</span>
                            <a href="#" className="text-muted text-decoration-none mx-2">Returns Policy</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer