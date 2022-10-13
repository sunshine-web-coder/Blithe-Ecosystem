import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/blithe-1.svg';
import {FiMenu} from 'react-icons/fi';

const Header = () => {
    const [isOpenMobile, setIsOpenMobile] = React.useState(false);
    const mobileMenuRef = React.useRef(null);


    // React.useEffect(() =>{
    //     console.log(mobileMenuRef.current);
    // })

    const data = {
        navmenu: [
            {
                name: "Assets",
                slug: '#assets',
            },
            {
                name: "Staking",
                slug: '#Staking',
            },
            {
                name: "Documentationm",
                slug: '#Documentationm',
            },
            {
                name: "NFTs",
                slug: '#NFTs',
            },
            {
                name: "DApp Browser",
                slug: '#DAppBrowser',
            },
        ]
    }
  return (
    <header className='header'>
        <Navbar bg="white" expand="lg" className='py-3 border-bottom' fixed="top">
        <Container>
            <Navbar.Brand href="/">
                <img src={logo} alt="theme logo"/>
                <span>Blithe</span>
            </Navbar.Brand>
            <span className="header-toggler d-lg-none fs-2xl" onClick={() => setIsOpenMobile(!isOpenMobile)}>
                    <FiMenu />
            </span>
            <Navbar.Collapse>
                {data && data.navmenu &&
                <Nav className="me-auto">
                    {data.navmenu.map((item, i) =>(
                        <Nav.Link key={i} href={item.slug}>{item.name}</Nav.Link>
                    ))}
                </Nav>
                }
            <Nav>
                <Nav.Link className='p-0 d-block' href="/"><span className='btn btn-primary'>Join Us</span></Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        {/* MOBILE */}
        {isOpenMobile &&
        <div ref={mobileMenuRef} className="header-mobile d-md-none">
                {data && data.navmenu &&
                <ul className="list-unstyled">
                    {data.navmenu.map((item, i) =>(
                        <Nav.Link key={i} href={item.slug}>{item.name}</Nav.Link>
                    ))}
                    <span className='btn w-100 btn-primary'>Join Us</span>
                </ul>
                }
        </div>
        }
        
    </header>
  )
}

export default Header