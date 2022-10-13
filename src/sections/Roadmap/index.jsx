import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Roadmap = () => {
  return (
    <section className='roadmap py-5 py-lg-7 text-center'>
        <Container>
            <Row>
                <Col sm="12">
                    <div className="roadmap-header mb-4 mb-lg-5">
                        <h2 className='fs-2xl fs-lg-4xl text-black fw-bold'>Roadmap</h2>
                    </div>
                    <div className="roadmap-content">
                        <ul className="list-unstyled timeline-list">
                            <li className='align-items-end'>
                                <div className="timeline-list-count">
                                    <span className="count">1</span>
                                    <span className="line"></span>
                                </div>
                            </li>
                            <li className='align-items-end'>
                                <div className="timeline-list-item content">
                                    <h4 className="text-uppercase mb-4 mb-lg-5 ff-secondary fs-sm fs-md-lg fw-bold text-warning">STAGE</h4>
                                    <div style={{ maxWidth: 220 }}>
                                        <div className='djjIm'><strong>Q1 2023</strong></div>
                                        <ul className="list-unstyled firNhnm lh-lg fs-xs fs-md-sm">
                                            <li>• 20+ blockchains integrated</li>
                                            <li>• Blithe widget</li>
                                            <li>• NFT integration</li>
                                            <li>• NFC payment integration</li>
                                            <li>• Touch ID and Face ID login</li>
                                            <li>• In-wallet DApp browser launch</li>
                                            <li>• Send using QR code</li>
                                            <li>• Chrome extension launch for our wallet</li>
                                            {/* <li>• Chrome extension launch for our wallet</li> */}
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className='align-items-end'>
                                <div className="timeline-list-count">
                                    <span className="count">3</span>
                                    <span className="line"></span>
                                </div>
                            </li>
                            <li className='timeline-list-middle rounded-start'><span className="arrow-down"></span></li>
                            <li className='timeline-list-middle bg-warning'><span className="arrow-up"></span></li>
                            <li className='timeline-list-middle rounded-end'><span className="arrow-down"></span></li>
                            <li className='align-items-start'>
                                <div className="timeline-list-item content">
                                    <h4 className="text-uppercase mb-4 mb-lg-5 ff-secondary fs-sm fs-md-lg fw-bold text-primary">STAGE</h4>
                                    <div style={{ maxWidth: 220 }}>
                                        <div className='djjIm'><strong>Q4 2022</strong></div>
                                        <ul className="list-unstyled firNhnm lh-lg fs-xs fs-md-sm">
                                            <li>• Cross-chain swap/exchange</li>
                                            <li>• Listing on CEX</li>
                                            <li>• Massive marketing</li>
                                            <li>• Catex staking partnership</li>
                                            <li>• Fiat pool exchange</li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className='align-items-start'>
                                <div className="timeline-list-count">
                                    <span className="line bg-warning"></span>
                                    <span className="count bg-warning">2</span>
                                </div>
                            </li>
                            <li className='align-items-start'>
                                <div className="timeline-list-item content">
                                    <h4 className="text-uppercase mb-4 mb-lg-5 ff-secondary fs-sm fs-md-lg fw-bold text-primary">STAGE</h4>
                                    <div style={{ maxWidth: 220 }}>
                                        <div className='djjIm'><strong>Q2 2023</strong></div>
                                        <ul className="list-unstyled lh-lg fs-xs fs-md-sm">
                                            <li>• Lending and borrowing</li>
                                            <li>• Desktop app launch for macOS, Windows and Linux</li>
                                            <li>• MoonPay Partnership to allow crypto purchases using credit/debit card</li>
                                            <li>• API Integeration & SDK</li>
                                            <li>• Blithe Mastercard and Visa card</li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>

                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Roadmap