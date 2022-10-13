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
                                    <div>
                                        <div className='djjIm'><strong>Q1 2023</strong></div>
                                        <ul className="list-unstyled lh-lg fs-xs fs-md-sm">
                                            <li>• <div>20+ blockchains integrated</div></li>
                                            <li>• <div>Blithe widget</div></li>
                                            <li>• <div>NFT integration</div></li>
                                            <li>• <div>NFC payment integration</div></li>
                                            <li>• <div>Touch ID and Face ID login</div></li>
                                            <li>• <div>In-wallet DApp browser launch</div></li>
                                            <li>• <div>Send using QR code</div></li>
                                            <li>• <div>Chrome extension launch for our wallet</div></li>
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
                                    <div>
                                        <div className='djjIm'><strong>Q4 2022</strong></div>
                                        <ul className="list-unstyled lh-lg fs-xs fs-md-sm">
                                            <li>• <div>Cross-chain swap/exchange</div></li>
                                            <li>• <div>Listing on CEX</div></li>
                                            <li>• <div>Massive marketing</div></li>
                                            <li>• <div>Catex staking partnership</div></li>
                                            <li>• <div>Fiat pool exchange</div></li>
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
                                    <div>
                                        <div className='djjIm'><strong>Q2 2023</strong></div>
                                        <ul className="list-unstyled lh-lg fs-xs fs-md-sm">
                                            <li>• <div>Lending and borrowing</div></li>
                                            <li>• <div>Desktop app launch for macOS, Windows and Linux</div></li>
                                            <li>• <div>MoonPay Partnership to allow crypto purchases using credit/debit card</div></li>
                                            <li>• <div>API Integeration & SDK</div></li>
                                            <li>• <div>Blithe Mastercard and Visa card</div></li>
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