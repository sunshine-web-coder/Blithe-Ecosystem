import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import logo from '../../assets/footer-logo.svg';
import appstore from '../../assets/app-store.svg';
import googleplay from '../../assets/google-play.svg';

// Social Icons
import socialTwitter from '../../assets/social/twitter.svg';
import socialFacebook from '../../assets/social/facebook.svg';
import socialLinkedin from '../../assets/social/linkedin.svg';
import socialGithub from '../../assets/social/github.svg';
import socialVectory from '../../assets/social/vector.svg';
import socialBall from '../../assets/social/ball.svg';

const Footer = () => {
    const data = {
        menu: [
            {
                name: 'Overview',
                url: '/overview',
            },
            {
                name: 'Features',
                url: '/features',
            },
            {
                name: 'Pricing',
                url: '/pricing',
            },
            {
                name: 'Careers',
                url: '/careers',
            },
            {
                name: 'Help',
                url: '/help',
            },
            {
                name: 'Privacy',
                url: '/privacy',
            },
        ],
        social: [
            {
                name: 'Twitter',
                icon: socialTwitter,
                url: 'https://twitter.com/',
            },
            {
                name: 'Facebook',
                icon: socialFacebook,
                url: 'https://facebook.com/',
            },
            {
                name: 'Linkedin',
                icon: socialLinkedin,
                url: 'https://linkedin.com/',
            },
            {
                name: 'Github',
                icon: socialGithub,
                url: 'https://github.com/',
            },
            {
                name: 'Vectory',
                icon: socialVectory,
                url: 'https://github.com/',
            },
            {
                name: 'socialBall',
                icon: socialBall,
                url: 'https://twitter.com/',
            },
        ]
    }
  return (
    <footer className='footer bg-primary text-white text-opacity-75 pt-6 pb-5'>
        <Container>
            <Row className='mb-5 gy-4'>
                <Col>
                    <div className="footer-widget" style={{ maxWidth: '320px'}}>
                        <div className="mb-3 mb-lg-4">
                            <img src={logo}/>
                        </div>
                        <div className="fs-md">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum cras accumsan commodo sapien.
                        </div>
                    </div>
                </Col>
                <Col md="auto">
                    <div className="footer-widget">
                        <h5 className='text-white fw-light fs-md'>Get the app</h5>

                        <div className="d-flex flex-md-column gap-3">
                            <Link to={'/'}><img src={appstore} alt="App Store"/></Link>
                            <Link to={'/'}><img src={googleplay} alt="Google Play Store"/></Link>
                        </div>

                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    {data && data.menu && 
                        <div className="footer-widget">
                            <ul className="list-inline d-flex flex-wrap gap-2 gap-lg-4">
                                {data.menu.map((item, i) => (
                                    <li key={i} className='list-inline-item'><Link to={item.url} className='link-light'>{item.name} </Link></li>
                                ))}
                            </ul>
                        </div> 
                        }
                    </Col>
            </Row>
            <Row>
                <Col><hr className='my-4'/></Col>
            </Row>
            <Row className='gy-4 flex-md-row-reverse'>
                {data && data.social &&
                <Col md="auto">
                    <ul className="list-inline mb-0 d-inline-flex gap-2 gap-lg-3">
                        {data.social.map((item, i) =>(
                        <li key={i} className="list-inline-item"><Link to={item.url}><img src={item.icon}  alt={item.name}/></Link></li>
                        ))}
                    </ul>
                </Col>}
                <Col><div className="fw-light">© 2022 Blithe Inc. All rights reserved.</div></Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer