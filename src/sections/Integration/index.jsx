import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ImmutaleX  from './assets/ImmutableX.svg';
import Compound  from './assets/Compound.svg';
import Bitcoin  from './assets/Bitcoin.svg';
import BinanceSmartChain  from './assets/BinanceSmartChain.svg';
import Decentraland  from './assets/Decentraland.svg';
import Ethereum  from './assets/Ethereum.svg';
import Celo  from './assets/Celo.svg';
import Cardano  from './assets/Cardano.svg';
import Pancakeswap  from './assets/Pancakeswap.svg';
import Ens  from './assets/Ens.svg';
import AnchorProtocol  from './assets/AnchorProtocol.svg';
import Kadena  from './assets/Kadena.svg';
import SushiSwap  from './assets/SushiSwap.svg';
import Serum  from './assets/Serum.svg';
import Curve  from './assets/Curve.svg';
import ShibaInu  from './assets/ShibaInu.svg';

const Integration = () => {
    const data = {

        list: [
            { icon: ImmutaleX, },
            { icon: Compound, },
            { icon: Bitcoin, },
            { icon: BinanceSmartChain, },
            { icon: Decentraland, },
            { icon: Ethereum, },
            { icon: Celo, },
            { icon: Cardano, },

            { icon: Pancakeswap, },
            { icon: Ens, },
            { icon: AnchorProtocol, },
            { icon: Kadena, },
            { icon: SushiSwap, },
            { icon: Serum, },
            { icon: Curve, },
            { icon: ShibaInu, },
        ]
    }
  return (
    <section className='integration bg-light text-center py-5 py-lg-7'>
        <Container>
            <Row className="justify-content-center">
                <Col sm="12" md="10" lg="8" xl="8">
                    <div className="integration-header mb-5 mb-lg-6 px-xl-6 mx-xl-6">
                        <h6 className="fs-md mb-2 text-primary">Integration</h6>
                        <h4 className="fs-4xl mb-3 text-dark fw-bold">DApp Store & Aggregator</h4>
                        <p>Send and Recieve NFTs from Opensea, Rarible, many more supported marketplaces. Discover more blockchain applications in our dApp store and enhance your experience on Blithe Wallet.</p>
                    </div>
                    {data && data.list &&
                    <div className="integration-icons">
                        {data.list.map((item, i) =>(
                            <div><img src={item.icon} alt="Icon" /></div>
                        ))}
                    </div>
                    }
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Integration