import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import banner from '../../assets/hero-banner.svg';
import playStore from '../../assets/svgg/gPlay.svg';
import downloadApk from '../../assets/svgg/andriodApk.svg';
import appStore from '../../assets/svgg/AppStore.svg';

const Hero = () => {
    const data = {
        
        action: [
            { thumb: playStore, },
            { thumb: downloadApk,},
            { thumb: appStore,}
        ]
    }
  return (
    <section className='hero-area py-5 py-lg-7 mt-6'>
        <Container>
            <Row className='gy-4 align-items-center'>
                <Col md="7">
                    <div className="hero-content pe-lg-6 fs-sm-xl">
                        <h1 className='fs-3xl fs-sm-4xl fs-lg-6xl fw-bold ls-xxs text-dark mb-4 mb-lg-5'>Start Building a Solid Crypto Portfolio</h1>
                        <p>Manage and take control of your crypto assets in a non-custodial wallet.</p>
                        <ul className="list-unstyled ps-3 ps-lg-5 lh-xl mb-4 mb-lg-5">
                            <li>Over 15,000+ cryptocurrencies supported.</li>
                            <li>Send and receive NFTs from your favorite marketplace. </li>
                            <li>Fiat-to-crypto transactions enabled.  </li>
                            <li>Stake, supply, and borrow liquidity from an intuitive DEX all</li>
                        </ul>

                        {data && data.action &&
                        <ul className="list-inline">
                            {data.action.map((item, i) => <li key={i} className="list-inline-item"><img src={item.thumb} alt="Apple "/></li>
                            )}
                        </ul>}
                    </div>
                </Col>
                <Col md="5">
                    <div className="hero-banner">
                        <img src={banner} className="img-fluid" alt="Hero Banner" />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Hero;